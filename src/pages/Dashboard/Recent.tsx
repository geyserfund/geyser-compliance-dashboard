import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { 
  useProjectsGetQuery, 
  ProjectFieldsFragment,
  OrderByDirection, 
  ProjectsOrderByField
} from "@/types/generated/graphql";
import ProjectsTable from "@/components/Dashboard/ProjectsTable";
import { Search } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 20;

// Rename component
const RecentProjectsPage = () => { 
  const [searchQuery, setSearchQuery] = useState("");
  const isFetchingMore = useRef(false);
  const initialLoadComplete = useRef(false);
  const [hasPotentiallyMoreData, setHasPotentiallyMoreData] = useState(true);
  const [renderedProjectCount, setRenderedProjectCount] = useState<number | null>(null);

  const { ref: loadMoreRef, inView: loadMoreInView } = useInView({
    threshold: 0,
    rootMargin: '200px',
  });

  const { data, loading, error, fetchMore } = useProjectsGetQuery({
    variables: {
      input: {
        where: {},
        orderBy: [{ field: ProjectsOrderByField.CreatedAt, direction: OrderByDirection.Desc }],
        pagination: { take: ITEMS_PER_PAGE }
      }
    },
    notifyOnNetworkStatusChange: true,
    onCompleted: (completedData) => {
      initialLoadComplete.current = true;
      const initialCount = completedData.projectsGet?.projects?.length ?? 0;
      if (initialCount < ITEMS_PER_PAGE) {
        setHasPotentiallyMoreData(false);
      }
    },
  });

  const projectsData: ProjectFieldsFragment[] = data?.projectsGet?.projects || [];

  const loadMoreProjects = async () => {
    console.log("loadMoreProjects called. Checking conditions...");
    if (loading || isFetchingMore.current || !hasPotentiallyMoreData || !fetchMore) {
      console.log("loadMoreProjects: Aborting fetch.", { loading, isFetching: isFetchingMore.current, hasPotentiallyMoreData });
      return;
    }

    const lastProjectId = projectsData[projectsData.length - 1]?.id;

    if (!lastProjectId && projectsData.length > 0) {
      console.log("loadMoreProjects: Aborting fetch. Cannot determine cursor (lastProjectId).");
      return;
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
      setHasPotentiallyMoreData(false); 
    } finally {
      console.log("Fetch more finished (finally). Resetting isFetchingMore flag.");
      isFetchingMore.current = false;
    }
  };

  useEffect(() => {
    if (initialLoadComplete.current && loadMoreInView) {
      console.log("FetchMore Effect triggered by scroll.");
      loadMoreProjects(); 
    }
  }, [loadMoreInView, initialLoadComplete.current]);

   const filteredProjects: ProjectFieldsFragment[] = projectsData.filter(project => {
    const lowercaseQuery = searchQuery.toLowerCase().trim();
    if (lowercaseQuery === "") return true;
    return (
      project.title.toLowerCase().includes(lowercaseQuery) ||
      (project.name && project.name.toLowerCase().includes(lowercaseQuery))
    );
  });

  const handleRenderedCountChange = (count: number) => {
    setRenderedProjectCount(count);
  };

  useEffect(() => {
    if (renderedProjectCount === null) {
       setRenderedProjectCount(filteredProjects.length);
    }
  }, [filteredProjects.length]);

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
        {/* Update title */}
        <h2 className="text-xl font-semibold mb-4">
          Recent Projects ({loading && renderedProjectCount === null ? 'Loading...' : renderedProjectCount ?? 0})
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
            disableReviewedFilter={true} // Add this prop
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
              disabled={loading || isFetchingMore.current}
            >
              Load older projects
            </Button>
          </div>
        )}

         {!loading && !isFetchingMore.current && !hasPotentiallyMoreData && projectsData.length > 0 && (
           <p className="text-center text-muted-foreground py-4">No more projects to load.</p>
         )}
      </div>
    </div>
  );
};

// Update export
export default RecentProjectsPage; 