import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { Button } from "@/components/ui/button";

import DashboardSearchInput from "./DashboardSearchInput";

const DASHBOARD_SEARCH_PATH = "/dashboard/search";
const DASHBOARD_SEARCH_PARAM = "search";

interface DashboardProjectSearchProps {
  placeholder?: string;
}

const DashboardProjectSearch = ({
  placeholder = "Search any project...",
}: DashboardProjectSearchProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  const currentSearchValue =
    location.pathname === DASHBOARD_SEARCH_PATH
      ? (searchParams.get(DASHBOARD_SEARCH_PARAM) ?? "")
      : "";

  useEffect(() => {
    if (location.pathname === DASHBOARD_SEARCH_PATH) {
      setSearchQuery(currentSearchValue);
    }
  }, [currentSearchValue, location.pathname]);

  const submitSearch = () => {
    const trimmedQuery = searchQuery.trim();

    if (!trimmedQuery) {
      navigate(DASHBOARD_SEARCH_PATH);
      return;
    }

    const nextParams = new URLSearchParams({
      [DASHBOARD_SEARCH_PARAM]: trimmedQuery,
    });

    navigate(`${DASHBOARD_SEARCH_PATH}?${nextParams.toString()}`);
  };

  return (
    <>
      <DashboardSearchInput
        containerClassName="w-full max-w-sm"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            submitSearch();
          }
        }}
      />
      <Button onClick={submitSearch} disabled={!searchQuery.trim()}>
        Search
      </Button>
    </>
  );
};

export default DashboardProjectSearch;
