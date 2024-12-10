import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Modal from '@@components/Modal';
import { useModal } from '@@components/Modal/hooks';
import { verifyIdentitySchema } from '@@constants/schema';
import FindPasswordFormContent from '@@pages/FindAccount/parts/FindPasswordFormContent';
import { VerifyIdentityForm } from '@@pages/FindAccount/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { verifyIdentityFailure, verifyIdentityRequest, verifyIdentitySuccess } from '@@stores/auth/reducer';

const initialValues: VerifyIdentityForm = {
  id: '',
  email: '',
};

function FindPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { visible, setVisible } = useModal();

  const handleSubmit = (form: VerifyIdentityForm) => {
    dispatch(verifyIdentityRequest(form));
  };

  const handleConfirm = () => {
    setVisible(false);
  };

  useActionSubscribe({
    type: verifyIdentitySuccess.type,
    callback: () => {
      navigate(pathGenerator(PAGES.FIND_ACCOUNT, '/password/otp'));
    },
  });

  useActionSubscribe({
    type: verifyIdentityFailure.type,
    callback: () => {
      setVisible(true);
    },
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={verifyIdentitySchema}>
      <>
        <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
          인증을 실패했습니다.
        </Modal>
        <FindPasswordFormContent />
      </>
    </Formik>
  );
}

export default FindPassword;
