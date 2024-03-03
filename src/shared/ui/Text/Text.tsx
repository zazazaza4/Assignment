import { FC, memo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

type TextWeight = 'regular';
type TextTheme = 'white' | 'black' | 'error';
type TextAlign = 'right' | 'left' | 'center';
type TextSize = 'size_s' | 'size_m' | 'size_xl';
type HeaderTagType = 'h2' | 'h4' | 'h6';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  size_s: 'h6',
  size_m: 'h4',
  size_xl: 'h2',
};

interface TextProps {
  className?: string;
  title?: string;
  weight?: TextWeight;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  max?: boolean;
}

export const Text: FC<TextProps> = memo(
  ({
    className,
    text = '',
    title = '',
    theme = 'white',
    align = 'left',
    size = 'size_m',
    weight = 'regular',
    max = false,
  }: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
      [cls.max]: max,
      [cls[`weight_${weight}`]]: Boolean(weight),
    };

    return (
      <div
        className={classNames(cls.Text, mods, [
          className,
          cls[theme],
          cls[align],
          cls[size],
        ])}
      >
        {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    );
  }
);
