import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './MainPageHeader.module.scss';

interface MainPageHeaderProps {
  className?: string;
}

export const MainPageHeader: FC<MainPageHeaderProps> = memo(
  (props: MainPageHeaderProps) => {
    const { className } = props;

    return (
      <VStack
        as="section"
        max
        align="center"
        className={classNames(cls.MainPageHeader, {}, ['container', className])}
      >
        <VStack align="center" max className={cls.content}>
          <VStack maxWidth className={cls.text}>
            <Text
              align="center"
              title="Test assignment for front-end developer"
            />
            <Text
              align="center"
              text="What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they'll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving."
            />
          </VStack>
          <Button>Sign up</Button>
        </VStack>
      </VStack>
    );
  }
);
