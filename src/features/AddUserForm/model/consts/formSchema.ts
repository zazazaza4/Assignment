import { mixed, number, object, string } from 'yup';

const SUPPORTED_FORMATS: string[] = ['image/jpg', 'image/jpeg'];

export const schema = object({
  name: string().required().min(2).max(60),
  email: string().email().required(),
  phone: string()
    .matches(/^[+]{0,1}380([0-9]{9})$/, 'Phone must be valid')
    .required(),
  position_id: number().required().positive().integer(),
  photo: mixed<FileList>()
    .nullable()
    .required('A file is required')
    .test(
      'Fichier taille',
      'upload file',
      (value) => !value || (value && value[0]?.size <= 5000 * 1024 * 1024)
    )
    .test(
      'format',
      'Supported file formats are jpg and jpeg',
      (value) => value && SUPPORTED_FORMATS.includes(value[0]?.type)
    ),
}).required();
