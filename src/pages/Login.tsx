import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Buffer } from 'buffer';
import { getEventHash, type UnsignedEvent } from 'nostr-tools';
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getPubkey, signEvent } from "@/utils/nostr";

const refreshAuthToken = async (authServiceEndpoint: string) => {
  try {
    const response = await fetch(`${authServiceEndpoint}/auth-token`, {
      credentials: 'include',
      redirect: 'follow',
    })

    if (response.status >= 200 && response.status < 400) {
      console.log("Auth token refreshed");
    } else {
      console.error("Login error", response.status, response.statusText);
    }
  } catch (err) {
    console.error("Login error:", err);
  }
}

const Login = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const authServiceEndpoint = `${import.meta.env.VITE_APP_API_ENDPOINT}/auth`;

  useEffect(() => {
    refreshAuthToken(authServiceEndpoint);
  }, []);

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

      const authChallengeResponse = await fetch(`${authServiceEndpoint}/nostr`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!authChallengeResponse.ok) {
         const errorData = await authChallengeResponse.json().catch(() => ({}));
         throw new Error(`Failed to fetch auth challenge: ${authChallengeResponse.status} ${authChallengeResponse.statusText} ${errorData.message || ''}`);
      }

      const { event: eventTemplate } = await authChallengeResponse.json();

      if (!eventTemplate || typeof eventTemplate !== 'object') {
           throw new Error('Invalid authentication challenge received from server.');
      }

      // 3. Prepare and sign the event
      // The UnsignedEvent type does not include 'id'. It's added after signing.
      const unsignedEvent: UnsignedEvent = {
        ...eventTemplate,
        pubkey: pubkey,
        created_at: Math.floor(Date.now() / 1000), // Ensure created_at is recent
        // No 'id' here
      };
      // We still calculate the hash here if needed elsewhere, but don't add it to the object passed to signEvent
      const _eventId = getEventHash(unsignedEvent);

      // Pass the event without the 'id' to the NIP-07 signEvent function
      const signedEvent = await signEvent(unsignedEvent);

      // The signedEvent returned by the extension *should* now include the id and sig
      // 4. Serialize and encode the signed event for the token
      const serialisedEvent = JSON.stringify(signedEvent);
      const nostrAuthToken = encodeURIComponent(Buffer.from(serialisedEvent).toString('base64')).replace(
        /[!'()*]/g,
        (c) => '%' + c.charCodeAt(0).toString(16),
      );

      const verifyResponse = await fetch(`${authServiceEndpoint}/nostr?token=${nostrAuthToken}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!verifyResponse.ok) {
          const errorData = await verifyResponse.json().catch(() => ({}));
          throw new Error(`Authentication failed: ${verifyResponse.status} ${verifyResponse.statusText}. ${errorData.message || 'Please try again.'}`);
      }

      login(pubkey);
      navigate("/dashboard");

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
