import { RegisterDTO } from '@@stores/auth/types';

import { RegisterForm } from './types';

export const sanitizeRegisterForm = (form: RegisterForm): RegisterDTO => ({
  userId: form.userId,
  username: form.username,
  password: form.password,
  email: form.email,
  birth: form.birth,
  gender: form.gender,
  tel: form.tel,
});
