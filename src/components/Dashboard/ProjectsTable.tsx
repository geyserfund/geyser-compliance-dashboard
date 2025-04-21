
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
import { Project, formatDate } from "@/lib/data";
import { Eye, EyeOff, ExternalLink } from "lucide-react";

interface ProjectsTableProps {
  projects: Project[];
  onUpdateProject?: (updatedProject: Project) => void;
}

const ProjectsTable = ({ projects, onUpdateProject }: ProjectsTableProps) => {
  const { toast } = useToast();
  
  const handleToggleWatchlist = (project: Project) => {
    const updatedProject = { 
      ...project, 
      watchlisted: !project.watchlisted 
    };
    
    if (onUpdateProject) {
      onUpdateProject(updatedProject);
    }
    
    toast({
      title: updatedProject.watchlisted ? "Added to watchlist" : "Removed from watchlist",
      description: `${project.title} has been ${updatedProject.watchlisted ? "added to" : "removed from"} your watchlist.`,
    });
  };

  const handleStatusChange = (project: Project, newStatus: "in-review" | "closed") => {
    const updatedProject = { 
      ...project, 
      status: newStatus === "in-review" ? "pending" : "rejected",
      rejectionReason: newStatus === "closed" ? "Project closed by reviewer" : ""
    };
    
    if (onUpdateProject) {
      onUpdateProject(updatedProject);
    }
    
    toast({
      title: "Status updated",
      description: `${project.title} has been marked as ${newStatus === "in-review" ? "In Review" : "Closed"}.`,
    });
  };

  // Status badge mapping
  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "approved":
        return <Badge className="status-approved">Approved</Badge>;
      case "pending":
        return <Badge className="status-pending">In Review</Badge>;
      case "rejected":
        return <Badge className="status-rejected">Closed</Badge>;
      case "watchlist":
        return <Badge className="status-watchlist">Watchlist</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Project Title</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead className="w-[200px]">Mark As</TableHead>
            <TableHead className="w-[200px]">Rejection Reason</TableHead>
            <TableHead className="w-[120px]">Created At</TableHead>
            <TableHead className="w-[100px]">Watchlist</TableHead>
            <TableHead className="w-[50px]">URL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
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
                    onValueChange={(value) => handleStatusChange(project, value as "in-review" | "closed")}
                    defaultValue={project.status === "pending" ? "in-review" : "closed"}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="in-review">In Review</SelectItem>
                      <SelectItem value="closed">Close</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {project.rejectionReason || "-"}
                </TableCell>
                <TableCell>{formatDate(project.createdAt)}</TableCell>
                <TableCell>
                  {project.watchlisted ? (
                    <EyeOff
                      className="h-4 w-4 text-purple-600 cursor-pointer"
                      onClick={() => handleToggleWatchlist(project)}
                    />
                  ) : (
                    <Eye
                      className="h-4 w-4 cursor-pointer"
                      onClick={() => handleToggleWatchlist(project)}
                    />
                  )}
                </TableCell>
                <TableCell>
                  <a 
                    href={project.url} 
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
  );
};

export default ProjectsTable;
