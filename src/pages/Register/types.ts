import { GENDER } from '@@pages/Register/constants';
import { asType } from '@@types/common';

export interface RegisterForm {
  userId: string;
  username: string;
  password: string;
  passwordCheck: string;
  email: string;
  birth: string;
  gender: Gender;
  tel: string;
  checkedId: boolean;
  checkedEmail: boolean;
}

export type Gender = asType<typeof GENDER>;
