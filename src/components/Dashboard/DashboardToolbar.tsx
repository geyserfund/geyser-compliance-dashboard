import * as React from "react"

import { cn } from "@/lib/utils"

import DashboardViewSwitcher from "./DashboardViewSwitcher"

interface DashboardToolbarProps {
  right?: React.ReactNode
  className?: string
}

const DashboardToolbar = ({ right, className }: DashboardToolbarProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
    >
      <DashboardViewSwitcher />
      {right ? <div className="flex items-center gap-2">{right}</div> : null}
    </div>
  )
}

export default DashboardToolbar
