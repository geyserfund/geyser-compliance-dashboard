import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider 
} from "@apollo/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

// Pages
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./components/Dashboard/Layout";
import DashboardIndex from "./pages/Dashboard/Index";
import Watchlist from "./pages/Dashboard/Watchlist";
import Search from "./pages/Dashboard/Search";

const queryClient = new QueryClient();

// Configure Apollo Client
const graphqlUri = import.meta.env.VITE_GRAPHQL_URI || 'https://api.dev.geyser.fund/graphql';

const apolloClient = new ApolloClient({
  uri: graphqlUri,
  cache: new InMemoryCache(),
  // TODO: Add authentication headers if needed
  // headers: {
  //   Authorization: `Bearer ${token}`
  // }
});

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // const { isAuthenticated, loading } = useAuth();
  
  // if (loading) {
  //   return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  // }
  
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  // const { isAuthenticated } 
  // = useAuth();
  const isAuthenticated = true;
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
        <Route path="watchlist" element={<Watchlist />} />
        <Route path="search" element={<Search />} />
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
        <AuthProvider>
          <BrowserRouter>
            <AppRoutes />
            <Toaster />
            <Sonner />
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ApolloProvider>
);

export default App;
