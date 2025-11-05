import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { 
  useProjectsGetQuery, 
  ProjectFieldsFragment,
  OrderByDirection, 
  ProjectsOrderByField,
  ProjectStatus
  // No PageInfo types needed
} from "@/types/generated/graphql";
import ProjectsTable from "@/components/Dashboard/ProjectsTable";
import { Search } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

// No PageInfo or ExpectedGetResponse types needed

const ITEMS_PER_PAGE = 20;

const DashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const isFetchingMore = useRef(false);
  const initialLoadComplete = useRef(false);
  // State to track if the last fetch indicated more data might exist
  const [hasPotentiallyMoreData, setHasPotentiallyMoreData] = useState(true);
  // State to hold the count of projects visible *after* internal filtering in ProjectsTable
  const [renderedProjectCount, setRenderedProjectCount] = useState<number | null>(null);

  // No nextCursor ref needed

  const { ref: loadMoreRef, inView: loadMoreInView } = useInView({
    threshold: 0,
    rootMargin: '200px',
  });

  const { data, loading, error, fetchMore } = useProjectsGetQuery({
    variables: {
      input: {
        where: { statuses: [
          ProjectStatus.Active,
          ProjectStatus.Inactive,
          ProjectStatus.PreLaunch,
          ProjectStatus.Closed,
          ProjectStatus.InReview,
        ]},
        orderBy: [{ field: ProjectsOrderByField.CreatedAt, direction: OrderByDirection.Desc }],
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

  // Extracted function to handle fetching more data
  const loadMoreProjects = async () => {
    console.log("loadMoreProjects called. Checking conditions...");
    // Prevent fetching if already loading or no more data
    if (loading || isFetchingMore.current || !hasPotentiallyMoreData || !fetchMore) {
      console.log("loadMoreProjects: Aborting fetch.", { loading, isFetching: isFetchingMore.current, hasPotentiallyMoreData });
      return;
    }

    const lastProjectId = projectsData[projectsData.length - 1]?.id;

    // Need a cursor (last project ID) to fetch next page unless it's the very first fetch after zero render
    if (!lastProjectId && projectsData.length > 0) {
      console.log("loadMoreProjects: Aborting fetch. Cannot determine cursor (lastProjectId).");
      return; // Should not happen if projectsData is populated
    }

    console.log("loadMoreProjects: Proceeding with fetch. Cursor:", lastProjectId);
    isFetchingMore.current = true;

    try {
      await fetchMore({
        variables: {
          input: {
            where: {},
            orderBy: [{ field: ProjectsOrderByField.CreatedAt, direction: OrderByDirection.Desc }],
            pagination: {
              take: ITEMS_PER_PAGE,
              // Use last project ID as cursor if available
              ...(lastProjectId ? { cursor: { id: lastProjectId } } : {})
            }
          }
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          console.log("updateQuery called");
          if (!fetchMoreResult?.projectsGet) {
            console.log("updateQuery: No fetchMoreResult data");
            setHasPotentiallyMoreData(false); 
            return prev;
          }

          const prevProjects = prev.projectsGet?.projects || [];
          const newProjects = fetchMoreResult.projectsGet.projects || [];
          console.log(`updateQuery: Merging ${prevProjects.length} (prev) + ${newProjects.length} (new)`);
          
          if (newProjects.length < ITEMS_PER_PAGE) {
            console.log(`updateQuery: Fetched ${newProjects.length} items, setting hasPotentiallyMoreData to false.`);
            setHasPotentiallyMoreData(false);
          } else {
            setHasPotentiallyMoreData(true);
          }

          const combinedProjects = [...prevProjects, ...newProjects];
          const uniqueProjects = Array.from(
            new Map(combinedProjects.map(p => [p.id, p])).values()
          );
          if(uniqueProjects.length < combinedProjects.length) {
            console.warn("updateQuery: Duplicates detected. Ensure backend cursor logic is robust.");
          }

          return {
            projectsGet: {
              __typename: prev.projectsGet?.__typename,
              projects: uniqueProjects, 
            }
          };
        }
      });
    } catch (err) {
      console.error("Failed to fetch more projects:", err);
      setHasPotentiallyMoreData(false); // Assume no more on error
    } finally {
      console.log("Fetch more finished (finally). Resetting isFetchingMore flag.");
      isFetchingMore.current = false;
    }
  };

  // useEffect for infinite scroll trigger
  useEffect(() => {
    // Only trigger via scroll if the element is in view and initial load is done
    if (initialLoadComplete.current && loadMoreInView) {
      console.log("FetchMore Effect triggered by scroll.");
      loadMoreProjects(); // Call the extracted function
    }
  // Only depend on loadMoreInView and initialLoadComplete for scroll trigger
  // loadMoreProjects function itself doesn't need to be a dependency if defined stablely
  }, [loadMoreInView, initialLoadComplete.current]); // Simplified dependencies

  const filteredProjects: ProjectFieldsFragment[] = projectsData.filter(project => {
    const lowercaseQuery = searchQuery.toLowerCase().trim();
    if (lowercaseQuery === "") return true;
    return (
      project.title.toLowerCase().includes(lowercaseQuery) ||
      (project.name && project.name.toLowerCase().includes(lowercaseQuery))
    );
  });

  // Callback for ProjectsTable to report its visible count
  const handleRenderedCountChange = (count: number) => {
    setRenderedProjectCount(count);
  };

  // Update initial rendered count when filteredProjects changes (e.g., due to search)
  useEffect(() => {
    // Only set if not null, to avoid flicker before ProjectsTable reports back
    if (renderedProjectCount === null) {
       setRenderedProjectCount(filteredProjects.length);
    }
    // We actually want ProjectsTable to be the source of truth once it mounts
    // and filters. So maybe don't set it here initially? Let's see.
    // Let ProjectsTable report the count initially via its useEffect.
  }, [filteredProjects.length]); // Only trigger if search filter changes length

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
        <h2 className="text-xl font-semibold mb-4">
          Unreviewed Projects ({loading && renderedProjectCount === null ? 'Loading...' : renderedProjectCount ?? 0})
        </h2>
        {error && (
          <p className="text-red-500">Error loading projects: {error.message}</p>
        )}
        {loading && projectsData.length === 0 ? (
          <div className="rounded-md border p-4 space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex space-x-4">
                <Skeleton className="h-10 w-[200px]" />
                <Skeleton className="h-10 w-[100px]" />
                <Skeleton className="h-10 w-[120px]" />
                <Skeleton className="h-10 w-[200px]" />
                <Skeleton className="h-10 w-[200px]" />
                <Skeleton className="h-10 w-[120px]" />
                <Skeleton className="h-10 w-[100px]" />
                <Skeleton className="h-10 w-[50px]" />
              </div>
            ))}
          </div>
        ) : (
          <ProjectsTable 
            projects={filteredProjects}
            onRenderedCountChange={handleRenderedCountChange}
          />
        )}
        <div ref={loadMoreRef} style={{ height: '10px' }} />
        {(loading || isFetchingMore.current) && projectsData.length > 0 && (
           <p className="text-center text-muted-foreground py-4">Loading more...</p>
        )}
        {!loading && !isFetchingMore.current && hasPotentiallyMoreData && projectsData.length > 0 && (
          <div className="text-center py-4">
            <Button 
              onClick={loadMoreProjects}
              disabled={loading || isFetchingMore.current} // Redundant check but safe
            >
              Load older projects
            </Button>
          </div>
        )}
        {/* {!loading && !isFetchingMore.current && !hasPotentiallyMoreData && projectsData.length > 0 && (
           <p className="text-center text-muted-foreground py-4">No more projects to load.</p>
        )} */}
      </div>
    </div>
  );
};

export default DashboardPage;
