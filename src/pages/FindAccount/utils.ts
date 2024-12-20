import { ResetPasswordForm } from '@@pages/FindAccount/types';
import { UserChangePasswordRequest } from '@@stores/auth/types';

export const sanitizeResetPasswordForm = (form: ResetPasswordForm): UserChangePasswordRequest => ({
  userId: form.userId,
  changeKey: form.changeKey,
  password: form.password,
});
