import { Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { ProjectReviewStatus, ProjectReviewStatusInput } from "@/types/generated/graphql"
import type {
  ProjectFieldsFragment,
} from "@/types/generated/graphql"

interface AiReviewSuggestionPanelProps {
  project: ProjectFieldsFragment
  className?: string
  onApply?: (input: {
    reviewStatus: ProjectReviewStatusInput
    reviewNotes: string
    rejectionReasons: string[]
  }) => void
}

const decisionBadgeVariant = (decision: ProjectReviewStatus | null | undefined) => {
  switch (decision) {
    case "ACCEPTED":
      return "success"
    case "REJECTED":
      return "destructive"
    case "REVISIONS_REQUESTED":
      return "warning"
    default:
      return "secondary"
  }
}

const decisionLabel = (decision: ProjectReviewStatus | null | undefined) => {
  switch (decision) {
    case "ACCEPTED":
      return "Accept"
    case "REJECTED":
      return "Reject"
    case "REVISIONS_REQUESTED":
      return "Request Revisions"
    default:
      return "Pending"
  }
}

const reviewStatusInputMap: Partial<Record<ProjectReviewStatus, ProjectReviewStatusInput>> = {
  [ProjectReviewStatus.Accepted]: ProjectReviewStatusInput.Accepted,
  [ProjectReviewStatus.Rejected]: ProjectReviewStatusInput.Rejected,
  [ProjectReviewStatus.RevisionsRequested]: ProjectReviewStatusInput.RevisionsRequested,
}

const getLatestReview = (project: ProjectFieldsFragment) => {
  const reviews = project.reviews ?? []
  if (reviews.length === 0) return null

  let latestReview = reviews[0]
  let latestReviewTime = new Date(reviews[0].createdAt).getTime()

  for (let i = 1; i < reviews.length; i += 1) {
    const reviewTime = new Date(reviews[i].createdAt).getTime()
    if (reviewTime > latestReviewTime) {
      latestReview = reviews[i]
      latestReviewTime = reviewTime
    }
  }

  return latestReview
}

const renderPendingState = () => (
  <div className="space-y-3">
    <Skeleton className="h-4 w-40" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
  </div>
)

const renderFailureState = (failureReason?: string | null) => (
  <Alert>
    <AlertDescription>
      {failureReason?.trim() || "AI suggestion is unavailable right now."}
    </AlertDescription>
  </Alert>
)

const AiReviewSuggestionPanel = ({ project, className, onApply }: AiReviewSuggestionPanelProps) => {
  const latestReview = getLatestReview(project)

  if (!latestReview || latestReview.status !== "PENDING") {
    return null
  }

  const suggestion = latestReview.complianceSuggestion
  const suggestionStatus = suggestion?.status
  const isMockSuggestion = suggestion?.model === "mock-ai-review-engine"
  const appliedReviewStatus = suggestion?.recommendedStatus
    ? reviewStatusInputMap[suggestion.recommendedStatus]
    : undefined

  const handleApply = () => {
    if (!suggestion || !appliedReviewStatus || !onApply) {
      return
    }

    onApply({
      reviewStatus: appliedReviewStatus,
      reviewNotes: suggestion.noteToCreator?.trim() || "",
      rejectionReasons: suggestion.reasons,
    })
  }

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="flex items-center gap-2 text-base">
              <Sparkles className="h-4 w-4 text-primary" />
              AI suggestion
            </CardTitle>
            <CardDescription>
              Generated automatically from the project details and Geyser&apos;s Terms.
            </CardDescription>
          </div>
          {onApply && appliedReviewStatus && suggestionStatus === "READY" ? (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleApply}
              className="shrink-0"
            >
              Apply
            </Button>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {!suggestion || suggestionStatus === "PENDING" ? (
          renderPendingState()
        ) : suggestionStatus === "FAILED" ? (
          renderFailureState(suggestion.failureReason)
        ) : (
          <div className="space-y-4">
            {isMockSuggestion ? (
              <Alert>
                <AlertDescription>
                  Mock review mode is enabled. This suggestion was generated locally for flow testing and did not call OpenAI.
                </AlertDescription>
              </Alert>
            ) : null}

            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-muted-foreground">Recommended decision:</span>
              <Badge variant={decisionBadgeVariant(suggestion.recommendedStatus)}>
                {decisionLabel(suggestion.recommendedStatus)}
              </Badge>
            </div>

            {suggestion.noteToCreator ? (
              <div className="space-y-1">
                <p className="text-sm font-medium">Note to creator</p>
                <p className="text-sm text-muted-foreground">{suggestion.noteToCreator}</p>
              </div>
            ) : null}

            {suggestion.reasons.length > 0 ? (
              <div className="space-y-2">
                <p className="text-sm font-medium">Reasons</p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {suggestion.reasons.map((reason, index) => (
                    <li key={`${reason}-${index}`}>{reason}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {suggestion.feedback.length > 0 ? (
              <div className="space-y-2">
                <p className="text-sm font-medium">Feedback</p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {suggestion.feedback.map((item, index) => (
                    <li key={`${item}-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {suggestion.termsUrl ? (
              <a
                className="text-xs text-primary underline-offset-4 hover:underline"
                href={suggestion.termsUrl}
                target="_blank"
                rel="noreferrer"
              >
                View source Terms
              </a>
            ) : null}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default AiReviewSuggestionPanel
