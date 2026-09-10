export type DashboardView = {
  to: string
  label: string
  end?: boolean
}

export const dashboardViews: DashboardView[] = [
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
    label: "Recently Launched",
  },
  {
    to: "/dashboard/watchlist",
    label: "Watchlist",
  },
]
