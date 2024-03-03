import { FC, memo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { PositionSelector } from '@/entities/Position';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Upload } from '@/shared/ui/Upload';

import { schema } from '../model/consts/formSchema';

import cls from './AddUserForm.module.scss';

interface AddUserFormProps {
  className?: string;
  onSubmit: (value: FormData) => void;
}

export const AddUserForm: FC<AddUserFormProps> = memo(
  (props: AddUserFormProps) => {
    const { className, onSubmit } = props;
    const {
      register,
      handleSubmit,
      formState: { errors, isValid },
    } = useForm({
      resolver: yupResolver(schema),
      mode: 'onBlur',
    });

    const onSubmitForm: SubmitHandler<{
      name: string;
      email: string;
      phone: string;
      position_id: number;
      photo: FileList;
    }> = async (data) => {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('position_id', String(data.position_id));
      formData.append('photo', data.photo[0]);

      onSubmit(formData);
    };

    return (
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className={classNames(cls.AddUserForm, {}, [className])}
      >
        <Input
          label="Your name"
          register={register('name')}
          name="name"
          errorMessage={errors.name?.message}
          className={cls.input}
        />
        <Input
          label="Email"
          register={register('email')}
          name="email"
          errorMessage={errors.email?.message}
          className={cls.input}
        />
        <Input
          label="Phone"
          register={register('phone')}
          name="phone"
          errorMessage={errors.phone?.message}
          className={cls.input}
        />
        <PositionSelector register={register('position_id')} />
        <Upload
          register={register('photo')}
          errorMessage={errors.photo?.message}
          name="user"
        />
        <Button type="submit" isDisabled={!isValid} className={cls.btn}>
          Sign up
        </Button>
      </form>
    );
  }
);
