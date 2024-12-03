import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Modal from '@@components/Modal';
import { useModal } from '@@components/Modal/hooks';
import { registerSchema } from '@@constants/schema';
import { GENDER } from '@@pages/Register/constants';
import RegisterFormContent from '@@pages/Register/parts/RegisterFormContent';
import { RegisterForm } from '@@pages/Register/types';
import { sanitizeRegisterForm } from '@@pages/Register/utils';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { registerFailure, registerRequest, registerSuccess } from '@@stores/auth/reducer';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { visible, setVisible, content, setContent } = useModal();

  const handleSubmit = (form: RegisterForm) => {
    dispatch(registerRequest(sanitizeRegisterForm(form)));
  };

  const handleConfirm = () => {
    setVisible(false);
  };

  useActionSubscribe({
    type: registerSuccess.type,
    callback: () => {
      navigate(pathGenerator(PAGES.REGISTER, '/complete'));
    },
  });

  useActionSubscribe({
    type: registerFailure.type,
    callback: ({ payload }: ReturnType<typeof registerFailure>) => {
      setContent(payload);
      setVisible(true);
    },
  });

  return (
    <>
      <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
        {content}
      </Modal>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={registerSchema}>
        <RegisterFormContent />
      </Formik>
    </>
  );
}

export default Register;
