import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  useProjectsGetQuery,
  ProjectFieldsFragment,
  ProjectsOrderByField,
  OrderByDirection
} from "@/types/generated/graphql";
import ProjectsTable from "@/components/Dashboard/ProjectsTable";
import { Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState<string | null>(null);

  const { data, loading, error } = useProjectsGetQuery({
    variables: {
      input: {
        where: { search: submittedQuery || "" },
        orderBy: [{ field: ProjectsOrderByField.CreatedAt, direction: OrderByDirection.Desc }],
      }
    },
    skip: submittedQuery === null,
    notifyOnNetworkStatusChange: true,
  });

  const searchResults: ProjectFieldsFragment[] = data?.projectsGet?.projects || [];

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      setSubmittedQuery(trimmedQuery);
    } else {
      setSubmittedQuery(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
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
            placeholder="Search by project title, name, or description..."
            className="pl-8 py-6"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={handleKeyPress}
          />
        </div>
        <Button onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>

      {submittedQuery !== null && (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Search Results ({loading ? 'Loading...' : searchResults.length}) for "{submittedQuery}"
          </h2>
          {error && (
            <p className="text-red-500 mb-4">Error loading search results: {error.message}</p>
          )}
          {loading && (
            <div className="rounded-md border p-4 space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex space-x-4 animate-pulse">
                  <Skeleton className="h-10 w-[250px]" />
                  <Skeleton className="h-10 w-[120px]" />
                  <Skeleton className="h-10 w-[200px]" />
                  <Skeleton className="h-10 w-[150px]" />
                  <Skeleton className="h-10 w-[150px]" />
                  <Skeleton className="h-10 w-[50px]" />
                  <Skeleton className="h-10 w-[80px]" />
                </div>
              ))}
            </div>
          )}
          {!loading && (
            searchResults.length > 0 ? (
              <ProjectsTable
                projects={searchResults}
              />
            ) : (
              <p className="text-center text-muted-foreground py-8">No projects found matching your search.</p>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
