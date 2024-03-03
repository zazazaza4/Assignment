import { useCallback, useState } from 'react';

import { User } from '@/entities/User';

import { $api } from '@/shared/api/api';
import useQuery from '@/shared/lib/hooks/useQuery/useQuery';

interface Links {
  next_url: string | null;
  prev_url: string | null;
}

interface ApiResponse {
  success: boolean;
  total_pages: number;
  total_users: number;
  count: number;
  page: number;
  links: Links;
  users: User[];
}

const getStaffList = async (page: number = 1, count: number = 6) => {
  const response = await $api.get<ApiResponse>('/users', {
    params: {
      page,
      count,
    },
  });
  return response.data;
};

export const useStaffList = (
  defaultPage: number = 1,
  defaultCount: number = 6
) => {
  const [page, setPage] = useState(defaultPage);
  const [users, setUsers] = useState<User[]>([]);
  const [isOver, setIsOver] = useState(false);

  const fetchStaffList = useCallback(async () => {
    const data = await getStaffList(page, defaultCount);
    if (page === 1) {
      setUsers(data.users);
    } else {
      setUsers((prev) => [...prev, ...data.users]);
    }

    setIsOver(data.users.length < defaultCount);

    return data;
  }, [page, defaultCount]);

  const { error, isLoading, refetch } = useQuery<ApiResponse, Error>(
    fetchStaffList
  );

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
    refetch();
  };

  return { users, isLoading, error, handleNextPage, isOver };
};
