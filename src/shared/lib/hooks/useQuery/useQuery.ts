import { useCallback, useEffect, useState } from 'react';

type QueryFunction<TResult> = () => Promise<TResult>;

interface QueryResult<TResult, TError = Error> {
  data: TResult | null;
  isLoading: boolean;
  error: TError | null;
  refetch: () => Promise<void>;
}

const useQuery = <TResult, TError = Error>(
  queryFn: QueryFunction<TResult>
): QueryResult<TResult, TError> => {
  const [data, setData] = useState<TResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<TError | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await queryFn();
      setData(result);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [queryFn]);

  const refetch = async () => {
    await fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [fetchData, queryFn]);

  return { data, isLoading, error, refetch };
};

export default useQuery;
