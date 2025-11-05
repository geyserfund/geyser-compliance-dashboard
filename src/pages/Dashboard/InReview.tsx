import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { 
  useProjectsGetQuery, 
  ProjectFieldsFragment,
  OrderByDirection, 
  ProjectsOrderByField,
  ProjectStatus
} from "@/types/generated/graphql";
import ProjectsTable from "@/components/Dashboard/ProjectsTable";
import { Search } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import { Skeleton } from "@/components/ui/skeleton";

const ITEMS_PER_PAGE = 20;

const InReviewPage = () => {
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
        where: { statuses: [ProjectStatus.InReview] }, // Only fetch projects in review
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
            where: { statuses: [ProjectStatus.InReview] },
            orderBy: [{ field: ProjectsOrderByField.CreatedAt, direction: OrderByDirection.Desc }],
            pagination: {
              take: ITEMS_PER_PAGE,
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
      isFetchingMore.current = false;
    }
  };

  useEffect(() => {
    if (initialLoadComplete.current && loadMoreInView) {
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
        <h1 className="text-3xl font-bold tracking-tight">In Review Projects</h1>
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
          Projects In Review ({loading && renderedProjectCount === null ? 'Loading...' : renderedProjectCount ?? 0})
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
                <Skeleton className="h-10 w-[120px]" />
                <Skeleton className="h-10 w-[80px]" />
              </div>
            ))}
          </div>
        ) : (
          <ProjectsTable 
            projects={filteredProjects}
            onRenderedCountChange={handleRenderedCountChange}
            disableReviewedFilter={true} // Show all in-review projects, don't filter by reviewed status
            showReviewStatus={true} // Show latest review status instead of project status
          />
        )}
        
        {/* Load more trigger */}
        {hasPotentiallyMoreData && projectsData.length > 0 && (
          <div ref={loadMoreRef} className="h-10 flex items-center justify-center">
            {isFetchingMore.current && (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                <span className="text-sm text-muted-foreground">Loading more projects...</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InReviewPage; 