import { useState, useEffect } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { 
  ProjectStatus, 
  ProjectFieldsFragment,
  useProjectCloseMutation, 
  useProjectPutInReviewMutation 
} from "@/types/generated/graphql";
import ProjectStatusReasonModal from "./ProjectStatusReasonModal";
import { ExternalLink, Star, Check, Copy } from "lucide-react";
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
    // Optional: Try parsing as a date string directly as a fallback?
    // const dateObjFromString = new Date(dateString);
    // if (!isNaN(dateObjFromString.getTime())) {
    //   return dateObjFromString.toLocaleDateString();
    // }
    return 'Invalid Date';
  }

  try {
    // Use the parsed number with new Date()
    const dateObj = new Date(numericTimestamp); 
    
    // Check if the date object is valid (it should be if numericTimestamp was valid)
    if (isNaN(dateObj.getTime())) {
      // This case should be less likely now but kept as a safeguard
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
}

interface ModalState {
  isOpen: boolean;
  projectId: string | null;
  intendedStatus: ProjectStatus.InReview | ProjectStatus.Closed | null;
}

const ProjectsTable = ({ 
  projects, 
  onRenderedCountChange, 
  disableReviewedFilter = false
}: ProjectsTableProps) => {
  const { toast } = useToast();
  const [modalState, setModalState] = useState<ModalState>({ 
    isOpen: false, 
    projectId: null, 
    intendedStatus: null 
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

  const [putInReviewMutate, { loading: putInReviewLoading }] = useProjectPutInReviewMutation();
  const [closeMutate, { loading: closeLoading }] = useProjectCloseMutation();

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

  // New handler for un-marking a project as reviewed
  const handleUnreviewProject = (projectId: string) => {
    const currentReviewed = getReviewedProjects();
    if (currentReviewed.includes(projectId)) {
      const updatedReviewed = currentReviewed.filter(id => id !== projectId);
      saveReviewedProjects(updatedReviewed);
      setReviewedProjects(updatedReviewed); // Update local state
    }
  };

  const handleStatusChangeRequest = (project: ProjectFieldsFragment, newStatusValue: string) => {
    const intendedStatus = newStatusValue === "in-review" 
      ? ProjectStatus.InReview 
      : ProjectStatus.Closed;
      
    setModalState({
      isOpen: true,
      projectId: project.id,
      intendedStatus: intendedStatus
    });
  };

  const handleModalConfirm = async (
    projectId: string, 
    reason: string, 
    status: ProjectStatus.InReview | ProjectStatus.Closed
  ) => {
    const mutationVariables = { input: { projectId, reason } };

    try {
      let result;
      let updatedProjectData = null;

      if (status === ProjectStatus.InReview) {
        result = await putInReviewMutate({ variables: mutationVariables });
        updatedProjectData = result.data?.projectPutInReview;
      } else {
        result = await closeMutate({ variables: mutationVariables });
        updatedProjectData = result.data?.projectClose;
      }

      toast({
        title: "Status updated successfully",
        description: `Project ${updatedProjectData?.id || projectId} has been marked as ${status}.`,
      });
      setModalState({ isOpen: false, projectId: null, intendedStatus: null });

    } catch (error) {
      console.error("Failed to update project status:", error);
      toast({
        title: "Error updating status",
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

  const getSelectValueFromStatus = (status: ProjectStatus | null | undefined): string => {
    if (status === ProjectStatus.InReview) return 'in-review';
    if (status === ProjectStatus.Closed) return 'closed';
    return ''; 
  };

  const getProjectUrl = (projectName: string | null | undefined): string => {
    return projectName ? `https://geyser.fund/project/${projectName}` : '#'; 
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

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Project Title</TableHead>
              <TableHead className="w-[120px]">Status</TableHead>
              <TableHead className="w-[200px]">Mark As</TableHead>
              <TableHead className="w-[150px]">Rejection Reason</TableHead>
              <TableHead className="w-[150px]">Created On</TableHead>
              <TableHead className="w-[50px]">URL</TableHead>
              <TableHead className="w-[80px]">Watchlist</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
              <TableHead className="w-[80px]">Copy Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visibleProjects.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                  {projects.length > 0 ? "All recent projects marked as reviewed or none match filter" : "No projects found"}
                </TableCell>
              </TableRow>
            ) : (
              visibleProjects.map((project) => {
                const isWatchlisted = watchlist.includes(project.id);
                const isReviewed = reviewedProjects.includes(project.id);

                return (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.title}</TableCell>
                    <TableCell>{getStatusBadge(project.status)}</TableCell>
                    <TableCell>
                      <Select
                        onValueChange={(value) => handleStatusChangeRequest(project, value)}
                        value={getSelectValueFromStatus(project.status)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Change status..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="in-review">In Review</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {project.rejectionReason || '-'}
                    </TableCell>
                    <TableCell>{formatDate(project.createdAt)}</TableCell>
                    <TableCell>
                      <a 
                        href={getProjectUrl(project.name)}
                        target="_blank" 
                        rel="noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleWatchlistToggle(project.id)}
                        aria-label={isWatchlisted ? "Remove from watchlist" : "Add to watchlist"}
                      >
                        <Star className={`h-4 w-4 ${isWatchlisted ? 'fill-current text-yellow-500' : 'text-muted-foreground'}`} />
                      </Button>
                    </TableCell>
                    <TableCell>
                      {isReviewed ? (
                        <div className="group relative">
                          <Button 
                            variant="link" 
                            size="sm" 
                            onClick={() => handleUnreviewProject(project.id)}
                            className="text-muted-foreground hover:text-foreground p-0 h-auto no-underline hover:no-underline"
                            aria-label="Mark as not reviewed"
                          >
                            <span className="group-hover:hidden">Reviewed</span>
                            <span className="hidden group-hover:inline text-red-600">Unreview</span>
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleMarkAsReviewed(project.id)}
                          aria-label="Mark as reviewed"
                          className="flex items-center gap-1"
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleCopyEmail(project.owners?.[0]?.user?.email)}
                        aria-label="Copy owner's email"
                        disabled={!project.owners?.[0]?.user?.email}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      <ProjectStatusReasonModal
        isOpen={modalState.isOpen}
        onOpenChange={(open) => setModalState({ ...modalState, isOpen: open })}
        projectId={modalState.projectId || ''}
        intendedStatus={modalState.intendedStatus || ProjectStatus.InReview}
        onConfirm={handleModalConfirm}
        isLoading={putInReviewLoading || closeLoading}
      />
    </>
  );
};

export default ProjectsTable;
