import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import Modal from '@@components/Modal';
import { useModal } from '@@components/Modal/hooks';
import { resetPasswordSchema } from '@@constants/schema';
import ResetPasswordFormContent from '@@pages/FindAccount/parts/ResetPasswordFormContent';
import { ResetPasswordForm } from '@@pages/FindAccount/types';
import { sanitizeResetPasswordForm } from '@@pages/FindAccount/utils';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { resetPasswordFailure, resetPasswordRequest, resetPasswordSuccess } from '@@stores/auth/reducer';
import { UserVerifyIdentityResponse } from '@@stores/auth/types';

function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const verify: UserVerifyIdentityResponse | undefined = state.verify;

  const { visible: successVisible, setVisible: setSuccessVisible } = useModal();
  const { visible, setVisible, content, setContent } = useModal();

  const handleSubmit = (form: ResetPasswordForm) => {
    dispatch(resetPasswordRequest(sanitizeResetPasswordForm(form)));
  };

  const handleConfirmSuccess = () => {
    navigate(pathGenerator(PAGES.LOGIN));
  };

  const handleConfirm = () => {
    setVisible(false);
  };

  useActionSubscribe({
    type: resetPasswordSuccess.type,
    callback: () => {
      setSuccessVisible(true);
    },
  });

  useActionSubscribe({
    type: resetPasswordFailure.type,
    callback: ({ payload }: ReturnType<typeof resetPasswordFailure>) => {
      setContent(payload);
      setVisible(true);
    },
  });

  if (!verify) {
    return <Navigate to={pathGenerator(PAGES.LOGIN)} replace />;
  }

  const initialValues: ResetPasswordForm = {
    userId: verify.userId,
    changeKey: verify.changeKey,
    password: '',
    passwordCheck: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={resetPasswordSchema}>
      <>
        <Modal visible={successVisible} setVisible={setSuccessVisible} onConfirm={handleConfirmSuccess}>
          비밀번호 변경을 완료했습니다.
        </Modal>
        <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
          {content}
        </Modal>
        <ResetPasswordFormContent />
      </>
    </Formik>
  );
}

export default ResetPassword;
