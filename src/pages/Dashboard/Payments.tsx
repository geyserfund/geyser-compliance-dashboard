import { gql, useMutation, useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import { AlertCircle } from "lucide-react";

import DashboardPageHeader from "@/components/Dashboard/DashboardPageHeader";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  AmountCurrency,
  OrderByDirection,
  PaymentLinkedEntityType,
  PaymentCurrency,
  PaymentStatus,
  type PaymentConfirmInput,
  type PaymentGetInput,
} from "@/types/generated/graphql";

const PAYMENT_BY_UUID_QUERY = gql`
  query AdminPaymentByUuid($input: PaymentGetInput!) {
    payment(input: $input) {
      id
      uuid
      linkedEntityType
      linkedEntityUUID
      status
      failureReason
      createdAt
      paymentAmount
      paymentCurrency
    }
  }
`;

const PAYMENT_CONFIRM_MUTATION = gql`
  mutation AdminPaymentConfirm($input: PaymentConfirmInput!) {
    paymentConfirm(input: $input) {
      success
      id
    }
  }
`;

const PAYMENTS_BY_LINKED_ENTITY_UUID_QUERY = gql`
  query AdminPaymentsByLinkedEntityUuid($input: PaymentsGetInput) {
    paymentsGet(input: $input) {
      payments {
        id
        uuid
        linkedEntityType
        linkedEntityUUID
        status
        failureReason
        createdAt
        paymentAmount
        paymentCurrency
      }
    }
  }
`;

interface PaymentByUuidQueryData {
  payment?: {
    id: string;
    uuid: string;
    linkedEntityType: PaymentLinkedEntityType;
    linkedEntityUUID: string;
    status: PaymentStatus;
    failureReason?: string | null;
    createdAt: string;
    paymentAmount: number;
    paymentCurrency: PaymentCurrency;
  } | null;
}

interface PaymentByUuidQueryVariables {
  input: PaymentGetInput;
}

interface PaymentRecord {
  id: string;
  uuid: string;
  linkedEntityType: PaymentLinkedEntityType;
  linkedEntityUUID: string;
  status: PaymentStatus;
  failureReason?: string | null;
  createdAt: string;
  paymentAmount: number;
  paymentCurrency: PaymentCurrency;
}

interface PaymentsByLinkedEntityUuidData {
  paymentsGet?: {
    payments: PaymentRecord[];
  } | null;
}

interface PaymentsByLinkedEntityUuidVariables {
  input: {
    where: {
      linkedEntityUUID: string;
    };
    orderBy: {
      createdAt: OrderByDirection;
    };
    pagination: {
      take: number;
    };
  };
}

type SearchMode = "payment_uuid" | "linked_entity_uuid";

const statusToBadgeVariant = (
  status: PaymentStatus
): "default" | "secondary" | "destructive" | "outline" => {
  if (status === PaymentStatus.Paid) return "default";
  if (status === PaymentStatus.Failed || status === PaymentStatus.Canceled) {
    return "destructive";
  }
  if (status === PaymentStatus.Pending) return "secondary";
  return "outline";
};

