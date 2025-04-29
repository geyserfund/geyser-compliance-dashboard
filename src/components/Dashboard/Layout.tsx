
import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  Search, 
  List, 
  Bell 
} from "lucide-react";

const DashboardLayout = () => {
  const { logout } = useAuth();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside 
        className={`bg-sidebar text-sidebar-foreground transition-all duration-300 ${
          isSidebarCollapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="p-4 flex items-center justify-between">
          {!isSidebarCollapsed && (
            <span className="font-bold text-lg">Geyser Watchdog</span>
          )}
          <Button 
            variant="ghost" 
            size="sm"
            className="text-sidebar-foreground hover:bg-sidebar-accent"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            {isSidebarCollapsed ? "→" : "←"}
          </Button>
        </div>
        
        <nav className="mt-6">
          <NavLink 
            to="/dashboard"
            end
            className={({ isActive }) => 
              `flex items-center px-4 py-3 transition-colors ${
                isActive 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                  : "hover:bg-sidebar-accent/50"
              }`
            }
          >
            <Table size={20} />
            {!isSidebarCollapsed && <span className="ml-3">All Projects</span>}
          </NavLink>
          
          <NavLink 
            to="/dashboard/watchlist"
            className={({ isActive }) => 
              `flex items-center px-4 py-3 transition-colors ${
                isActive 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                  : "hover:bg-sidebar-accent/50"
              }`
            }
          >
            <Bell size={20} />
            {!isSidebarCollapsed && <span className="ml-3">Watchlist</span>}
          </NavLink>
          
          <NavLink 
            to="/dashboard/search"
            className={({ isActive }) => 
              `flex items-center px-4 py-3 transition-colors ${
                isActive 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                  : "hover:bg-sidebar-accent/50"
              }`
            }
          >
            <Search size={20} />
            {!isSidebarCollapsed && <span className="ml-3">Search</span>}
          </NavLink>
        </nav>

        <div className="absolute bottom-4 left-0 right-0 px-4">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
            onClick={logout}
          >
            {isSidebarCollapsed ? "Out" : "Sign Out"}
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
