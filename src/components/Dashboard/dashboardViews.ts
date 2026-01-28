export type DashboardView = {
  to: string
  label: string
  end?: boolean
}

export const dashboardViews: DashboardView[] = [
  {
    to: "/dashboard",
    label: "Unreviewed Projects",
    end: true,
  },
  {
    to: "/dashboard/in-review",
    label: "In Review",
  },
  {
    to: "/dashboard/accepted",
    label: "Accepted",
  },
  {
    to: "/dashboard/recent",
    label: "Recent Projects",
  },
  {
    to: "/dashboard/watchlist",
    label: "Watchlist",
  },
]
