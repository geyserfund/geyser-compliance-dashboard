import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  ProjectFieldsFragment,
  useProjectsGetQuery,
  ProjectsOrderByField,
  OrderByDirection,
} from "@/types/generated/graphql";
import ProjectsTable from "@/components/Dashboard/ProjectsTable";
import { Search, Bell } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

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
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bell className="h-6 w-6 text-yellow-500" />
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
        <h2 className="text-xl font-semibold mb-4">
            Watchlisted Projects ({loading ? 'Loading...' : filteredProjects.length})
        </h2>
        {error && (
          <p className="text-red-500 mb-4">Error loading watchlist projects: {error.message}</p>
        )}
        {loading && filteredProjects.length === 0 && watchlistIds.length > 0 && (
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
         {(!loading || filteredProjects.length > 0) && (
             <ProjectsTable
               projects={filteredProjects}
               disableReviewedFilter={true}
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
