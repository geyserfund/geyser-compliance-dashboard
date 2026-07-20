import { useCallback, useState } from 'react';
import { fetchWithAuth } from '@/utils/apiClient';

interface RequestIdentityVerificationArgs {
  projectId: string;
  /** Optional note from the reviewer, included in the email sent to the creator. */
  message?: string;
}

interface RequestIdentityVerificationResponse {
  success: boolean;
  message?: string;
}

interface UseRequestIdentityVerificationReturn {
  requestIdentityVerification: (args: RequestIdentityVerificationArgs) => Promise<void>;
  loading: boolean;
  error: string | null;
}

/**
 * Requests that a project's creator complete identity (ID) verification.
 *
 * This calls the compliance API which flags the project as requiring ID
 * verification and notifies the creator by email. It mirrors the REST pattern
 * used by `useRejectionReasons` since the compliance dashboard talks to the
 * `/compliance` namespace rather than the core GraphQL schema.
 */
export const useRequestIdentityVerification = (): UseRequestIdentityVerificationReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestIdentityVerification = useCallback(
    async ({ projectId, message }: RequestIdentityVerificationArgs) => {
      setLoading(true);
      setError(null);

      try {
        const API_BASE_URL = import.meta.env.VITE_APP_API_ENDPOINT;
        if (!API_BASE_URL) {
          throw new Error('Configuration error: VITE_APP_API_ENDPOINT is not set.');
        }

        const response = await fetchWithAuth(
          `${API_BASE_URL}/compliance/project-review/request-identity-verification`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ projectId, message: message?.trim() || undefined }),
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to request identity verification: ${response.status} ${response.statusText}`
          );
        }

        const data: RequestIdentityVerificationResponse = await response.json();

        if (!data.success) {
          throw new Error(data.message || 'API returned success: false');
        }
      } catch (err) {
        console.error('Error requesting identity verification:', err);
        const messageText = err instanceof Error ? err.message : 'An unexpected error occurred';
        setError(messageText);
        throw err instanceof Error ? err : new Error(messageText);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    requestIdentityVerification,
    loading,
    error,
  };
};
