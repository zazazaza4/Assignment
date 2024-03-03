import { FC, memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { Select } from '@/shared/ui/Select';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { usePositions } from '../../api/positionListApi';

interface PositionSelectorProps {
  className?: string;
  register?: UseFormRegisterReturn;
}

export const PositionSelector: FC<PositionSelectorProps> = memo(
  (props: PositionSelectorProps) => {
    const { className, register } = props;
    const { positions, error, isLoading } = usePositions();

    if (isLoading) {
      return (
        <VStack className={classNames('', {}, [className])}>
          <Loader />
        </VStack>
      );
    }

    return (
      <VStack gap="10" className={classNames('', {}, [className])}>
        <Text theme="black" text="Select your position" />
        <Select
          name="position"
          options={positions}
          register={register}
          defaultValue={positions[0].id}
        />
      </VStack>
    );
  }
);
