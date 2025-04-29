import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Buffer } from 'buffer';
import { getEventHash, type UnsignedEvent } from 'nostr-tools';
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getPubkey, signEvent } from "@/utils/nostr";

const Login = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const apiEndpoint = import.meta.env.VITE_APP_API_ENDPOINT;
  const authServiceEndpoint = `${apiEndpoint}/auth`;

  const handleConnect = async () => {
    setIsLoading(true);
    setError(null);

    if (!authServiceEndpoint) {
      setError("Configuration error: VITE_APP_API_ENDPOINT is not set.");
      setIsLoading(false);
      return;
    }

    try {
      const pubkey = await getPubkey();
    
      console.log("Fetching Nostr challenge with initial auth token...");
      const authChallengeResponse = await fetch(`${authServiceEndpoint}/nostr`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!authChallengeResponse.ok) {
         const errorData = await authChallengeResponse.json().catch(() => ({}));
         throw new Error(`Failed to fetch auth challenge: ${authChallengeResponse.status} ${authChallengeResponse.statusText} ${errorData.message || ''}`);
      }

      const { event: eventTemplate, authToken: nostrAuthToken } = await authChallengeResponse.json();

      if (!eventTemplate || typeof eventTemplate !== 'object') {
           throw new Error('Invalid authentication challenge received from server.');
      }
      console.log("Nostr challenge received.");
      // --- End Step 3 ---

      // --- Step 4: Sign Event ---
      const unsignedEvent: UnsignedEvent = {
        ...eventTemplate,
        pubkey: pubkey,
        created_at: Math.floor(Date.now() / 1000),
      };
      const _eventId = getEventHash(unsignedEvent);
      const signedEvent = await signEvent(unsignedEvent);
      console.log("Event signed.");
      // --- End Step 4 ---

      // --- Step 5: Verify Signed Event (using initial authToken, standard fetch) ---
      console.log("Verifying signed event with initial auth token...");
      const serialisedEvent = JSON.stringify(signedEvent);
      const nostrAuthTokenParam = encodeURIComponent(Buffer.from(serialisedEvent).toString('base64')).replace(
        /[!'()*]/g,
        (c) => '%' + c.charCodeAt(0).toString(16),
      );

      // Use standard fetch, but ensure credentials are included if backend sets cookies
      const verifyResponse = await fetch(`${authServiceEndpoint}/nostr?token=${nostrAuthTokenParam}`, {
        method: 'POST', 
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Auth-Token': `${nostrAuthToken}`
        },
      });

      if (!verifyResponse.ok) {
          const errorData = await verifyResponse.json().catch(() => ({}));
          throw new Error(`Authentication failed: ${verifyResponse.status} ${verifyResponse.statusText}. ${errorData.message || 'Please try again.'}`);
      }
      console.log("Verification successful.");

      login(pubkey); // Update application auth state (e.g., set isAuthenticated)
      navigate("/dashboard"); // Navigate to protected area

    } catch (err: unknown) {
      console.error("Login error:", err);
      let errorMessage = "An unexpected error occurred during login.";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="absolute top-8 left-0 w-full text-center">
        <h1 className="text-2xl font-bold text-primary">Nostr Compliance Dashboard</h1>
      </div>
      
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>
            Connect your Nostr extension (NIP-07) to access the dashboard.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>Login Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Click the button below to sign in using your installed Nostr browser extension (e.g., Alby, nos2x).
            </p>
          </div>
        </CardContent>
        
        <CardFooter>
          <Button 
            onClick={handleConnect}
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? "Connecting..." : "Connect with Nostr Extension"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
