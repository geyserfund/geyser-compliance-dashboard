import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { ProjectStatus } from '@/types/generated/graphql'; // Corrected import path

interface ProjectStatusReasonModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  projectId: string; // Assuming ID is string, adjust if BigInt or number
  intendedStatus: ProjectStatus.InReview | ProjectStatus.Closed; // Use enum from generated types
  onConfirm: (projectId: string, reason: string, status: ProjectStatus.InReview | ProjectStatus.Closed) => void;
  isLoading: boolean;
}

const REASONS = [
  'Selling a security, promise of returns (crypto token, NFT, etc.)',
  'Unsupported region (conflict zone, sanctioned country, etc.)',
  'Scam (fake content, fake medical expenses, etc.)',
  'Spam (irrelevant content with purposes of advertising, phishing, or debasing quality)',
  'Incomplete project (no clear story or aim)',
];

const ProjectStatusReasonModal = ({
  isOpen,
  onOpenChange,
  projectId,
  intendedStatus,
  onConfirm,
  isLoading,
}: ProjectStatusReasonModalProps) => {
  const [selectedReason, setSelectedReason] = useState<string>('');

  const handleConfirm = () => {
    if (selectedReason) {
      onConfirm(projectId, selectedReason, intendedStatus);
    }
  };

  const handleClose = () => {
    setSelectedReason('');
    onOpenChange(false);
  };

  const title = intendedStatus === ProjectStatus.InReview ? 'Mark Project for Review' : 'Close Project';
  const description = `Select a reason for marking project ID ${projectId} as ${intendedStatus === ProjectStatus.InReview ? 'In Review' : 'Closed'}.`;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="reason-select" className="text-right">
              Reason
            </Label>
            <Select 
              value={selectedReason}
              onValueChange={setSelectedReason}
            >
              <SelectTrigger id="reason-select" className="col-span-3">
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent>
                {REASONS.map((reason) => (
                  <SelectItem key={reason} value={reason}>
                    {reason}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleConfirm} disabled={!selectedReason || isLoading}>
            {isLoading ? 'Confirming...' : 'Confirm'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectStatusReasonModal; 