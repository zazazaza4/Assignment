import { FC, memo } from 'react';

import { UserList } from '@/entities/User';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { useStaffList } from '../api/staffListApi';

interface StaffListProps {
  className?: string;
}

export const StaffList: FC<StaffListProps> = memo((props: StaffListProps) => {
  const { className } = props;
  const { users, error, handleNextPage, isLoading, isOver } = useStaffList();

  if (error || !users) {
    return <Text title="Something went wrong" />;
  }

  return (
    <VStack
      max
      gap="50"
      align="center"
      className={classNames('', {}, [className])}
    >
      <UserList users={users} />
      {!isOver && (
        <Button size="size_l" isDisabled={isLoading} onClick={handleNextPage}>
          Show more
        </Button>
      )}
    </VStack>
  );
});
