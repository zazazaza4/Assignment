import { UseFormRegisterReturn } from 'react-hook-form';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Select.module.scss';

interface SelectProps<T> {
  className?: string;
  options: T[];
  name: string;
  defaultValue?: string | number;
  register?: UseFormRegisterReturn;
}

export const Select = <T extends { id: string | number; name: string }>(
  props: SelectProps<T>
) => {
  const { className, options, name, defaultValue, register } = props;

  return (
    <div className={classNames(cls.Select, {}, [className])}>
      {options.map((option) => (
        <div className={cls.radio} key={option.id}>
          <input
            type="radio"
            name={name}
            id={String(option.id)}
            value={option.id}
            defaultChecked={defaultValue === option.id}
            {...register}
          />
          <label htmlFor={String(option.id)} className={cls.label}>
            {option.name}
          </label>
        </div>
      ))}
    </div>
  );
};
