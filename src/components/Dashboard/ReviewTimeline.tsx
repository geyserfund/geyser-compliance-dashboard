import React from 'react';
import { ProjectReview, ProjectReviewStatus } from '../../types/generated/graphql';
import { FileText } from 'lucide-react';

interface ReviewTimelineProps {
  reviews: ProjectReview[];
}

export const ReviewTimeline: React.FC<ReviewTimelineProps> = ({ reviews }) => {
  const sortedReviews = reviews
    .slice()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  // No status icon

  const getStatusText = (status: ProjectReviewStatus) => {
    switch (status) {
      case ProjectReviewStatus.Accepted:
        return 'Accepted';
      case ProjectReviewStatus.Rejected:
        return 'Rejected';
      case ProjectReviewStatus.RevisionsRequested:
        return 'Revisions Requested';
      case ProjectReviewStatus.Pending:
      default:
        return 'Pending Review';
    }
  };

  // Accent text color for headings/icons
  const getStatusAccentText = (status: ProjectReviewStatus) => {
    switch (status) {
      case ProjectReviewStatus.Accepted:
        return 'text-green-700';
      case ProjectReviewStatus.Rejected:
        return 'text-red-700';
      case ProjectReviewStatus.RevisionsRequested:
        return 'text-amber-700';
      case ProjectReviewStatus.Pending:
      default:
        return 'text-gray-700';
    }
  };

  // Minimal accent border on the left of the card
  const getStatusAccentBorder = (status: ProjectReviewStatus) => {
    switch (status) {
      case ProjectReviewStatus.Accepted:
        return 'border-l-green-500';
      case ProjectReviewStatus.Rejected:
        return 'border-l-red-500';
      case ProjectReviewStatus.RevisionsRequested:
        return 'border-l-amber-500';
      case ProjectReviewStatus.Pending:
      default:
        return 'border-l-gray-400';
    }
  };

  // No icon wrapper – keep the icon minimal

  if (sortedReviews.length === 0) {
    return (
      <div className="text-center py-8">
        <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500">No reviews yet</p>
        <p className="text-sm text-gray-400 mt-2">
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
            <div className="absolute left-6 top-12 w-0.5 h-6 bg-gray-200"></div>
          )}
          
          <div className="flex items-start">
            
            {/* Review content */}
            <div className="flex-1 min-w-0">
              <div className={`relative rounded-md border bg-white p-4 border-gray-200 border-l-4 ${getStatusAccentBorder(review.status)}`}>
                <div className="flex items-center justify-between mb-1">
                  <h3 className={`font-medium tracking-tight ${getStatusAccentText(review.status)}`}>
                    {getStatusText(review.status)}
                  </h3>
                  <time className="text-xs text-gray-500">
                    {new Date(review.createdAt).toLocaleString()}
                  </time>
                </div>
                
                {/* Show review notes if present */}
                {review.reviewNotes && review.reviewNotes.trim().length > 0 && (
                  <div className="mt-3 pl-3 border-l-2 border-gray-200">
                    <div className="text-xs text-gray-500 mb-1">Reviewer notes</div>
                    <p className="text-sm text-gray-800 whitespace-pre-wrap leading-6">{review.reviewNotes}</p>
                  </div>
                )}

                {/* Show rejection reasons if any */}
                {review.rejectionReasons && review.rejectionReasons.length > 0 && (
                  <div className="mt-3">
                    <div className="text-xs text-gray-500 mb-1">
                      {review.status === ProjectReviewStatus.Rejected ? 'Rejection reasons' : 'Issues to address'}
                    </div>
                    <ul className="ml-4 list-disc text-sm text-gray-800 space-y-1">
                      {review.rejectionReasons.map((reason, idx) => (
                        <li key={idx}>
                          {reason.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Review metadata */}
                <div className="mt-4 pt-2 border-t border-gray-100">
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>Review ID: {review.id}</span>
                    {review.reviewedAt && (
                      <span>
                        Reviewed on: {new Date(review.reviewedAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 