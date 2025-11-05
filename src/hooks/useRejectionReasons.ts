import { useState, useEffect } from 'react';
import { fetchWithAuth } from '@/utils/apiClient';

export interface RejectionReason {
  key: string;
  description: string;
}

interface RejectionReasonsResponse {
  success: boolean;
  data: RejectionReason[];
}

interface UseRejectionReasonsReturn {
  reasons: RejectionReason[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useRejectionReasons = (): UseRejectionReasonsReturn => {
  const [reasons, setReasons] = useState<RejectionReason[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReasons = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const API_BASE_URL = import.meta.env.VITE_APP_API_ENDPOINT;
      if (!API_BASE_URL) {
        throw new Error("Configuration error: VITE_APP_API_ENDPOINT is not set.");
      }
      
      const response = await fetchWithAuth(`${API_BASE_URL}/compliance/project-review/rejection-reasons`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch rejection reasons: ${response.status} ${response.statusText}`);
      }
      
      const data: RejectionReasonsResponse = await response.json();
      
      if (!data.success) {
        throw new Error('API returned success: false');
      }
      
      setReasons(data.data);
    } catch (err) {
      console.error('Error fetching rejection reasons:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      // Fallback to empty array on error
      setReasons([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReasons();
  }, []);

  return {
    reasons,
    loading,
    error,
    refetch: fetchReasons,
  };
}; 