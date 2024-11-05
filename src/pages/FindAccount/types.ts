export interface FindIdForm {
  name: string;
  birth: string;
  email: string;
}

export interface FindPasswordForm {
  id: string;
  name: string;
  birth: string;
  email: string;
}

export interface ResetPasswordForm {
  password: string;
  passwordCheck: string;
}
