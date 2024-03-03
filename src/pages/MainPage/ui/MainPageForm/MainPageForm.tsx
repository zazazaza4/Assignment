import { FC, memo, useState } from 'react';

import { AddUserForm, registerUser } from '@/features/AddUserForm';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import SuccessImg from '@/shared/assets/icons/success.svg';

interface MainPageFormProps {
  className?: string;
}

export const MainPageForm: FC<MainPageFormProps> = memo(
  (props: MainPageFormProps) => {
    const { className } = props;
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: FormData) => {
      try {
        setIsLoading(true);
        await registerUser(data);
        setSuccess(true);
      } catch (error) {
        setSuccess(false);
      } finally {
        setIsLoading(false);
      }
    };

    if (isLoading) {
      <VStack
        max
        gap="50"
        align="center"
        className={classNames('container', {}, [className])}
      >
        <Loader />
      </VStack>;
    }

    if (success) {
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
            title="User successfully registered"
          />
          <SuccessImg />
        </VStack>
      );
    }

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
          title="Working with POST request"
        />
        <AddUserForm onSubmit={onSubmit} />
      </VStack>
    );
  }
);
