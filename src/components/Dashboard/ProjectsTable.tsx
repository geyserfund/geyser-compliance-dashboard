import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  ProjectStatus, 
  ProjectFieldsFragment,
  useProjectReviewSubmitMutation,
  useProjectStatusUpdateMutation,
  ProjectReviewStatusInput,
  ProjectReviewStatus,
  RejectionReason
} from "@/types/generated/graphql";
import ProjectReviewModal from "./ProjectReviewModal";
import { ExternalLink, Star, Copy, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const LOCAL_STORAGE_WATCHLIST_KEY = "dashboardWatchlist";
const LOCAL_STORAGE_REVIEWED_KEY = "dashboardReviewed";

// Function to get watchlist from localStorage
const getWatchlist = (): string[] => {
  const stored = localStorage.getItem(LOCAL_STORAGE_WATCHLIST_KEY);
  try {
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Failed to parse watchlist from localStorage", e);
    return [];
  }
};

// Function to save watchlist to localStorage
const saveWatchlist = (watchlist: string[]) => {
  localStorage.setItem(LOCAL_STORAGE_WATCHLIST_KEY, JSON.stringify(watchlist));
};

// Function to get reviewed projects from localStorage
const getReviewedProjects = (): string[] => {
  const stored = localStorage.getItem(LOCAL_STORAGE_REVIEWED_KEY);
  try {
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Failed to parse reviewed projects from localStorage", e);
    return [];
  }
};

// Function to save reviewed projects to localStorage
const saveReviewedProjects = (reviewedIds: string[]) => {
  localStorage.setItem(LOCAL_STORAGE_REVIEWED_KEY, JSON.stringify(reviewedIds));
};

const formatDate = (dateString: string | null | undefined): string => {
  if (!dateString) return '-';
  
  // Try parsing the string as a number (timestamp in ms)
  const numericTimestamp = parseInt(dateString, 10);

  // Check if parsing resulted in a valid number
  if (isNaN(numericTimestamp)) {
    return 'Invalid Date';
  }

  try {
    // Use the parsed number with new Date()
    const dateObj = new Date(numericTimestamp); 
    
    // Check if the date object is valid (it should be if numericTimestamp was valid)
    if (isNaN(dateObj.getTime())) {
      console.error("Invalid date object created from timestamp:", numericTimestamp);
      return 'Invalid Date'; 
    }
    return dateObj.toLocaleDateString(); 
  } catch (e) {
    console.error("Error creating Date object:", numericTimestamp, e);
    return 'Invalid Date';
  }
};

interface ProjectsTableProps {
  projects: ProjectFieldsFragment[];
  onRenderedCountChange?: (count: number) => void;
  disableReviewedFilter?: boolean;
  showReviewStatus?: boolean; // If true, show latest review status instead of project status
}

interface ModalState {
  isOpen: boolean;
  projectId: string | null;
}

const ProjectsTable = ({ 
  projects, 
  onRenderedCountChange, 
  disableReviewedFilter = false,
  showReviewStatus = false
}: ProjectsTableProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [modalState, setModalState] = useState<ModalState>({ 
    isOpen: false, 
    projectId: null
  });
  // Local state to track the current watchlist IDs
  const [watchlist, setWatchlist] = useState<string[]>([]); 
  // New state for reviewed projects
  const [reviewedProjects, setReviewedProjects] = useState<string[]>([]); 

  // Load watchlist and reviewed projects from localStorage on mount
  useEffect(() => {
    setWatchlist(getWatchlist());
    setReviewedProjects(getReviewedProjects());
  }, []);

  const [reviewSubmitMutate, { loading: reviewSubmitLoading }] = useProjectReviewSubmitMutation();
  const [statusUpdateMutate, { loading: statusUpdateLoading }] = useProjectStatusUpdateMutation();

  const handleWatchlistToggle = (projectId: string) => {
    const currentWatchlist = getWatchlist();
    let updatedWatchlist;
    if (currentWatchlist.includes(projectId)) {
      updatedWatchlist = currentWatchlist.filter(id => id !== projectId);
    } else {
      updatedWatchlist = [...currentWatchlist, projectId];
    }
    saveWatchlist(updatedWatchlist);
    setWatchlist(updatedWatchlist);
  };

  const handleCopyEmail = (email: string | undefined) => {
    if (email) {
      navigator.clipboard.writeText(email)
        .then(() => {
          toast({
            title: "Email Copied",
            description: `${email} copied to clipboard.`,
          });
        })
        .catch(err => {
          console.error("Failed to copy email: ", err);
          toast({
            title: "Error",
            description: "Could not copy email to clipboard.",
            variant: "destructive",
          });
        });
    } else {
      toast({
        title: "No Email",
        description: "This project does not have an owner email.",
        variant: "destructive",
      });
    }
  };

  const handleMarkAsReviewed = (projectId: string) => {
    const currentReviewed = getReviewedProjects();
    if (!currentReviewed.includes(projectId)) {
      const updatedReviewed = [...currentReviewed, projectId];
      saveReviewedProjects(updatedReviewed);
      setReviewedProjects(updatedReviewed);
    }
  };

  const handleSubmitReview = (projectId: string) => {
    setModalState({
      isOpen: true,
      projectId: projectId
    });
  };

  const handleReviewSubmit = async (
    projectId: string,
    reviewStatus: ProjectReviewStatusInput,
    rejectionReasons?: RejectionReason[],
    reviewNotes?: string
  ) => {
    try {
      const result = await reviewSubmitMutate({ 
        variables: { 
          input: { 
            projectId, 
            status: reviewStatus,
            rejectionReasons: rejectionReasons && rejectionReasons.length > 0 ? rejectionReasons : undefined,
            reviewNotes: reviewNotes
          } 
        } 
      });

      // Automatically mark the project as reviewed when review is successfully submitted
      handleMarkAsReviewed(projectId);

      toast({
        title: "Review submitted successfully",
        description: `Project ${projectId} review has been submitted with status ${reviewStatus}.`,
      });
      setModalState({ isOpen: false, projectId: null });

    } catch (error) {
      console.error("Failed to submit review:", error);
      toast({
        title: "Error submitting review",
        description: error instanceof Error ? error.message : "An unknown error occurred.",
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: ProjectStatus | null | undefined) => {
    switch (status) {
      case ProjectStatus.Active:
        return <Badge className="status-approved">Active</Badge>;
      case ProjectStatus.InReview:
        return <Badge className="status-pending">In Review</Badge>;
      case ProjectStatus.Closed:
        return <Badge className="status-rejected">Closed</Badge>;
      case ProjectStatus.Draft:
         return <Badge variant="secondary">Draft</Badge>;
      case ProjectStatus.Deleted:
         return <Badge variant="destructive">Deleted</Badge>;
       case ProjectStatus.Inactive:
         return <Badge variant="outline">Inactive</Badge>;
       case ProjectStatus.PreLaunch:
          return <Badge className="status-prelaunch">Pre-launch</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getProjectUrl = (projectName: string | null | undefined): string => {
    return projectName ? `https://geyser.fund/project/${projectName}` : '#'; 
  };

  // Helper function to get the latest review for a project
  const getLatestReview = (project: ProjectFieldsFragment) => {
    if (!project.reviews || project.reviews.length === 0) return null;
    
    // Sort reviews by createdAt descending to get the latest one
    const sortedReviews = [...project.reviews].sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    
    return sortedReviews[0];
  };

  // Helper function to get review status badge
  const getReviewStatusBadge = (status: ProjectReviewStatus | null | undefined) => {
    switch (status) {
      case ProjectReviewStatus.Accepted:
        return <Badge className="status-approved">Accepted</Badge>;
      case ProjectReviewStatus.Rejected:
        return <Badge className="status-rejected">Rejected</Badge>;
      case ProjectReviewStatus.RevisionsRequested:
        return <Badge className="status-pending">Revisions Requested</Badge>;
      case ProjectReviewStatus.Pending:
        return <Badge className="status-pending">Pending</Badge>;
      default:
        return <Badge variant="outline">No Review</Badge>;
    }
  };

  // Helper function to determine if submit review should be disabled
  const isSubmitReviewDisabled = (project: ProjectFieldsFragment): { disabled: boolean; reason?: string } => {
    if (!showReviewStatus) return { disabled: false };
    
    const latestReview = getLatestReview(project);
    if (!latestReview) return { disabled: false };
    
    if (latestReview.status === ProjectReviewStatus.RevisionsRequested) {
      return { disabled: true, reason: "Creator action required" };
    }
    
    return { disabled: false };
  };

  // Filter projects *before* rendering, conditionally skipping the reviewed filter
  const visibleProjects = disableReviewedFilter 
    ? projects // If prop is true, show all passed projects
    : projects.filter(project => !reviewedProjects.includes(project.id)); // Otherwise, filter reviewed

  // Effect to report the count of visible projects
  useEffect(() => {
    if (onRenderedCountChange) {
      onRenderedCountChange(visibleProjects.length);
    }
  }, [visibleProjects.length, onRenderedCountChange]);

  const handleRowClick = (projectId: string) => {
    navigate(`/dashboard/project/${projectId}`);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    // Prevent row click when clicking buttons
    e.stopPropagation();
  };

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Project Title</TableHead>
              <TableHead className="w-[120px]">Status</TableHead>
              <TableHead className="w-[150px]">Created On</TableHead>
              <TableHead className="w-[50px]">URL</TableHead>
              <TableHead className="w-[80px]">Watchlist</TableHead>
              <TableHead className="w-[80px]">Copy Email</TableHead>
              <TableHead className="w-[120px]">Submit Review</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visibleProjects.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  {projects.length > 0 ? "All recent projects marked as reviewed or none match filter" : "No projects found"}
                </TableCell>
              </TableRow>
            ) : (
              visibleProjects.map((project) => {
                const isWatchlisted = watchlist.includes(project.id);
                const latestReview = getLatestReview(project);
                const submitReviewState = isSubmitReviewDisabled(project);

                return (
                  <TableRow 
                    key={project.id} 
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleRowClick(project.id)}
                  >
                    <TableCell className="font-medium">{project.title}</TableCell>
                    <TableCell>
                      {showReviewStatus 
                        ? getReviewStatusBadge(latestReview?.status) 
                        : getStatusBadge(project.status)
                      }
                    </TableCell>
                    <TableCell>{formatDate(project.createdAt)}</TableCell>
                    <TableCell>
                      <a 
                        href={getProjectUrl(project.name)}
                        target="_blank" 
                        rel="noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                        onClick={handleButtonClick}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={(e) => {
                          handleButtonClick(e);
                          handleWatchlistToggle(project.id);
                        }}
                        aria-label={isWatchlisted ? "Remove from watchlist" : "Add to watchlist"}
                      >
                        <Star className={`h-4 w-4 ${isWatchlisted ? 'fill-current text-yellow-500' : 'text-muted-foreground'}`} />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          handleButtonClick(e);
                          handleCopyEmail(project.owners?.[0]?.user?.email);
                        }}
                        aria-label="Copy owner's email"
                        disabled={!project.owners?.[0]?.user?.email}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </TableCell>
                    <TableCell>
                      {submitReviewState.disabled ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span onClick={handleButtonClick}>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  disabled={true}
                                  aria-label="Submit review for project (disabled)"
                                  className="flex items-center gap-1"
                                >
                                  <FileText className="h-4 w-4" />
                                  Review
                                </Button>
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{submitReviewState.reason}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            handleButtonClick(e);
                            handleSubmitReview(project.id);
                          }}
                          aria-label="Submit review for project"
                          className="flex items-center gap-1"
                        >
                          <FileText className="h-4 w-4" />
                          Review
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      <ProjectReviewModal
        isOpen={modalState.isOpen}
        onOpenChange={(open) => setModalState({ ...modalState, isOpen: open })}
        projectId={modalState.projectId || ''}
        onSubmit={handleReviewSubmit}
        isLoading={reviewSubmitLoading}
      />
    </>
  );
};

export default ProjectsTable;
