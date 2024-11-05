import { GENDER } from '@@pages/Register/constants';
import { asType } from '@@types/common';

export interface RegisterForm {
  id: string;
  name: string;
  password: string;
  passwordCheck: string;
  birth: string;
  gender: Gender;
  phone: string;
  email: string;
}

export type Gender = asType<typeof GENDER>;
