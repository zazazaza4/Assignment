import { ChangeEvent, FC, memo, ReactNode, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { truncate } from '@/shared/lib/truncate/truncate';

import { HStack } from '../Stack';
import { Text } from '../Text';

import cls from './Upload.module.scss';

interface UploadProps {
  className?: string;
  errorMessage?: ReactNode;
  name: string;
  register?: UseFormRegisterReturn;
}

export const Upload: FC<UploadProps> = memo((props: UploadProps) => {
  const { className, errorMessage, name, register } = props;
  const [fileName, setFileName] = useState<string>('Upload your photo');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    }
  };

  const mods: Mods = {
    [cls.inputError]: Boolean(errorMessage),
  };

  return (
    <div className={classNames(cls.Upload, mods, [className])}>
      <HStack
        align="center"
        justify="center"
        className={cls.wrapper}
        data-text={truncate(fileName, 20)}
      >
        <label htmlFor={name} className={cls.label}>
          {truncate(fileName, 20)}
        </label>
        <input
          id={name}
          name={name}
          type="file"
          {...register}
          className={cls.input}
          onChange={handleFileChange}
        />
      </HStack>
      {errorMessage && (
        <Text
          theme="error"
          size="size_s"
          text={String(errorMessage)}
          className={cls.error}
        />
      )}
    </div>
  );
});
