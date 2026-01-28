import { useState } from "react";
import DashboardSearchInput from "@/components/Dashboard/DashboardSearchInput";
import DashboardToolbar from "@/components/Dashboard/DashboardToolbar";
import ProjectsTableSkeleton from "@/components/Dashboard/ProjectsTableSkeleton";
import { Button } from "@/components/ui/button";
import {
  useProjectsGetQuery,
  ProjectFieldsFragment,
  ProjectsOrderByField,
  OrderByDirection
} from "@/types/generated/graphql";
import { AllProjectsTable } from "@/components/Dashboard/ProjectsTable";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
      <DashboardToolbar
        right={
          <>
            <DashboardSearchInput
              containerClassName="w-full max-w-sm"
              placeholder="Search by project title, name, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={handleKeyPress}
            />
            <Button onClick={handleSearch} disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </Button>
          </>
        }
      />

      {submittedQuery !== null && (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Search Results ({loading ? 'Loading...' : searchResults.length}) for "{submittedQuery}"
          </h2>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>
                Error loading search results: {error.message}
              </AlertDescription>
            </Alert>
          )}
          {loading && (
            <ProjectsTableSkeleton rows={3} />
          )}
          {!loading && (
            searchResults.length > 0 ? (
              <AllProjectsTable
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
