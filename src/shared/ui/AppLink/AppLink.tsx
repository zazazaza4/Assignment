import { FC, memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

type AppLinkTheme = 'primary';

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink: FC<AppLinkProps> = memo(
  ({
    className,
    to,
    theme = 'primary',
    children,
    ...otherProps
  }: AppLinkProps) => (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
);
