import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { registerSchema } from '@@constants/schema';
import { GENDER } from '@@pages/Register/constants';
import RegisterFormContent from '@@pages/Register/parts/RegisterFormContent';
import { RegisterForm } from '@@pages/Register/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const initialValues: RegisterForm = {
  userId: '',
  checkedId: false,
  username: '',
  password: '',
  passwordCheck: '',
  birth: '',
  gender: GENDER.MALE,
  tel: '',
  email: '',
  checkedEmail: false,
};

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (form: RegisterForm) => {
    console.log(form);
    navigate(pathGenerator(PAGES.REGISTER, '/complete'));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={registerSchema}>
      <RegisterFormContent />
    </Formik>
  );
}

export default Register;
