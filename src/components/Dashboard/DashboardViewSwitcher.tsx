import { NavLink, useMatch } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { dashboardViews, type DashboardView } from "./dashboardViews"

const DashboardViewButton = ({ to, label, end }: DashboardView) => {
  const match = useMatch({ path: to, end: end ?? false })

  return (
    <Button
      asChild
      size="sm"
      variant={match ? "default" : "outline"}
      className="h-9"
    >
      <NavLink to={to} end={end}>
        {label}
      </NavLink>
    </Button>
  )
}

const DashboardViewSwitcher = ({ className }: { className?: string }) => {
  return (
    <div
      aria-label="Project views"
      className={cn("flex flex-wrap gap-2", className)}
    >
      {dashboardViews.map((view) => (
        <DashboardViewButton key={view.to} {...view} />
      ))}
    </div>
  )
}

export default DashboardViewSwitcher