const formatStatus = (status: PaymentStatus): string => {
  return status
    .toLowerCase()
    .replaceAll("_", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const formatEntityType = (value: PaymentLinkedEntityType): string => {
  return value
    .toLowerCase()
    .replaceAll("_", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const isPaymentConfirmable = (status: PaymentStatus): boolean => {
  return status === PaymentStatus.Claimable;
};

const toAmountCurrency = (paymentCurrency: PaymentCurrency): AmountCurrency => {
  if (paymentCurrency === PaymentCurrency.Btcsat) {
    return AmountCurrency.Btcsat;
  }
  return AmountCurrency.Usdcent;
};

const PaymentsPage = () => {
  const { toast } = useToast();
  const [searchMode, setSearchMode] = useState<SearchMode>("payment_uuid");
  const [searchInput, setSearchInput] = useState("");
  const [searchedUuid, setSearchedUuid] = useState("");
  const [confirmingPaymentUuid, setConfirmingPaymentUuid] = useState<string | null>(null);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const paymentQuery = useQuery<PaymentByUuidQueryData, PaymentByUuidQueryVariables>(
    PAYMENT_BY_UUID_QUERY,
    {
      variables: { input: { uuid: searchedUuid } },
      skip: !searchedUuid || searchMode !== "payment_uuid",
      fetchPolicy: "network-only",
    }
  );

  const linkedEntityQueryVariables = useMemo<PaymentsByLinkedEntityUuidVariables>(
    () => ({
      input: {
        where: { linkedEntityUUID: searchedUuid },
        orderBy: { createdAt: OrderByDirection.Desc },
        pagination: { take: 1 },
      },
    }),
    [searchedUuid]
  );

  const paymentByLinkedEntityUuidQuery = useQuery<
    PaymentsByLinkedEntityUuidData,
    PaymentsByLinkedEntityUuidVariables
  >(PAYMENTS_BY_LINKED_ENTITY_UUID_QUERY, {
    variables: linkedEntityQueryVariables,
    skip: !searchedUuid || searchMode !== "linked_entity_uuid",
    fetchPolicy: "network-only",
  });

  const [confirmPaymentMutation, { loading: confirmLoading }] = useMutation(
    PAYMENT_CONFIRM_MUTATION
  );

  const payment =
    searchMode === "payment_uuid"
      ? paymentQuery.data?.payment
      : paymentByLinkedEntityUuidQuery.data?.paymentsGet?.payments?.[0];

  const isSearching = Boolean(searchedUuid);
  const queryError =
    searchMode === "payment_uuid"
      ? paymentQuery.error
      : paymentByLinkedEntityUuidQuery.error;
  const queryLoading =
    searchMode === "payment_uuid"
      ? paymentQuery.loading
      : paymentByLinkedEntityUuidQuery.loading;

  const confirmPayment = async () => {
    if (!payment) return;

    const input: PaymentConfirmInput = {
      uuid: payment.uuid,
      amount: payment.paymentAmount,
      amountCurrency: toAmountCurrency(payment.paymentCurrency),
    };

    try {
      setConfirmingPaymentUuid(payment.uuid);
      await confirmPaymentMutation({ variables: { input } });
      setConfirmModalOpen(false);
      toast({
        title: "Payment confirmed",
        description: `Payment ${payment.uuid} was confirmed.`,
      });
      if (searchMode === "payment_uuid") {
        await paymentQuery.refetch();
      } else {
        await paymentByLinkedEntityUuidQuery.refetch();
      }
    } catch (error) {
      toast({
        title: "Failed to confirm payment",
        description: error instanceof Error ? error.message : "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setConfirmingPaymentUuid(null);
    }
  };

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="Payments"
        description="Search for a payment by UUID or linked entity UUID."
      />

      <div className="flex flex-wrap gap-2">
        <Button
          variant={searchMode === "payment_uuid" ? "default" : "outline"}
          onClick={() => {
            setSearchMode("payment_uuid");
            setSearchedUuid("");
          }}
        >
          Payment UUID
        </Button>
        <Button
          variant={searchMode === "linked_entity_uuid" ? "default" : "outline"}
          onClick={() => {
            setSearchMode("linked_entity_uuid");
            setSearchedUuid("");
          }}
        >
          Linked Entity UUID
        </Button>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          placeholder={
            searchMode === "payment_uuid"
              ? "Search payment by UUID"
              : "Search payment by linked entity UUID"
          }
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setSearchedUuid(searchInput.trim());
            }
          }}
        />
        <Button
          onClick={() => setSearchedUuid(searchInput.trim())}
          disabled={!searchInput.trim()}
        >
          Search
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setSearchInput("");
            setSearchedUuid("");
          }}
          disabled={!searchInput && !searchedUuid}
        >
          Clear
        </Button>
      </div>

      {queryError ? (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Could not fetch payment</AlertTitle>
          <AlertDescription>
            {queryError.message || "An unexpected error occurred."}
          </AlertDescription>
        </Alert>
      ) : null}

      {isSearching && queryLoading ? (
        <Card>
          <CardContent className="pt-6 text-sm text-muted-foreground">
            Searching payment...
          </CardContent>
        </Card>
      ) : null}

      {isSearching && !queryLoading && !payment ? (
        <Card>
          <CardContent className="pt-6 text-sm text-muted-foreground">
            No payment found for {searchMode === "payment_uuid" ? "UUID" : "linked entity UUID"}{" "}
            <span className="font-mono">{searchedUuid}</span>.
          </CardContent>
        </Card>
      ) : null}

      {payment ? (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between gap-2">
              <span className="font-mono text-sm">{payment.uuid}</span>
              <Badge variant={statusToBadgeVariant(payment.status)}>
                {formatStatus(payment.status)}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <p className="text-muted-foreground">Linked Entity Type</p>
                <p>{formatEntityType(payment.linkedEntityType)}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Linked Entity UUID</p>
                <p className="font-mono text-xs">{payment.linkedEntityUUID}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Failure Reason</p>
                <p>{payment.failureReason ?? "-"}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Created At</p>
                <p>{payment.createdAt}</p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                onClick={() => setConfirmModalOpen(true)}
                disabled={
                  !isPaymentConfirmable(payment.status) ||
                  confirmLoading ||
                  confirmingPaymentUuid === payment.uuid
                }
              >
                {confirmingPaymentUuid === payment.uuid ? "Confirming..." : "Confirm"}
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : null}

      <AlertDialog
        open={confirmModalOpen}
        onOpenChange={(open) => {
          if (!confirmLoading) setConfirmModalOpen(open);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm payment?</AlertDialogTitle>
            <AlertDialogDescription>
              This will mark payment{" "}
              <span className="font-mono">{payment?.uuid ?? "-"}</span> as paid.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={confirmLoading}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              disabled={confirmLoading}
              onClick={(event) => {
                event.preventDefault();
                void confirmPayment();
              }}
            >
              {confirmLoading ? "Confirming..." : "Confirm payment"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default PaymentsPage;
