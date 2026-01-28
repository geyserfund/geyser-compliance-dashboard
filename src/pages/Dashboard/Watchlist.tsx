import { useState, useEffect } from "react";
import DashboardSearchInput from "@/components/Dashboard/DashboardSearchInput";
import DashboardToolbar from "@/components/Dashboard/DashboardToolbar";
import ProjectsTableSkeleton from "@/components/Dashboard/ProjectsTableSkeleton";
import {
  ProjectFieldsFragment,
  useProjectsGetQuery,
  ProjectsOrderByField,
  OrderByDirection,
} from "@/types/generated/graphql";
import { AllProjectsTable } from "@/components/Dashboard/ProjectsTable";
import { Alert, AlertDescription } from "@/components/ui/alert";

const LOCAL_STORAGE_WATCHLIST_KEY = "dashboardWatchlist";

const getWatchlist = (): string[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(LOCAL_STORAGE_WATCHLIST_KEY);
  try {
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Failed to parse watchlist from localStorage", e);
    return [];
  }
};

const WatchlistPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [watchlistIds, setWatchlistIds] = useState<string[]>([]);

  useEffect(() => {
    setWatchlistIds(getWatchlist());
  }, []);

  const { data, loading, error } = useProjectsGetQuery({
    variables: {
      input: {
        where: { ids: watchlistIds },
        orderBy: [{ field: ProjectsOrderByField.CreatedAt, direction: OrderByDirection.Desc }],
      }
    },
    skip: watchlistIds.length === 0,
    notifyOnNetworkStatusChange: true,
  });

  const fetchedProjects: ProjectFieldsFragment[] = data?.projectsGet?.projects || [];

  const currentWatchlistIds = getWatchlist();
  const projectsStillInWatchlist = fetchedProjects.filter(p => currentWatchlistIds.includes(p.id));

  const filteredProjects = searchQuery.trim() === ""
    ? projectsStillInWatchlist
    : projectsStillInWatchlist.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.name && project.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  return (
    <div className="space-y-6">
      <DashboardToolbar
        right={
          <DashboardSearchInput
            placeholder="Search watchlist..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        }
      />

      <div>
        <h2 className="text-xl font-semibold mb-4">
            Watchlisted Projects ({loading ? 'Loading...' : filteredProjects.length})
        </h2>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>
              Error loading watchlist projects: {error.message}
            </AlertDescription>
          </Alert>
        )}
        {loading && filteredProjects.length === 0 && watchlistIds.length > 0 && (
           <ProjectsTableSkeleton rows={3} />
         )}
         {(!loading || filteredProjects.length > 0) && (
             <AllProjectsTable
               projects={filteredProjects}
             />
         )}
         {!loading && watchlistIds.length === 0 && (
             <p className="text-center text-muted-foreground py-8">Your watchlist is empty.</p>
         )}
      </div>
    </div>
  );
};

export default WatchlistPage;
