import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

type ButtonTheme = 'primary';
type ButtonSize = 'size_m' | 'size_l';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  isDisabled?: boolean;
  children?: ReactNode;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = memo(
  ({
    className,
    children,
    theme = 'primary',
    isDisabled,
    size = 'size_m',
    ...otherProps
  }: ButtonProps) => {
    const mods: Mods = {
      [cls.disabled]: isDisabled,
    };

    return (
      <button
        type="button"
        className={classNames(cls.Button, mods, [
          className,
          cls[theme],
          cls[size],
        ])}
        disabled={isDisabled}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
);
