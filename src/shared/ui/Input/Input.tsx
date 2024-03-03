import { InputHTMLAttributes, memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  errorMessage?: string;
  label: string;
  register?: UseFormRegisterReturn;
  name: string;
}

export const Input = memo(
  ({
    className,
    value,
    errorMessage,
    label,
    name,
    register,
    onChange,
    type = 'text',
    ...otherProps
  }: InputProps) => {
    const mods: Mods = {
      [cls.inputError]: Boolean(errorMessage),
    };

    return (
      <div className={classNames(cls.Input, mods, [className])}>
        <label htmlFor={name} className={cls.underlined}>
          <input
            id={name}
            placeholder={'&nbsp;'}
            {...register}
            {...otherProps}
          />
          <span className={cls.label}>{label}</span>
          {errorMessage && <span className={cls.error}>{errorMessage}</span>}
        </label>
      </div>
    );
  }
);
