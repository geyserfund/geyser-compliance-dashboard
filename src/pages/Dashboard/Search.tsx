import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import DashboardProjectSearch from "@/components/Dashboard/DashboardProjectSearch";
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

const ITEMS_PER_PAGE = 20;

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const isFetchingMore = useRef(false);
  const [hasPotentiallyMoreData, setHasPotentiallyMoreData] = useState(true);

  const submittedQuery = searchParams.get("search")?.trim() ?? "";

  useEffect(() => {
    isFetchingMore.current = false;
    setHasPotentiallyMoreData(true);
  }, [submittedQuery]);

  const { data, loading, error, fetchMore } = useProjectsGetQuery({
    variables: {
      input: {
        where: { search: submittedQuery },
        orderBy: [{ field: ProjectsOrderByField.CreatedAt, direction: OrderByDirection.Desc }],
        pagination: { take: ITEMS_PER_PAGE },
      }
    },
    skip: !submittedQuery,
    notifyOnNetworkStatusChange: true,
    onCompleted: (completedData) => {
      const initialCount = completedData.projectsGet?.projects?.length ?? 0;
      setHasPotentiallyMoreData(initialCount >= ITEMS_PER_PAGE);
    },
  });

  const searchResults: ProjectFieldsFragment[] = data?.projectsGet?.projects || [];

  const loadMoreResults = useCallback(async () => {
    if (loading || isFetchingMore.current || !hasPotentiallyMoreData || !fetchMore) {
      return;
    }

    const lastProjectId = searchResults[searchResults.length - 1]?.id;

    if (!lastProjectId && searchResults.length > 0) {
      return;
    }

    isFetchingMore.current = true;

    try {
      await fetchMore({
        variables: {
          input: {
            where: { search: submittedQuery },
            orderBy: [{ field: ProjectsOrderByField.CreatedAt, direction: OrderByDirection.Desc }],
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

          setHasPotentiallyMoreData(newProjects.length >= ITEMS_PER_PAGE);

          return {
            projectsGet: {
              __typename: prev.projectsGet?.__typename,
              projects: Array.from(
                new Map([...prevProjects, ...newProjects].map((project) => [project.id, project])).values()
              ),
            },
          };
        },
      });
    } catch (fetchMoreError) {
      console.error("Failed to fetch more search results:", fetchMoreError);
      setHasPotentiallyMoreData(false);
    } finally {
      isFetchingMore.current = false;
    }
  }, [fetchMore, hasPotentiallyMoreData, loading, searchResults, submittedQuery]);

  return (
    <div className="space-y-6">
      <DashboardToolbar right={<DashboardProjectSearch />} />

      {submittedQuery ? (
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
              <>
                <AllProjectsTable projects={searchResults} />
                {hasPotentiallyMoreData ? (
                  <div className="text-center py-4">
                    <Button onClick={loadMoreResults} disabled={loading || isFetchingMore.current}>
                      {isFetchingMore.current ? "Loading more..." : "Load more results"}
                    </Button>
                  </div>
                ) : null}
              </>
            ) : (
              <p className="text-center text-muted-foreground py-8">No projects found matching your search.</p>
            )
          )}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-8">
          Search for a project to view results.
        </p>
      )}
    </div>
  );
};

export default SearchPage;
