import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import DashboardSearchInput from "@/components/Dashboard/DashboardSearchInput";
import DashboardToolbar from "@/components/Dashboard/DashboardToolbar";
import ProjectsTableSkeleton from "@/components/Dashboard/ProjectsTableSkeleton";
import {
  useProjectsGetQuery,
  ProjectFieldsFragment,
  OrderByDirection,
  ProjectsOrderByField,
  ProjectStatus,
} from "@/types/generated/graphql";
import { AllProjectsTable } from "@/components/Dashboard/ProjectsTable";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ITEMS_PER_PAGE = 20;

const AcceptedProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const isFetchingMore = useRef(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [hasPotentiallyMoreData, setHasPotentiallyMoreData] = useState(true);
  const [renderedProjectCount, setRenderedProjectCount] =
    useState<number | null>(null);

  const { ref: loadMoreRef, inView: loadMoreInView } = useInView({
    threshold: 0,
    rootMargin: "200px",
  });

  const { data, loading, error, fetchMore } = useProjectsGetQuery({
    variables: {
      input: {
        where: { statuses: [ProjectStatus.Accepted] },
        orderBy: [
          { field: ProjectsOrderByField.CreatedAt, direction: OrderByDirection.Desc },
        ],
        pagination: { take: ITEMS_PER_PAGE },
      },
    },
    notifyOnNetworkStatusChange: true,
    onCompleted: (completedData) => {
      setInitialLoadComplete(true);
      const initialCount = completedData.projectsGet?.projects?.length ?? 0;
      if (initialCount < ITEMS_PER_PAGE) {
        setHasPotentiallyMoreData(false);
      }
    },
  });

  const projectsData: ProjectFieldsFragment[] = data?.projectsGet?.projects || [];

  const loadMoreProjects = useCallback(async () => {
    if (loading || isFetchingMore.current || !hasPotentiallyMoreData || !fetchMore) {
      return;
    }

    const lastProjectId = projectsData[projectsData.length - 1]?.id;

    if (!lastProjectId && projectsData.length > 0) {
      return;
    }

    isFetchingMore.current = true;

    try {
      await fetchMore({
        variables: {
          input: {
            where: { statuses: [ProjectStatus.Accepted] },
            orderBy: [
              { field: ProjectsOrderByField.CreatedAt, direction: OrderByDirection.Desc },
            ],
            pagination: {
              take: ITEMS_PER_PAGE,
              ...(lastProjectId ? { cursor: { id: lastProjectId } } : {}),
            },
          },
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
            new Map(combinedProjects.map((p) => [p.id, p])).values()
          );

          return {
            projectsGet: {
              __typename: prev.projectsGet?.__typename,
              projects: uniqueProjects,
            },
          };
        },
      });
    } catch (err) {
      console.error("Failed to fetch more projects:", err);
      setHasPotentiallyMoreData(false);
    } finally {
      isFetchingMore.current = false;
    }
  }, [fetchMore, hasPotentiallyMoreData, loading, projectsData]);

  useEffect(() => {
    if (initialLoadComplete && loadMoreInView) {
      void loadMoreProjects();
    }
  }, [initialLoadComplete, loadMoreInView, loadMoreProjects]);

  const filteredProjects: ProjectFieldsFragment[] = useMemo(() => {
    const lowercaseQuery = searchQuery.toLowerCase().trim();
    if (lowercaseQuery === "") return projectsData;
    return projectsData.filter(
      (project) =>
        project.title.toLowerCase().includes(lowercaseQuery) ||
        (project.name && project.name.toLowerCase().includes(lowercaseQuery))
    );
  }, [projectsData, searchQuery]);

  const handleRenderedCountChange = useCallback((count: number) => {
    setRenderedProjectCount(count);
  }, []);

  useEffect(() => {
    if (renderedProjectCount === null) {
      setRenderedProjectCount(filteredProjects.length);
    }
  }, [filteredProjects.length, renderedProjectCount]);

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
          Accepted Projects ({loading && renderedProjectCount === null ? "Loading..." : renderedProjectCount ?? 0})
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
          <AllProjectsTable
            projects={filteredProjects}
            onRenderedCountChange={handleRenderedCountChange}
          />
        )}

        <div ref={loadMoreRef} style={{ height: "10px" }} />

        {(loading || isFetchingMore.current) && projectsData.length > 0 && (
          <p className="text-center text-muted-foreground py-4">
            Loading more...
          </p>
        )}

        {!loading && !isFetchingMore.current && hasPotentiallyMoreData && projectsData.length > 0 && (
          <div className="text-center py-4">
            <Button onClick={loadMoreProjects} disabled={loading || isFetchingMore.current}>
              Load older projects
            </Button>
          </div>
        )}

        {!loading && !isFetchingMore.current && !hasPotentiallyMoreData && projectsData.length > 0 && (
          <p className="text-center text-muted-foreground py-4">
            No more projects to load.
          </p>
        )}
      </div>
    </div>
  );
};

export default AcceptedProjectsPage;
