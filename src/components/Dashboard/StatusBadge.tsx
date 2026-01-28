import { Badge, type BadgeProps } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  ProjectReviewStatus,
  ProjectStatus,
} from "@/types/generated/graphql"

type StatusConfig = {
  label: string
  variant?: BadgeProps["variant"]
  className?: string
  accentBorder?: string
  accentText?: string
}

const projectStatusConfig: Record<ProjectStatus, StatusConfig> = {
  [ProjectStatus.Active]: { label: "Active", variant: "success" },
  [ProjectStatus.InReview]: { label: "In Review", variant: "warning" },
  [ProjectStatus.Closed]: { label: "Closed", variant: "destructive" },
  [ProjectStatus.Draft]: { label: "Draft", variant: "secondary" },
  [ProjectStatus.Deleted]: { label: "Deleted", variant: "destructive" },
  [ProjectStatus.Inactive]: { label: "Inactive", variant: "outline" },
  [ProjectStatus.PreLaunch]: { label: "Pre-launch", variant: "info" },
  [ProjectStatus.Accepted]: { label: "Accepted", variant: "success" },
}

const reviewStatusConfig: Record<ProjectReviewStatus, StatusConfig> = {
  [ProjectReviewStatus.Accepted]: {
    label: "Accepted",
    variant: "success",
    accentBorder: "border-l-emerald-500",
    accentText: "text-emerald-700 dark:text-emerald-300",
  },
  [ProjectReviewStatus.Rejected]: {
    label: "Rejected",
    variant: "destructive",
    accentBorder: "border-l-red-500",
    accentText: "text-red-700 dark:text-red-300",
  },
  [ProjectReviewStatus.RevisionsRequested]: {
    label: "Revisions Requested",
    variant: "warning",
    accentBorder: "border-l-amber-500",
    accentText: "text-amber-700 dark:text-amber-300",
  },
  [ProjectReviewStatus.Pending]: {
    label: "Pending",
    variant: "secondary",
    accentBorder: "border-l-muted-foreground/50",
    accentText: "text-muted-foreground",
  },
}

const projectFallback: StatusConfig = { label: "Unknown", variant: "outline" }
const reviewFallback: StatusConfig = {
  label: "No Review",
  variant: "outline",
  accentBorder: "border-l-muted-foreground/40",
  accentText: "text-muted-foreground",
}

export const getProjectStatusConfig = (
  status?: ProjectStatus | null
): StatusConfig => {
  if (!status) return projectFallback
  return projectStatusConfig[status] ?? projectFallback
}

export const getReviewStatusConfig = (
  status?: ProjectReviewStatus | null
): StatusConfig => {
  if (!status) return reviewFallback
  return reviewStatusConfig[status] ?? reviewFallback
}

interface StatusBadgeProps {
  status?: ProjectStatus | null
  className?: string
}

interface ReviewStatusBadgeProps {
  status?: ProjectReviewStatus | null
  className?: string
}

export const ProjectStatusBadge = ({
  status,
  className,
}: StatusBadgeProps) => {
  const config = getProjectStatusConfig(status)

  return (
    <Badge variant={config.variant} className={cn(config.className, className)}>
      {config.label}
    </Badge>
  )
}

export const ReviewStatusBadge = ({
  status,
  className,
}: ReviewStatusBadgeProps) => {
  const config = getReviewStatusConfig(status)

  return (
    <Badge variant={config.variant} className={cn(config.className, className)}>
      {config.label}
    </Badge>
  )
}
