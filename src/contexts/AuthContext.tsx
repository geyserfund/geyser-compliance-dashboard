import { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { gql } from "@apollo/client";
import { apolloClient } from "../apolloClient";
import { AUTH_SERVICE_ENDPOINT } from "@/utils/apiClient";
import { subscribe } from "@/utils/eventBus";

interface AuthContextType {
  isAuthenticated: boolean;
  nostrPublicKey: string | null;
  login: (publicKey: string) => void;
  logout: () => void;
  loading: boolean;
}

// Default values
const defaultContext: AuthContextType = {
  isAuthenticated: false,
  nostrPublicKey: null,
  login: () => {},
  logout: () => {},
  loading: true,
};

// Create context
export const AuthContext = createContext<AuthContextType>(defaultContext);

// Create provider
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [nostrPublicKey, setNostrPublicKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Define the ME_QUERY
  const ME_QUERY = gql`
    query Me {
      me {
        id
        username
      }
    }
  `;

  // Memoized Logout function to ensure stable reference for effect deps
  const performLogout = useCallback(async () => {
    console.log('[AuthContext] Performing logout...');
    localStorage.removeItem("nostrPublicKey");
    setNostrPublicKey(null);
    setIsAuthenticated(false);

    try {
      // Call the backend logout endpoint
      const response = await fetch(`${AUTH_SERVICE_ENDPOINT}/logout`, {
        method: 'GET',
        credentials: 'include',
        headers: { 'Accept': 'application/json' },
      });
      if (!response.ok) {
          console.warn('Backend logout request failed:', response.status, await response.text());
      }
    } catch (fetchError) {
        console.error('Error calling backend logout endpoint:', fetchError);
    }

    try {
      // Reset Apollo Client store
      await apolloClient.resetStore();
      console.log("[AuthContext] Apollo store reset successfully.");
    } catch (error) {
      console.error("[AuthContext] Error resetting Apollo store:", error);
    }

    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/login");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast, navigate /* apolloClient is stable */]);

  // Subscribe to logout events triggered by Apollo link
  useEffect(() => {
    console.log('[AuthContext] Subscribing to logout events');
    const unsubscribe = subscribe('auth:logout', () => {
      console.log('[AuthContext] Received logout event from Apollo Link');
      // Avoid triggering logout if already logging out or not authenticated
      if (isAuthenticated) {
         performLogout();
      }
    });

    // Cleanup subscription on component unmount
    return () => {
      console.log('[AuthContext] Unsubscribing from logout events');
      unsubscribe();
    };
  }, [performLogout, isAuthenticated]); // Depend on performLogout and isAuthenticated

  // Check initial auth status
  useEffect(() => {
    const checkAuthStatus = async () => {
      setLoading(true);
      try {
        // Use the configured apolloClient instance
        const { data, error } = await apolloClient.query({
          query: ME_QUERY,
          fetchPolicy: "network-only",
        });

        if (error) {
           // Handle query errors (like network errors before the link handles them, or non-auth errors)
           console.error("Error fetching initial auth status:", error);
           setIsAuthenticated(false);
           setNostrPublicKey(null);
           localStorage.removeItem("nostrPublicKey");
        } else if (data && data.me) {
          setIsAuthenticated(true);
          // Potentially set nostrPublicKey if returned by me query?
          // Or rely on localStorage for it?
          const storedKey = localStorage.getItem("nostrPublicKey");
          setNostrPublicKey(storedKey);
        } else {
          setIsAuthenticated(false);
          setNostrPublicKey(null);
          localStorage.removeItem("nostrPublicKey");
        }
      } catch (error) {
        // Catch potential non-Apollo errors during the check
        console.error("Exception during auth status check:", error);
        setIsAuthenticated(false);
        setNostrPublicKey(null);
        localStorage.removeItem("nostrPublicKey");
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

  // Login function
  const login = (publicKey: string) => {
    localStorage.setItem("nostrPublicKey", publicKey);
    setNostrPublicKey(publicKey);
    setIsAuthenticated(true);
    toast({
      title: "Login successful",
      description: "You are now signed in with your Nostr public key.",
    });
  };

  // Expose the memoized logout function
  const logout = performLogout;

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, nostrPublicKey, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Create hook for using auth context
export function useAuth() {
  return useContext(AuthContext);
}
