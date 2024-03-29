import { FC, memo } from 'react';

import { getRouteMain } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';

import LogoImg from '@/shared/assets/icons/logo.svg';

import { AppLink } from '../AppLink';

import cls from './Logo.module.scss';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = memo((props: LogoProps) => {
  const { className } = props;

  return (
    <AppLink
      to={getRouteMain()}
      className={classNames(cls.Logo, {}, [className])}
      aria-label="Homepage"
    >
      <LogoImg />
    </AppLink>
  );
});
