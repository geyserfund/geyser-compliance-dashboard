// Store keys
const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken'; // Keep if refresh token needs manual handling, e.g., storing it from login response

// API Endpoint base
const API_BASE_URL = import.meta.env.VITE_APP_API_ENDPOINT;
if (!API_BASE_URL) {
  console.error("Configuration error: VITE_APP_API_ENDPOINT is not set.");
  // Potentially throw an error or provide a default?
}
export const AUTH_SERVICE_ENDPOINT = `${API_BASE_URL}/auth`;

// --- Refresh Logic for fetchWithAuth ---

let isRefreshingToken = false;
// Queue for requests that failed with 401 while a refresh was in progress
let failedRequestQueue: {
    resolve: (value: Response | PromiseLike<Response>) => void;
    reject: (reason?: unknown) => void;
    url: string | URL | Request;
    config: RequestInit;
}[] = [];

const processFailedQueue = (error: Error | null, token: string | null = null): void => {
  failedRequestQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else if (token) {
      // Re-add the new token header before retrying
      const newHeaders = new Headers(prom.config.headers);
      newHeaders.set('Authorization', `Bearer ${token}`);
      prom.config.headers = newHeaders;
      // Retry the original fetch call
      fetch(prom.url, prom.config).then(prom.resolve).catch(prom.reject);
    } else {
        // Should not happen if error is null, but reject if no token
         prom.reject(new Error("Token refresh succeeded but no token was provided."));
    }
  });

  failedRequestQueue = [];
};

// This function performs the refresh token request for fetchWithAuth
const refreshAccessToken = async (): Promise<string> => {
  console.log("Attempting to refresh access token...");
  try {
    const response = await fetch(`${AUTH_SERVICE_ENDPOINT}/refresh-access-token`, {
      method: 'POST',
      credentials: 'include', // Crucial for sending httpOnly refresh token cookie
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
       // Handle permanent failure (e.g., refresh token expired/invalid)
       if (response.status === 401 || response.status === 403) {
           console.error("Refresh token failed or expired (fetch). Clearing tokens and potentially logging out.");
           // Redirect or signal logout globally
            window.location.href = '/login'; // Simple redirect
           throw new Error("Refresh token failed or expired."); 
       }
      // Handle other transient errors during refresh
      throw new Error(`Failed to refresh token: ${response.status} ${response.statusText}`);
    }

    const { accessToken } = await response.json();
    if (!accessToken) {
        throw new Error("New access token not received after refresh.");
    }
    console.log("Access token refreshed successfully.");
    return accessToken;

  } catch (error) {
    console.error("Error during token refresh:", error);
    // Redirect or signal logout globally
    window.location.href = '/login'; // Simple redirect
    throw error; // Re-throw error to signal failure to callers
  }
};


// --- Custom Fetch Wrapper ---

export const fetchWithAuth = async (
    url: string | URL | Request, 
    config: RequestInit = {}
): Promise<Response> => {
  const headers = new Headers(config.headers);

  // Ensure credentials are included if not explicitly set, needed for refresh cookie
  if (config.credentials === undefined) {
      config.credentials = 'include';
  }

  config.headers = headers;

  try {
    let response = await fetch(url, config);

    // Intercept 401 Unauthorized responses
    if (response.status === 401) {
      console.warn(`Received 401 for request to ${typeof url === 'string' ? url : 'request object'}`);
      
      // Prevent multiple refresh attempts concurrently
      if (!isRefreshingToken) {
        isRefreshingToken = true;
        try {
          const newToken = await refreshAccessToken();
          // Process any queued requests that failed while refreshing
          processFailedQueue(null, newToken);
          
          // Retry the original request with the new token
          console.log(`Retrying original request to ${typeof url === 'string' ? url : 'request object'} with new token.`);
          const newHeaders = new Headers(config.headers); // Get potentially modified headers
          newHeaders.set('Authorization', `Bearer ${newToken}`);
          config.headers = newHeaders; // Set header on original config obj
          
          response = await fetch(url, config); // Re-assign response
          
          // Check if the retry itself failed (e.g., new token also invalid immediately?)
          if (response.status === 401) {
              console.error("Request failed with 401 even after token refresh. Clearing tokens.");
              window.location.href = '/login';
              // Return the failed response or throw an error
              return response; 
          }

        } catch (refreshError) {
          console.error("Token refresh failed, processing queue with error.");
          processFailedQueue(refreshError as Error, null);
          // Ensure the original caller gets an error if refresh fails
          // Reject the promise associated with this fetch call
          return Promise.reject(refreshError); 
        } finally {
          isRefreshingToken = false;
        }
      } else {
         // Queue the failed request if another refresh is already in progress
         console.log(`Queueing request to ${typeof url === 'string' ? url : 'request object'} while token is refreshing.`);
         return new Promise<Response>((resolve, reject) => {
            failedRequestQueue.push({ resolve, reject, config, url });
         });
      }
    }

    // If not 401 or after successful retry, return the response
    return response;

  } catch (error) {
    // Handle network errors or errors from fetch itself
    console.error(`Fetch error for ${typeof url === 'string' ? url : 'request object'}:`, error);
    throw error; // Re-throw other network/fetch errors
  }
};

// Optional: Export helper functions for common methods if desired
// export const apiClient = {
//   get: (url: string, config?: RequestInit) => fetchWithAuth(url, { ...config, method: 'GET' }),
//   post: (url: string, body: any, config?: RequestInit) => fetchWithAuth(url, {
//     ...config,
//     method: 'POST',
//     body: JSON.stringify(body),
//     headers: { 'Content-Type': 'application/json', ...config?.headers },
//   }),
//   // ... other methods
// }; 