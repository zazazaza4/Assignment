export interface UserForm {
  name: string;
  email: string;
  phone: string;
  position_id: string | Blob;
  photo: FileList;
}
