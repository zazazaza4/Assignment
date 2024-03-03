import { FC, memo } from 'react';

import { StaffList } from '@/features/StaffList';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface MainPageStaffListProps {
  className?: string;
}

export const MainPageStaffList: FC<MainPageStaffListProps> = memo(
  (props: MainPageStaffListProps) => {
    const { className } = props;

    return (
      <VStack
        max
        gap="50"
        align="center"
        className={classNames('container', {}, [className])}
      >
        <Text
          max
          theme="black"
          align="center"
          title="Working with GET request"
        />
        <StaffList />
      </VStack>
    );
  }
);
