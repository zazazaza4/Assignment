import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { truncate } from '@/shared/lib/truncate/truncate';
import { Avatar } from '@/shared/ui/Avatar';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { User } from '../../model/types/user';

import cls from './UserListItem.module.scss';

interface UserListItemProps {
  className?: string;
  user: User;
}

export const UserListItem: FC<UserListItemProps> = memo(
  (props: UserListItemProps) => {
    const { className, user } = props;

    return (
      <Card className={classNames(cls.UserListItem, {}, [className])}>
        <VStack align="center" gap="20" max className={cls.content}>
          <Avatar
            size={70}
            className={cls.img}
            src={user.photo}
            alt={user.name}
          />
          <Text theme="black" text={truncate(user.name, 20)} />
          <VStack>
            <Text
              max
              align="center"
              theme="black"
              text={truncate(user.position, 15)}
            />
            <Text
              max
              align="center"
              text={truncate(user.email, 15)}
              theme="black"
            />
            <Text
              max
              align="center"
              text={truncate(user.phone, 12)}
              theme="black"
            />
          </VStack>
        </VStack>
      </Card>
    );
  }
);
