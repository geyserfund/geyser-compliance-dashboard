import React from 'react';
import { ProjectReview, ProjectReviewStatus } from '../../types/generated/graphql';
import { Clock, CheckCircle, XCircle, AlertTriangle, FileText } from 'lucide-react';

interface ReviewTimelineProps {
  reviews: ProjectReview[];
}

export const ReviewTimeline: React.FC<ReviewTimelineProps> = ({ reviews }) => {
  const sortedReviews = reviews
    .slice()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const getStatusIcon = (status: ProjectReviewStatus) => {
    switch (status) {
      case ProjectReviewStatus.Accepted:
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case ProjectReviewStatus.Rejected:
        return <XCircle className="h-5 w-5 text-red-500" />;
      case ProjectReviewStatus.RevisionsRequested:
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case ProjectReviewStatus.Pending:
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

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

  const getStatusColor = (status: ProjectReviewStatus) => {
    switch (status) {
      case ProjectReviewStatus.Accepted:
        return 'text-green-700 bg-green-50 border-green-200';
      case ProjectReviewStatus.Rejected:
        return 'text-red-700 bg-red-50 border-red-200';
      case ProjectReviewStatus.RevisionsRequested:
        return 'text-yellow-700 bg-yellow-50 border-yellow-200';
      case ProjectReviewStatus.Pending:
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

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
          
          <div className="flex items-start space-x-4">
            {/* Status icon */}
            <div className="flex-shrink-0 mt-1">
              {getStatusIcon(review.status)}
            </div>
            
            {/* Review content */}
            <div className="flex-1 min-w-0">
              <div className={`border rounded-lg p-4 ${getStatusColor(review.status)}`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">
                    {getStatusText(review.status)}
                  </h3>
                  <time className="text-sm text-gray-500">
                    {new Date(review.createdAt).toLocaleString()}
                  </time>
                </div>
                
                {/* Show rejection reasons if any */}
                {review.rejectionReasons && review.rejectionReasons.length > 0 && (
                  <div className="mt-3">
                    <h4 className="text-sm font-medium mb-2">
                      {review.status === ProjectReviewStatus.Rejected ? 'Rejection Reasons:' : 'Issues to Address:'}
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {review.rejectionReasons.map((reason, idx) => (
                        <li key={idx} className="text-sm">
                          {reason.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Review metadata */}
                <div className="mt-3 pt-3 border-t border-current border-opacity-20">
                  <div className="flex justify-between items-center text-xs">
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