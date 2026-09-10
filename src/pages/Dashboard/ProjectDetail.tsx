import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  ProjectReviewStatus,
  ProjectReviewStatusInput,
  RejectionReason,
  useProjectGetQuery,
  useProjectReviewSubmitMutation,
} from "@/types/generated/graphql"
import ProjectReviewModal from "@/components/Dashboard/ProjectReviewModal"
import RequestIdentityVerificationModal from "@/components/Dashboard/RequestIdentityVerificationModal"
import { ReviewTimeline } from "@/components/Dashboard/ReviewTimeline"
import { ProjectStatusBadge } from "@/components/Dashboard/StatusBadge"
import AiReviewSuggestionPanel from "@/components/Dashboard/AiReviewSuggestionPanel"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import { useRequestIdentityVerification } from "@/hooks/useRequestIdentityVerification"
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  ShieldCheck,
  User,
  Calendar,
} from "lucide-react"

export const ProjectDetail: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { toast } = useToast()
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [showVerificationModal, setShowVerificationModal] = useState(false)

  const {
    requestIdentityVerification,
    loading: requestingVerification,
  } = useRequestIdentityVerification()

  const { data, loading, error, refetch } = useProjectGetQuery({
    variables: {
      where: { id: id ? parseInt(id) : undefined },
    },
    skip: !id,
    fetchPolicy: "no-cache",
  })

  const [submitReview, { loading: submittingReview }] =
    useProjectReviewSubmitMutation({
      onCompleted: () => {
        setShowReviewModal(false)
        refetch()
      },
      onError: (submitError) => {
        console.error("Error submitting review:", submitError)
      },
    })

  const project = data?.projectGet

  const handleBack = () => {
    navigate(-1)
  }

  const handleReviewSubmit = async (
    projectId: string,
    reviewStatus: ProjectReviewStatusInput,
    rejectionReasons?: RejectionReason[],
    reviewNotes?: string
  ) => {
    try {
      await submitReview({
        variables: {
          input: {
            projectId: parseInt(projectId),
            status: reviewStatus,
            rejectionReasons: rejectionReasons || [],
            reviewNotes,
          },
        },
      })
    } catch (submitError) {
      console.error("Review submission error:", submitError)
    }
  }

  const handleRequestVerification = async (message?: string) => {
    if (!project) return
    try {
      await requestIdentityVerification({
        projectId: project.id.toString(),
        message,
      })
      setShowVerificationModal(false)
      toast({
        title: "ID verification requested",
        description: `The creator of project ${project.id} has been asked to complete identity verification and notified by email.`,
      })
      refetch()
    } catch (verificationError) {
      toast({
        title: "Error requesting ID verification",
        description:
          verificationError instanceof Error
            ? verificationError.message
            : "An unknown error occurred.",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-32" />
        </div>
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-4 w-1/3" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-2/5" />
            <Skeleton className="h-24 w-full" />
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="space-y-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleBack}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Alert variant="destructive">
          <AlertDescription>
            {error ? "Error loading project." : "Project not found."}
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  let latestReview = project.reviews[0] ?? null
  for (let i = 1; i < project.reviews.length; i += 1) {
    if (
      !latestReview ||
      new Date(project.reviews[i].createdAt).getTime() >
        new Date(latestReview.createdAt).getTime()
    ) {
      latestReview = project.reviews[i]
    }
  }

  const canSubmitReview =
    !latestReview || latestReview.status === ProjectReviewStatus.Pending

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleBack}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            onClick={() => setShowVerificationModal(true)}
            className="gap-2"
          >
            <ShieldCheck className="h-4 w-4" />
            Request ID Verification
          </Button>
          {canSubmitReview ? (
            <Button
              onClick={() => setShowReviewModal(true)}
              className="gap-2"
            >
              <FileText className="h-4 w-4" />
              Submit Review
            </Button>
          ) : null}
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>Project ID: {project.id}</CardDescription>
          </div>
          <ProjectStatusBadge status={project.status} />
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="h-4 w-4" />
                <span>Creator:</span>
                <span className="font-medium text-foreground">
                  {project.owners[0]?.user.username || "Unknown"}
                </span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Created:</span>
                <span className="text-foreground">
                  {new Date(project.createdAt).toLocaleDateString()}
                </span>
              </div>

              {project.launchedAt ? (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Launched:</span>
                  <span className="text-foreground">
                    {new Date(project.launchedAt).toLocaleDateString()}
                  </span>
                </div>
              ) : null}
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>Country:</span>
                <span className="text-foreground">
                  {project.location?.country?.name || project.location?.country?.code || "Unknown"}
                </span>
              </div>

              {project.name ? (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>Project Name:</span>
                  <span className="font-mono text-foreground">
                    {project.name}
                  </span>
                  <Button asChild variant="ghost" size="icon">
                    <a
                      href={`https://geyser.fund/project/${project.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open project"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </CardContent>
      </Card>

      <AiReviewSuggestionPanel project={project} />

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Review History</CardTitle>
          <CardDescription>
            Track compliance decisions and reviewer notes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ReviewTimeline reviews={project.reviews} />
        </CardContent>
      </Card>

      <ProjectReviewModal
        isOpen={showReviewModal}
        onOpenChange={setShowReviewModal}
        projectId={project.id.toString()}
        project={project}
        onSubmit={handleReviewSubmit}
        isLoading={submittingReview}
      />

      <RequestIdentityVerificationModal
        isOpen={showVerificationModal}
        onOpenChange={setShowVerificationModal}
        projectId={project.id.toString()}
        onConfirm={handleRequestVerification}
        isLoading={requestingVerification}
      />
    </div>
  )
}
