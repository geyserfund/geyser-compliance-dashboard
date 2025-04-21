
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Project, projects } from "@/lib/data";
import ProjectsTable from "@/components/Dashboard/ProjectsTable";
import { Search } from "lucide-react";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Project[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [allProjects, setAllProjects] = useState<Project[]>(projects);

  const handleSearch = () => {
    const lowercaseQuery = searchQuery.toLowerCase().trim();
    if (lowercaseQuery === "") {
      setSearchResults([]);
    } else {
      const filtered = allProjects.filter(project => 
        project.title.toLowerCase().includes(lowercaseQuery) || 
        project.url.toLowerCase().includes(lowercaseQuery)
      );
      setSearchResults(filtered);
    }
    setHasSearched(true);
  };

  // Handle key press (Enter)
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Handle project updates (watchlist status, etc)
  const handleUpdateProject = (updatedProject: Project) => {
    const updatedProjects = allProjects.map(p => 
      p.id === updatedProject.id ? updatedProject : p
    );
    setAllProjects(updatedProjects);
    
    // Update search results if the project is in the results
    if (searchResults.some(p => p.id === updatedProject.id)) {
      setSearchResults(prevResults => 
        prevResults.map(p => p.id === updatedProject.id ? updatedProject : p)
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Advanced Search</h1>
      </div>

      <div className="flex gap-3 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by project title or URL..."
            className="pl-8 py-6"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={handleKeyPress}
          />
        </div>
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {hasSearched && (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Search Results ({searchResults.length})
          </h2>
          <ProjectsTable 
            projects={searchResults} 
            onUpdateProject={handleUpdateProject}
          />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
