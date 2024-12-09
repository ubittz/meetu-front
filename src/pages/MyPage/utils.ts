import { UserEditRequestDTO } from '@@stores/auth/types';

import { ModifyMyInfoForm } from './types';

export const sanitizeEditForm = (form: ModifyMyInfoForm): UserEditRequestDTO => ({
  id: form.id,
  password: form.password,
  email: form.email,
  description: form.description,
});
