import * as React from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface DashboardSearchInputProps
  extends React.ComponentPropsWithoutRef<typeof Input> {
  containerClassName?: string
  iconClassName?: string
}

const DashboardSearchInput = ({
  containerClassName,
  iconClassName,
  className,
  type,
  ...props
}: DashboardSearchInputProps) => {
  return (
    <div className={cn("relative w-full max-w-xs", containerClassName)}>
      <Search
        className={cn(
          "absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
          iconClassName
        )}
      />
      <Input
        type={type ?? "search"}
        className={cn("pl-8", className)}
        {...props}
      />
    </div>
  )
}

export default DashboardSearchInput
