
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Project, projects } from "@/lib/data";
import ProjectsTable from "@/components/Dashboard/ProjectsTable";
import { Search } from "lucide-react";

const DashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [allProjects, setAllProjects] = useState<Project[]>(projects);

  // Update filtered projects when search query changes
  useEffect(() => {
    const lowercaseQuery = searchQuery.toLowerCase().trim();
    if (lowercaseQuery === "") {
      setFilteredProjects(allProjects);
    } else {
      const filtered = allProjects.filter(project => 
        project.title.toLowerCase().includes(lowercaseQuery) || 
        project.url.toLowerCase().includes(lowercaseQuery)
      );
      setFilteredProjects(filtered);
    }
  }, [searchQuery, allProjects]);

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
        <h1 className="text-3xl font-bold tracking-tight">Compliance Dashboard</h1>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">All Projects ({filteredProjects.length})</h2>
        <ProjectsTable 
          projects={filteredProjects} 
          onUpdateProject={handleUpdateProject}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
