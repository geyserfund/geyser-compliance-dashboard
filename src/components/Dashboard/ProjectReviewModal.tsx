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
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { ProjectReviewStatusInput, RejectionReason } from '@/types/generated/graphql';
import { useRejectionReasons } from '@/hooks/useRejectionReasons';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ProjectReviewModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  projectId: string;
  onSubmit: (
    projectId: string,
    reviewStatus: ProjectReviewStatusInput,
    rejectionReasons?: RejectionReason[],
    reviewNotes?: string
  ) => void;
  isLoading: boolean;
}

const ProjectReviewModal = ({
  isOpen,
  onOpenChange,
  projectId,
  onSubmit,
  isLoading,
}: ProjectReviewModalProps) => {
  const [selectedReviewType, setSelectedReviewType] = useState<ProjectReviewStatusInput | null>(null);
  const [selectedRejectionReasons, setSelectedRejectionReasons] = useState<RejectionReason[]>([]);
  const [reviewNotes, setReviewNotes] = useState<string>('');
  const { reasons, loading: reasonsLoading, error: reasonsError, refetch } = useRejectionReasons();

  const handleSubmit = () => {
    if (selectedReviewType) {
      onSubmit(
        projectId, 
        selectedReviewType, 
        selectedRejectionReasons.length > 0 ? selectedRejectionReasons : undefined,
        reviewNotes?.trim() ? reviewNotes.trim() : undefined
      );
    }
  };

  const handleClose = () => {
    setSelectedReviewType(null);
    setSelectedRejectionReasons([]);
    setReviewNotes('');
    onOpenChange(false);
  };

  const handleRejectionReasonChange = (reason: RejectionReason, checked: boolean) => {
    setSelectedRejectionReasons(prev => {
      if (checked) {
        return [...prev, reason];
      } else {
        return prev.filter(r => r !== reason);
      }
    });
  };

  // Check if rejection reasons should be shown
  const showRejectionReasons = selectedReviewType === ProjectReviewStatusInput.Rejected || 
                              selectedReviewType === ProjectReviewStatusInput.RevisionsRequested;

  // Check if form is valid for submission
  const isFormValid = selectedReviewType !== null;

  const getReviewTypeLabel = (type: ProjectReviewStatusInput): string => {
    switch (type) {
      case ProjectReviewStatusInput.Accepted:
        return 'Accepted';
      case ProjectReviewStatusInput.Rejected:
        return 'Rejected';
      case ProjectReviewStatusInput.RevisionsRequested:
        return 'Revisions Requested';
      default:
        return type;
    }
  };

  const getReviewTypeDescription = (type: ProjectReviewStatusInput): string => {
    switch (type) {
      case ProjectReviewStatusInput.Accepted:
        return 'Project meets all requirements and can proceed.';
      case ProjectReviewStatusInput.Rejected:
        return 'Project does not meet requirements and should be closed.';
      case ProjectReviewStatusInput.RevisionsRequested:
        return 'Project needs changes before it can be approved.';
      default:
        return '';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Submit Project Review</DialogTitle>
          <DialogDescription>
            Review project {projectId} and submit your decision.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          {/* Review Type Selection */}
          <div className="grid gap-2">
            <Label htmlFor="review-type-select">Review Decision</Label>
              <Select 
              value={selectedReviewType || ''}
              onValueChange={(value) => {
                setSelectedReviewType(value as ProjectReviewStatusInput);
                // Clear rejection reasons when changing review type
                setSelectedRejectionReasons([]);
                  setReviewNotes('');
              }}
            >
              <SelectTrigger id="review-type-select">
                <SelectValue placeholder="Select review decision" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ProjectReviewStatusInput.Accepted}>
                  <div>
                    <div className="font-medium text-green-600">{getReviewTypeLabel(ProjectReviewStatusInput.Accepted)}</div>
                    <div className="text-xs text-muted-foreground">{getReviewTypeDescription(ProjectReviewStatusInput.Accepted)}</div>
                  </div>
                </SelectItem>
                <SelectItem value={ProjectReviewStatusInput.RevisionsRequested}>
                  <div>
                    <div className="font-medium text-yellow-600">{getReviewTypeLabel(ProjectReviewStatusInput.RevisionsRequested)}</div>
                    <div className="text-xs text-muted-foreground">{getReviewTypeDescription(ProjectReviewStatusInput.RevisionsRequested)}</div>
                  </div>
                </SelectItem>
                <SelectItem value={ProjectReviewStatusInput.Rejected}>
                  <div>
                    <div className="font-medium text-red-600">{getReviewTypeLabel(ProjectReviewStatusInput.Rejected)}</div>
                    <div className="text-xs text-muted-foreground">{getReviewTypeDescription(ProjectReviewStatusInput.Rejected)}</div>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Review Notes & Rejection Reasons */}
          {showRejectionReasons && (
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="review-notes">Review Notes (optional)</Label>
                <Textarea
                  id="review-notes"
                  placeholder="Add specific notes or context for the creator..."
                  value={reviewNotes}
                  onChange={(e) => setReviewNotes(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid gap-2">
                <Label>Rejection Reasons (optional)</Label>
              {reasonsLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ) : reasonsError ? (
                <div className="space-y-2">
                  <Alert variant="destructive">
                    <AlertDescription>
                      Failed to load rejection reasons: {reasonsError}
                    </AlertDescription>
                  </Alert>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={refetch}
                    className="w-full"
                  >
                    Retry
                  </Button>
                </div>
              ) : (
                <div className="space-y-3 max-h-40 overflow-y-auto border rounded-md p-3">
                  {reasons.map((reason) => (
                    <div key={reason.key} className="flex items-start space-x-2">
                      <Checkbox
                        id={`reason-${reason.key}`}
                        checked={selectedRejectionReasons.includes(reason.key as RejectionReason)}
                        onCheckedChange={(checked) => 
                          handleRejectionReasonChange(reason.key as RejectionReason, checked as boolean)
                        }
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor={`reason-${reason.key}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {reason.description}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit} 
            disabled={!isFormValid || isLoading || (showRejectionReasons && reasonsLoading)}
          >
            {isLoading ? 'Submitting...' : 'Submit Review'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectReviewModal; 