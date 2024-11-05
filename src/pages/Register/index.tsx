import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { GENDER } from '@@pages/Register/constants';
import RegisterFormContent from '@@pages/Register/parts/RegisterFormContent';
import { RegisterForm } from '@@pages/Register/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const initialValues: RegisterForm = {
  id: '',
  name: '',
  password: '',
  passwordCheck: '',
  birth: '',
  gender: GENDER.MALE,
  phone: '',
  email: '',
};

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (form: RegisterForm) => {
    console.log(form);
    navigate(pathGenerator(PAGES.REGISTER, '/complete'));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <RegisterFormContent />
    </Formik>
  );
}

export default Register;
