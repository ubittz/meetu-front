export interface FindIdForm {
  email: string;
}

export interface VerifyIdentityForm {
  id: string;
  email: string;
}

export interface ResetPasswordForm {
  password: string;
  passwordCheck: string;
}

export interface VerifyOTPForm {
  otp: string;
}
