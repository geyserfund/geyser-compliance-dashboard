import * as React from "react"

import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface ProjectsTableSkeletonProps {
  rows?: number
  columns?: Array<number | string>
  className?: string
}

const ProjectsTableSkeleton = ({
  rows = 5,
  columns = [200, 100, 120, 200, 200, 120, 100, 50],
  className,
}: ProjectsTableSkeletonProps) => {
  const normalizedColumns = React.useMemo(
    () =>
      columns.map((column) =>
        typeof column === "number" ? `${column}px` : column
      ),
    [columns]
  )

  return (
    <div className={cn("rounded-md border p-4 space-y-3", className)}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap gap-4">
          {normalizedColumns.map((width, columnIndex) => (
            <Skeleton
              key={`${rowIndex}-${columnIndex}`}
              className="h-10"
              style={{ width }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default ProjectsTableSkeleton
