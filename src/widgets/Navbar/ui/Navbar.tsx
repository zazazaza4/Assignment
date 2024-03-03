import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Logo } from '@/shared/ui/Logo/Logo';
import { HStack, VStack } from '@/shared/ui/Stack';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }: NavbarProps) => {
  return (
    <VStack
      as="header"
      maxWidth
      className={classNames(cls.Navbar, {}, [className])}
    >
      <HStack
        max
        justify="between"
        align="center"
        className={classNames('container', {}, [cls.container])}
      >
        <Logo />
        <HStack gap="10">
          <Button>Users</Button>
          <Button>Sign up</Button>
        </HStack>
      </HStack>
    </VStack>
  );
});
