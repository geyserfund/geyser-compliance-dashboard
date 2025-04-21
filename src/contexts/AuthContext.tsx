
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useToast } from "@/components/ui/use-toast";

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

  // Check if user is already logged in
  useEffect(() => {
    const storedPublicKey = localStorage.getItem("nostrPublicKey");
    if (storedPublicKey) {
      setNostrPublicKey(storedPublicKey);
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

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

  // Logout function
  const logout = () => {
    localStorage.removeItem("nostrPublicKey");
    setNostrPublicKey(null);
    setIsAuthenticated(false);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

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
