import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

// Import the configured Apollo Client
import { apolloClient } from "./apolloClient"; // Make sure path is correct

// Pages
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./components/Dashboard/Layout";
import DashboardIndex from "./pages/Dashboard/Index";
import Watchlist from "./pages/Dashboard/Watchlist";
import Search from "./pages/Dashboard/Search";
import RecentProjectsPage from "./pages/Dashboard/Recent";
import InReviewPage from "./pages/Dashboard/InReview";
import AcceptedProjectsPage from "./pages/Dashboard/Accepted";
import { ProjectDetail } from "./pages/Dashboard/ProjectDetail";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={
        isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
      } />
      
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      }>
        <Route index element={<DashboardIndex />} />
        <Route path="in-review" element={<InReviewPage />} />
        <Route path="accepted" element={<AcceptedProjectsPage />} />
        <Route path="recent" element={<RecentProjectsPage />} />
        <Route path="watchlist" element={<Watchlist />} />
        <Route path="search" element={<Search />} />
        <Route path="project/:id" element={<ProjectDetail />} />
      </Route>
      
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <ApolloProvider client={apolloClient}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AuthProvider>
            <AppRoutes />
            <Toaster />
            <Sonner />
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ApolloProvider>
);

export default App;
