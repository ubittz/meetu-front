import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import Modal from '@@components/Modal';
import { useModal } from '@@components/Modal/hooks';
import { verifyOTPSchema } from '@@constants/schema';
import VerifyOTPFormContent from '@@pages/FindAccount/parts/VerifyOTPFormContent';
import { VerifyOTPForm } from '@@pages/FindAccount/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useAppState } from '@@store/hooks';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { verifyOTPFailure, verifyOTPRequest, verifyOTPSuccess } from '@@stores/auth/reducer';

const initialValues: VerifyOTPForm = {
  otp: '',
};

function VerifyOTP() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeKey = useAppState((state) => state.auth.changeKey);

  const { visible, setVisible } = useModal();

  const handleConfirm = () => {
    setVisible(false);
  };

  const handleSubmit = (form: VerifyOTPForm) => {
    dispatch(verifyOTPRequest(form));
  };

  useActionSubscribe({
    type: verifyOTPSuccess.type,
    callback: () => {
      navigate(pathGenerator(PAGES.FIND_ACCOUNT, '/password/reset'));
    },
  });

  useActionSubscribe({
    type: verifyOTPFailure.type,
    callback: () => {
      setVisible(true);
    },
  });

  if (!changeKey) {
    return <Navigate to={pathGenerator(PAGES.FIND_ACCOUNT, '/password')} />;
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={verifyOTPSchema}>
      <>
        <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
          인증번호가 올바르지 않습니다.
        </Modal>
        <VerifyOTPFormContent />
      </>
    </Formik>
  );
}

export default VerifyOTP;
