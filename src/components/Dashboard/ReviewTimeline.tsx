import React, { useMemo } from "react"
import { FileText } from "lucide-react"

import {
  getReviewStatusConfig,
  ReviewStatusBadge,
} from "@/components/Dashboard/StatusBadge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ProjectReview, ProjectReviewStatus } from "../../types/generated/graphql"

interface ReviewTimelineProps {
  reviews: ProjectReview[];
}

export const ReviewTimeline: React.FC<ReviewTimelineProps> = ({ reviews }) => {
  const sortedReviews = useMemo(() => {
    return reviews
      .slice()
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [reviews]);

  if (sortedReviews.length === 0) {
    return (
      <div className="text-center py-8">
        <FileText className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
        <p className="text-muted-foreground">No reviews yet</p>
        <p className="mt-2 text-sm text-muted-foreground">
          This project is awaiting its first review
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {sortedReviews.map((review, index) => (
        <div key={review.id} className="relative">
          {/* Timeline connector */}
          {index !== sortedReviews.length - 1 && (
            <div className="absolute left-6 top-12 h-6 w-0.5 bg-border" />
          )}
          
          <div className="flex min-w-0 items-start">
            <Card
              className={cn(
                "flex-1 border-l-4",
                getReviewStatusConfig(review.status).accentBorder
              )}
            >
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <ReviewStatusBadge status={review.status} />
                <time className="text-xs text-muted-foreground">
                  {new Date(review.createdAt).toLocaleString()}
                </time>
              </CardHeader>
              <CardContent className="space-y-3">
                {review.reviewNotes && review.reviewNotes.trim().length > 0 && (
                  <div className="rounded-md border border-border/60 bg-muted/40 p-3">
                    <div className="text-xs text-muted-foreground">
                      Reviewer notes
                    </div>
                    <p className="whitespace-pre-wrap text-sm leading-6">
                      {review.reviewNotes}
                    </p>
                  </div>
                )}

                {review.rejectionReasons && review.rejectionReasons.length > 0 && (
                  <div>
                    <div className="text-xs text-muted-foreground">
                      {review.status === ProjectReviewStatus.Rejected
                        ? "Rejection reasons"
                        : "Issues to address"}
                    </div>
                    <ul className="ml-4 list-disc space-y-1 text-sm">
                      {review.rejectionReasons.map((reason, idx) => (
                        <li key={idx}>
                          {reason
                            .replace(/_/g, " ")
                            .toLowerCase()
                            .replace(/\b\w/g, (letter) => letter.toUpperCase())}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                <span>Review ID: {review.id}</span>
                {review.reviewedAt ? (
                  <span>
                    Reviewed on:{" "}
                    {new Date(review.reviewedAt).toLocaleDateString()}
                  </span>
                ) : null}
              </CardFooter>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}; 
