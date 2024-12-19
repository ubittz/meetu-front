export interface ModifyMyInfoForm {
  id: string;
  password?: string;
  passwordCheck?: string;
  email?: string;
  description?: string;
  checkedEmail: boolean;
  image?: File | string;
}
