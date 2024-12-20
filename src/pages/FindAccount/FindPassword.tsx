import { useState } from 'react';

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
import { UserVerifyIdentityResponse } from '@@stores/auth/types';

const initialValues: VerifyIdentityForm = {
  id: '',
  email: '',
  authNumber: '',
};

function FindPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [verify, setVerify] = useState<UserVerifyIdentityResponse>();

  const { visible: successVisible, setVisible: setSuccessVisible } = useModal();
  const { visible, setVisible, content, setContent } = useModal();

  const handleSubmit = (form: VerifyIdentityForm) => {
    dispatch(verifyIdentityRequest(form));
  };

  const handleConfirm = () => {
    setVisible(false);
  };

  const handleConfirmSuccess = () => {
    navigate(pathGenerator(PAGES.FIND_ACCOUNT, '/password/reset'), {
      state: {
        verify,
      },
    });
  };

  useActionSubscribe({
    type: verifyIdentitySuccess.type,
    callback: ({ payload }: ReturnType<typeof verifyIdentitySuccess>) => {
      setVerify(payload);
      setSuccessVisible(true);
    },
  });

  useActionSubscribe({
    type: verifyIdentityFailure.type,
    callback: ({ payload }: ReturnType<typeof verifyIdentityFailure>) => {
      setContent(payload);
      setVisible(true);
    },
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={verifyIdentitySchema}>
      <>
        <Modal visible={successVisible} setVisible={setSuccessVisible} onConfirm={handleConfirmSuccess}>
          인증을 완료했습니다.
        </Modal>
        <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
          {content}
        </Modal>
        <FindPasswordFormContent />
      </>
    </Formik>
  );
}

export default FindPassword;
