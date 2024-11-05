import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import ResetPasswordFormContent from '@@pages/FindAccount/parts/ResetPasswordFormContent';
import { ResetPasswordForm } from '@@pages/FindAccount/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const initialValues: ResetPasswordForm = {
  password: '',
  passwordCheck: '',
};

function ResetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (form: ResetPasswordForm) => {
    console.log(form);
    navigate(pathGenerator(PAGES.LOGIN));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <ResetPasswordFormContent />
    </Formik>
  );
}

export default ResetPassword;
