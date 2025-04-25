import { useState } from "react";
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
import { ExternalLink } from "lucide-react";

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
}

interface ModalState {
  isOpen: boolean;
  projectId: string | null;
  intendedStatus: ProjectStatus.InReview | ProjectStatus.Closed | null;
}

const ProjectsTable = ({ projects }: ProjectsTableProps) => {
  const { toast } = useToast();
  const [modalState, setModalState] = useState<ModalState>({ 
    isOpen: false, 
    projectId: null, 
    intendedStatus: null 
  });

  const [putInReviewMutate, { loading: putInReviewLoading }] = useProjectPutInReviewMutation();
  const [closeMutate, { loading: closeLoading }] = useProjectCloseMutation();

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

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Project Title</TableHead>
              <TableHead className="w-[120px]">Status</TableHead>
              <TableHead className="w-[200px]">Mark As</TableHead>
              <TableHead className="w-[150px]">Created On</TableHead>
              <TableHead className="w-[50px]">URL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No projects found
                </TableCell>
              </TableRow>
            ) : (
              projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell>{getStatusBadge(project.status)}</TableCell>
                  <TableCell>
                    <Select
                      onValueChange={(value) => handleStatusChangeRequest(project, value)}
                      value={getSelectValueFromStatus(project.status)}
                      disabled={project.status === ProjectStatus.Closed}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Change status..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in-review">In Review</SelectItem>
                        <SelectItem value="closed">Close</SelectItem>
                      </SelectContent>
                    </Select>
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
                </TableRow>
              ))
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
