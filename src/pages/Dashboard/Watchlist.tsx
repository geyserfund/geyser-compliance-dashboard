
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Project, projects } from "@/lib/data";
import ProjectsTable from "@/components/Dashboard/ProjectsTable";
import { Search, Bell } from "lucide-react";

const WatchlistPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allProjects, setAllProjects] = useState<Project[]>(projects);
  const [watchlistedProjects, setWatchlistedProjects] = useState<Project[]>([]);

  // Update watchlisted projects when all projects change
  useEffect(() => {
    const filtered = allProjects.filter(project => project.watchlisted);
    setWatchlistedProjects(filtered);
  }, [allProjects]);

  // Update filtered projects when search query changes
  const filteredProjects = searchQuery.trim() === ""
    ? watchlistedProjects
    : watchlistedProjects.filter(project => 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        project.url.toLowerCase().includes(searchQuery.toLowerCase())
      );

  // Handle project updates (watchlist status, etc)
  const handleUpdateProject = (updatedProject: Project) => {
    const updatedProjects = allProjects.map(p => 
      p.id === updatedProject.id ? updatedProject : p
    );
    setAllProjects(updatedProjects);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bell className="h-6 w-6 text-purple-600" />
          <h1 className="text-3xl font-bold tracking-tight">Watchlist</h1>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search watchlist..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Watchlisted Projects ({filteredProjects.length})</h2>
        <ProjectsTable 
          projects={filteredProjects} 
          onUpdateProject={handleUpdateProject}
        />
      </div>
    </div>
  );
};

export default WatchlistPage;
