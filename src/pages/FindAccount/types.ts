export interface FindIdForm {
  email: string;
  authNumber: string;
}

export interface VerifyIdentityForm {
  id: string;
  email: string;
  authNumber: string;
}

export interface ResetPasswordForm {
  userId: string;
  changeKey: string;
  password: string;
  passwordCheck: string;
}
