import { Link, NavLink, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { LogOut, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

type SidebarItem = {
  label: string
  to: string
  isActive: (pathname: string) => boolean
}

const sidebarItems: SidebarItem[] = [
  {
    label: "Project Reviews",
    to: "/dashboard",
    isActive: (pathname) =>
      pathname === "/dashboard" || (pathname.startsWith("/dashboard/") && pathname !== "/dashboard/payments"),
  },
  {
    label: "Payments",
    to: "/dashboard/payments",
    isActive: (pathname) => pathname === "/dashboard/payments",
  },
]

const DashboardLayout = () => {
  const { logout } = useAuth()
  const { pathname } = useLocation()

  const renderSidebarLink = (item: SidebarItem) => {
    const active = item.isActive(pathname)
    return (
      <Button
        asChild
        key={item.to}
        variant={active ? "secondary" : "ghost"}
        className={cn("w-full justify-start")}
      >
        <NavLink to={item.to}>{item.label}</NavLink>
      </Button>
    )
  }

  return (
    <div className="min-h-svh bg-background">
      <header className="border-b">
        <div className="flex h-14 items-center justify-between px-6">
          <Link to="/dashboard" className="flex items-center gap-2 text-sm">
            <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <ShieldCheck className="size-4" />
            </span>
            <span className="font-semibold">Geyser Watchdog</span>
          </Link>
          <Button variant="ghost" onClick={logout} className="gap-2">
            <LogOut className="size-4" />
            Sign Out
          </Button>
        </div>
      </header>
      <div className="flex min-h-[calc(100svh-56px)]">
        <aside className="hidden w-64 border-r p-4 md:block">
          <nav className="space-y-2" aria-label="Admin sections">
            {sidebarItems.map((item) => renderSidebarLink(item))}
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <nav className="mb-6 flex gap-2 md:hidden" aria-label="Admin sections">
            {sidebarItems.map((item) => renderSidebarLink(item))}
          </nav>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
