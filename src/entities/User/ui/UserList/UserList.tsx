import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';

import { User } from '../../model/types/user';
import { UserListItem } from '../UserListItem/UserListItem';

import cls from './UserList.module.scss';

interface UserListProps {
  className?: string;
  users?: User[];
}

export const UserList: FC<UserListProps> = memo((props: UserListProps) => {
  const { className, users } = props;

  return (
    <HStack className={classNames(cls.UserList, {}, [className])}>
      {users?.map((user) => <UserListItem key={user.id} user={user} />)}
    </HStack>
  );
});
