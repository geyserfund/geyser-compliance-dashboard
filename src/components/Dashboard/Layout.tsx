import { Link, Outlet } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { LogOut, ShieldCheck } from "lucide-react"

const DashboardLayout = () => {
  const { logout } = useAuth()

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
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
