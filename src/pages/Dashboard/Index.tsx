import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import DashboardSearchInput from "@/components/Dashboard/DashboardSearchInput";
import DashboardToolbar from "@/components/Dashboard/DashboardToolbar";
import ProjectsTableSkeleton from "@/components/Dashboard/ProjectsTableSkeleton";
import { 
  useProjectsGetQuery, 
  ProjectFieldsFragment,
  OrderByDirection, 
  ProjectsOrderByField,
  ProjectStatus
  // No PageInfo types needed
} from "@/types/generated/graphql";
import ProjectsTable from "@/components/Dashboard/ProjectsTable";
import { useInView } from 'react-intersection-observer';
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

// No PageInfo or ExpectedGetResponse types needed

const ITEMS_PER_PAGE = 20;

const DashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const isFetchingMore = useRef(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
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
      setInitialLoadComplete(true);
      // Check if the initial fetch returned less than a full page
      const initialCount = completedData.projectsGet?.projects?.length ?? 0;
      if (initialCount < ITEMS_PER_PAGE) {
        setHasPotentiallyMoreData(false);
      }
    },
  });

  const projectsData: ProjectFieldsFragment[] = data?.projectsGet?.projects || [];

  // Extracted function to handle fetching more data
  const loadMoreProjects = useCallback(async () => {
    // Prevent fetching if already loading or no more data
    if (loading || isFetchingMore.current || !hasPotentiallyMoreData || !fetchMore) {
      return;
    }

    const lastProjectId = projectsData[projectsData.length - 1]?.id;

    // Need a cursor (last project ID) to fetch next page unless it's the very first fetch after zero render
    if (!lastProjectId && projectsData.length > 0) {
      return; // Should not happen if projectsData is populated
    }

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
          if (!fetchMoreResult?.projectsGet) {
            setHasPotentiallyMoreData(false); 
            return prev;
          }

          const prevProjects = prev.projectsGet?.projects || [];
          const newProjects = fetchMoreResult.projectsGet.projects || [];
          
          if (newProjects.length < ITEMS_PER_PAGE) {
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
      isFetchingMore.current = false;
    }
  }, [fetchMore, hasPotentiallyMoreData, loading, projectsData]);

  // useEffect for infinite scroll trigger
  useEffect(() => {
    // Only trigger via scroll if the element is in view and initial load is done
    if (initialLoadComplete && loadMoreInView) {
      void loadMoreProjects(); // Call the extracted function
    }
  }, [initialLoadComplete, loadMoreInView, loadMoreProjects]); // Simplified dependencies

  const filteredProjects: ProjectFieldsFragment[] = useMemo(() => {
    const lowercaseQuery = searchQuery.toLowerCase().trim();
    if (lowercaseQuery === "") return projectsData;
    return projectsData.filter(project =>
      project.title.toLowerCase().includes(lowercaseQuery) ||
      (project.name && project.name.toLowerCase().includes(lowercaseQuery))
    );
  }, [projectsData, searchQuery]);

  // Callback for ProjectsTable to report its visible count
  const handleRenderedCountChange = useCallback((count: number) => {
    setRenderedProjectCount(count);
  }, []);

  // Update initial rendered count when filteredProjects changes (e.g., due to search)
  useEffect(() => {
    // Only set if not null, to avoid flicker before ProjectsTable reports back
    if (renderedProjectCount === null) {
       setRenderedProjectCount(filteredProjects.length);
    }
    // We actually want ProjectsTable to be the source of truth once it mounts
    // and filters. So maybe don't set it here initially? Let's see.
    // Let ProjectsTable report the count initially via its useEffect.
  }, [filteredProjects.length, renderedProjectCount]); // Only trigger if search filter changes length

  return (
    <div className="space-y-6">
      <DashboardToolbar
        right={
          <DashboardSearchInput
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        }
      />

      <div>
        <h2 className="text-xl font-semibold mb-4">
          Unreviewed Projects ({loading && renderedProjectCount === null ? 'Loading...' : renderedProjectCount ?? 0})
        </h2>
        {error && (
          <Alert variant="destructive">
            <AlertDescription>
              Error loading projects: {error.message}
            </AlertDescription>
          </Alert>
        )}
        {loading && projectsData.length === 0 ? (
          <ProjectsTableSkeleton />
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
