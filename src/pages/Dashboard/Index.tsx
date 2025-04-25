import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { 
  useProjectsGetQuery, 
  ProjectFieldsFragment,
  OrderByDirection, 
  ProjectsOrderByField
  // No PageInfo types needed
} from "@/types/generated/graphql";
import ProjectsTable from "@/components/Dashboard/ProjectsTable";
import { Search } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import { Skeleton } from "@/components/ui/skeleton";

// No PageInfo or ExpectedGetResponse types needed

const ITEMS_PER_PAGE = 20;

const DashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const isFetchingMore = useRef(false);
  const initialLoadComplete = useRef(false);
  // State to track if the last fetch indicated more data might exist
  const [hasPotentiallyMoreData, setHasPotentiallyMoreData] = useState(true);

  // No nextCursor ref needed

  const { ref: loadMoreRef, inView: loadMoreInView } = useInView({
    threshold: 0,
    rootMargin: '200px',
  });

  const { data, loading, error, fetchMore } = useProjectsGetQuery({
    variables: {
      input: {
        where: {},
        orderBy: [{ field: ProjectsOrderByField.LaunchedAt, direction: OrderByDirection.Desc }],
        pagination: { take: ITEMS_PER_PAGE }
      }
    },
    notifyOnNetworkStatusChange: true,
    onCompleted: (completedData) => {
      initialLoadComplete.current = true;
      // Check if the initial fetch returned less than a full page
      const initialCount = completedData.projectsGet?.projects?.length ?? 0;
      if (initialCount < ITEMS_PER_PAGE) {
        setHasPotentiallyMoreData(false);
      }
    },
  });

  const projectsData: ProjectFieldsFragment[] = data?.projectsGet?.projects || [];
  console.log("Component Render: projectsData.length =", projectsData.length);
  // hasMoreData is now derived from state based on last fetch count
  console.log("Component Render: hasPotentiallyMoreData state:", hasPotentiallyMoreData);

  useEffect(() => {
    console.log("FetchMore Effect Check:", {
      loadMoreInView,
      loading,
      isFetching: isFetchingMore.current,
      hasPotentiallyMoreData, // Use state variable
      initialLoadComplete: initialLoadComplete.current,
      canFetch: fetchMore !== undefined
    });

    const canFetchMore = 
      initialLoadComplete.current &&
      loadMoreInView && 
      !loading && 
      !isFetchingMore.current && 
      hasPotentiallyMoreData && // Use state variable 
      fetchMore;

    if (canFetchMore) {
      const lastProjectId = projectsData[projectsData.length - 1]?.id;
      // We need a last project ID to use as a cursor
      if (lastProjectId) {
        console.log("Attempting to fetch more, using last project ID as cursor:", lastProjectId);
        isFetchingMore.current = true;

        fetchMore({
          variables: {
            input: {
              where: {},
              orderBy: [{ field: ProjectsOrderByField.LaunchedAt, direction: OrderByDirection.Desc }],
              pagination: {
                take: ITEMS_PER_PAGE,
                // Use last project ID as cursor
                cursor: { id: lastProjectId } 
              }
            }
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            console.log("updateQuery called");
            if (!fetchMoreResult?.projectsGet) {
              console.log("updateQuery: No fetchMoreResult data");
              isFetchingMore.current = false; 
              // If fetch fails, assume no more data for safety?
              setHasPotentiallyMoreData(false); 
              return prev;
            }

            const prevProjects = prev.projectsGet?.projects || [];
            const newProjects = fetchMoreResult.projectsGet.projects || [];
            console.log(`updateQuery: Merging ${prevProjects.length} (prev) + ${newProjects.length} (new)`);
            
            // Update hasPotentiallyMoreData based on the count of *newly fetched* items
            if (newProjects.length < ITEMS_PER_PAGE) {
              console.log(`updateQuery: Fetched ${newProjects.length} items (less than ${ITEMS_PER_PAGE}), setting hasPotentiallyMoreData to false.`);
              setHasPotentiallyMoreData(false);
            } else {
              // If we fetched a full page, assume there *might* be more
              setHasPotentiallyMoreData(true);
            }

            // Deduplication logic (still necessary without proper API cursor)
            const combinedProjects = [...prevProjects, ...newProjects];
            console.log(`updateQuery: Combined length = ${combinedProjects.length}`);
            const uniqueProjects = Array.from(
              new Map(combinedProjects.map(p => [p.id, p])).values()
            );
            console.log(`updateQuery: Deduplicated length = ${uniqueProjects.length}`);
            if(uniqueProjects.length < combinedProjects.length) {
              console.warn("updateQuery: Duplicates detected after merge. This is expected if API cursor logic isn't strict.");
            }

            return {
              projectsGet: {
                __typename: prev.projectsGet?.__typename,
                projects: uniqueProjects, 
                // No pageInfo to merge
              }
            };
          }
        })
        .catch(err => {
          console.error("Failed to fetch more projects:", err);
          isFetchingMore.current = false; 
          setHasPotentiallyMoreData(false); // Assume no more on error
        })
        .finally(() => {
          console.log("Fetch more finished (finally). Resetting isFetchingMore flag.");
          isFetchingMore.current = false;
        });
      } else {
         console.log("FetchMore Effect: Cannot fetch more, lastProjectId is missing.");
      }
    }
  }, [loadMoreInView, loading, hasPotentiallyMoreData, fetchMore, projectsData]); // Depend on projectsData to get lastProjectId

  const filteredProjects: ProjectFieldsFragment[] = projectsData.filter(project => {
    const lowercaseQuery = searchQuery.toLowerCase().trim();
    if (lowercaseQuery === "") return true;
    return (
      project.title.toLowerCase().includes(lowercaseQuery) ||
      (project.name && project.name.toLowerCase().includes(lowercaseQuery))
    );
  });

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
        <h2 className="text-xl font-semibold mb-4">All Projects ({loading ? 'Loading...' : filteredProjects.length})</h2>
        {error && (
          <p className="text-red-500">Error loading projects: {error.message}</p>
        )}
        <ProjectsTable 
          projects={filteredProjects}
        />
        {loading && projectsData.length === 0 && (
          <div className="rounded-md border p-4 space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex space-x-4">
                <Skeleton className="h-10 w-[200px]" />
                <Skeleton className="h-10 w-[100px]" />
                <Skeleton className="h-10 w-[200px]" />
                <Skeleton className="h-10 w-[200px]" />
                <Skeleton className="h-10 w-[120px]" />
                <Skeleton className="h-10 w-[100px]" />
                <Skeleton className="h-10 w-[50px]" />
              </div>
            ))}
          </div>
        )}
        <div ref={loadMoreRef} style={{ height: '10px' }} />
        {loading && projectsData.length > 0 && (
           <p className="text-center text-muted-foreground py-4">Loading more...</p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
