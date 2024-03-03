import { useCallback, useState } from 'react';

import { $api } from '@/shared/api/api';
import useQuery from '@/shared/lib/hooks/useQuery/useQuery';

interface Position {
  id: number;
  name: string;
}

interface PositionsApiResponse {
  success: boolean;
  positions: Position[];
}

const getPositions = async (): Promise<Position[]> => {
  const response = await $api.get<PositionsApiResponse>('/positions');
  return response.data.positions;
};

export const usePositions = () => {
  const [positions, setPositions] = useState<Position[]>([]);

  const fetchPositions = useCallback(async () => {
    const data = await getPositions();
    setPositions(data);
    return data;
  }, []);

  const { error, isLoading } = useQuery<Position[], Error>(fetchPositions);

  return { positions, isLoading, error };
};
