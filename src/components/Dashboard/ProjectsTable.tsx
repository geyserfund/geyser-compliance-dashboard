
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Project, formatDate } from "@/lib/data";
import { Eye, EyeOff } from "lucide-react";

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

  const handleStatusChange = (project: Project, newStatus: Project["status"]) => {
    const updatedProject = { ...project, status: newStatus };
    
    if (onUpdateProject) {
      onUpdateProject(updatedProject);
    }
    
    toast({
      title: "Status updated",
      description: `${project.title} has been marked as ${newStatus}.`,
    });
  };

  // Status badge mapping
  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "approved":
        return <Badge className="status-approved">Approved</Badge>;
      case "pending":
        return <Badge className="status-pending">Pending</Badge>;
      case "rejected":
        return <Badge className="status-rejected">Rejected</Badge>;
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
            <TableHead className="w-[300px]">Project Title</TableHead>
            <TableHead className="w-[300px]">Project URL</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead className="w-[200px]">Mark As</TableHead>
            <TableHead className="w-[120px]">Created At</TableHead>
            <TableHead className="w-[100px]">Watchlist</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                No projects found
              </TableCell>
            </TableRow>
          ) : (
            projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">{project.title}</TableCell>
                <TableCell>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-blue-500 hover:underline truncate block"
                  >
                    {project.url}
                  </a>
                </TableCell>
                <TableCell>{getStatusBadge(project.status)}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={project.status === "approved" ? "bg-green-100" : ""}
                      onClick={() => handleStatusChange(project, "approved")}
                    >
                      Approve
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={project.status === "rejected" ? "bg-red-100" : ""}
                      onClick={() => handleStatusChange(project, "rejected")}
                    >
                      Reject
                    </Button>
                  </div>
                </TableCell>
                <TableCell>{formatDate(project.createdAt)}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleToggleWatchlist(project)}
                  >
                    {project.watchlisted ? (
                      <EyeOff className="h-4 w-4 text-purple-600" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
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
