import * as React from "react"

import { cn } from "@/lib/utils"

interface DashboardPageHeaderProps {
  title: string
  description?: string
  icon?: React.ReactNode
  right?: React.ReactNode
  className?: string
}

const DashboardPageHeader = ({
  title,
  description,
  icon,
  right,
  className,
}: DashboardPageHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
    >
      <div className="flex items-center gap-2">
        {icon}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {description ? (
            <p className="text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
      </div>
      {right ? <div className="flex items-center gap-2">{right}</div> : null}
    </div>
  )
}

export default DashboardPageHeader
