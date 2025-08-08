import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProjectGetQuery, ProjectStatus, useProjectReviewSubmitMutation, ProjectReviewStatusInput, RejectionReason } from '../../types/generated/graphql';
import ProjectReviewModal from '../../components/Dashboard/ProjectReviewModal';
import { ReviewTimeline } from '../../components/Dashboard/ReviewTimeline';
import { ArrowLeft, User, Calendar, ExternalLink } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [showReviewModal, setShowReviewModal] = useState(false);

  const { data, loading, error, refetch } = useProjectGetQuery({
    variables: {
      where: { id: id ? parseInt(id) : undefined }
    },
    skip: !id,
    fetchPolicy: 'no-cache'
  });

  const [submitReview, { loading: submittingReview }] = useProjectReviewSubmitMutation({
    onCompleted: () => {
      setShowReviewModal(false);
      refetch(); // Refetch the project data to show updated reviews
    },
    onError: (error) => {
      console.error('Error submitting review:', error);
    }
  });

  const project = data?.projectGet;

  const handleBack = () => {
    navigate(-1);
  };

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
            reviewNotes: reviewNotes
          }
        }
      });
    } catch (error) {
      console.error('Review submission error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </button>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-red-600">
              {error ? 'Error loading project' : 'Project not found'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Check if we can submit a review (latest review is pending)
  const latestReview = project.reviews
    .slice()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];

  const canSubmitReview = !latestReview || latestReview.status === 'PENDING';

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header with back button */}
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </button>

        {/* Project Information Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {project.title}
              </h1>
              <p className="text-gray-600 text-sm">
                Project ID: {project.id}
              </p>
            </div>
            
            {canSubmitReview && (
              <button
                onClick={() => setShowReviewModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Review
              </button>
            )}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <User className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-600">Creator:</span>
                <span className="ml-1 font-medium">
                  {project.owners[0]?.user.username || 'Unknown'}
                </span>
              </div>
              
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-600">Created:</span>
                <span className="ml-1">
                  {new Date(project.createdAt).toLocaleDateString()}
                </span>
              </div>

              {project.launchedAt && (
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">Launched:</span>
                  <span className="ml-1">
                    {new Date(project.launchedAt).toLocaleDateString()}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <span className="text-gray-600">Status:</span>
                <span className="ml-1">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === ProjectStatus.Active ? 'bg-green-100 text-green-800' :
                    project.status === ProjectStatus.Inactive ? 'bg-gray-100 text-gray-800' :
                    project.status === ProjectStatus.InReview ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {project.status}
                  </span>
                </span>
              </div>

              {project.name && (
                <div className="flex items-center text-sm">
                  <a 
                    href={`https://geyser.fund/project/${project.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                  </a>
                  <span className="text-gray-600">Project Name:</span>
                  <span className="ml-1 font-mono text-sm">
                    {project.name}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Review Timeline */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Review History
          </h2>
          <ReviewTimeline reviews={project.reviews} />
        </div>

        {/* Review Modal */}
        <ProjectReviewModal
          isOpen={showReviewModal}
          onOpenChange={setShowReviewModal}
          projectId={project.id.toString()}
          onSubmit={handleReviewSubmit}
          isLoading={submittingReview}
        />
      </div>
    </div>
  );
}; 