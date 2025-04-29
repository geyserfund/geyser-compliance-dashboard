import { ApolloClient, InMemoryCache, createHttpLink, FetchResult, from, Observable } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { publish } from './utils/eventBus'; // Import the event bus publisher

// --- Configuration ---
const API_BASE_URL = import.meta.env.VITE_APP_API_ENDPOINT;
if (!API_BASE_URL) {
  console.error("Configuration error: VITE_APP_API_ENDPOINT is not set.");
  // Handle missing env var appropriately
}
const GRAPHQL_ENDPOINT = `${API_BASE_URL}/graphql`; // Your GraphQL endpoint

// --- Error Codes ---
const LOGOUT_ERROR_CODES = new Set([
  'INVALID_REFRESH_TOKEN',
  'INVALID_ACCESS_TOKEN',
  'EXPIRED_REFRESH_TOKEN',
  'UNKNOWN_ERROR',
]);

const RETRY_ERROR_CODES = new Set(['STALE_REFRESH_TOKEN']);

// Define a type for the expected error extension structure
interface GraphQLErrorExtension {
  error?: {
    code?: string;
    message?: string;
  };
  code?: string; // Allow code directly on extensions as fallback
}

// --- Apollo Links ---

// 1. Error Link: Handles auth errors and token refresh
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      const extensions = err.extensions as GraphQLErrorExtension | undefined;
      const errorCode = extensions?.error?.code || extensions?.code;
      console.log('[Apollo Error Link] GraphQL Error Code:', errorCode);

      if (errorCode && LOGOUT_ERROR_CODES.has(errorCode)) {
        console.log(`[Apollo Error Link] Logout triggered due to error code: ${errorCode}`);
        publish('auth:logout');
        // We might still want to forward the error so the calling code knows about it
        // return; // Uncomment this if you want to completely swallow the error after logout
      } else if (errorCode && RETRY_ERROR_CODES.has(errorCode)) {
        console.log('[Apollo Error Link] Stale token detected. Attempting refresh and retry.');

        // Return an Observable that handles the refresh and retry flow FOR THIS operation
        return new Observable<FetchResult>((observer) => {
              // Retry the current operation by forwarding it again
              forward(operation).subscribe({
                  next: (value) => observer.next(value),
                  error: (retryError) => {
                      console.error(`[Apollo Link] Error after retrying ${operation.operationName}:`, retryError);
                      observer.error(retryError); // Forward errors from the retry
                  },
                  complete: () => observer.complete(), // Forward completion from the retry
              });
            })
      }
    }
  }

  // Handle network errors (like generic 401s)
  if (networkError) {
    console.log(`[Apollo Error Link] Network error: ${networkError}`);
    if ('statusCode' in networkError && networkError.statusCode === 401) {
      publish('auth:logout');
    }
  }

  // If no specific handling occurred, the error continues down the chain (or to the caller)
});

// 2. HTTP Link: Sends the request to the GraphQL endpoint
const httpLink = createHttpLink({
  uri: GRAPHQL_ENDPOINT,
  credentials: 'include',
});

// --- Apollo Client Instance ---

// Chain the links: errorLink processes first, then httpLink.
export const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]), // Error link first
  cache: new InMemoryCache(),
  // Optional: Default options
  // defaultOptions: {
  //   watchQuery: { fetchPolicy: 'cache-and-network' },
  //   query: { fetchPolicy: 'network-only' },
  // },
}); 