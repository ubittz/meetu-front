import { useState } from 'react';

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Modal from '@@components/Modal';
import { useModal } from '@@components/Modal/hooks';
import { findIdSchema } from '@@constants/schema';
import FindIdFormContent from '@@pages/FindAccount/parts/FindIdFormContent';
import { FindIdForm } from '@@pages/FindAccount/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { findIdFailure, findIdRequest, findIdSuccess } from '@@stores/auth/reducer';

const initialValues: FindIdForm = {
  email: '',
  authNumber: '',
};

function FindId() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [findedId, setFindedId] = useState<string>();

  const { visible: successVisible, setVisible: setSuccessVisible } = useModal();
  const { visible, setVisible, content, setContent } = useModal();

  const handleSubmit = (form: FindIdForm) => {
    dispatch(findIdRequest(form));
  };

  const handleConfirm = () => {
    setVisible(false);
  };

  const handleConfirmSuccess = () => {
    navigate(pathGenerator(PAGES.FIND_ACCOUNT, '/id/complete'), {
      state: {
        findedId,
      },
    });
  };

  useActionSubscribe({
    type: findIdSuccess.type,
    callback: ({ payload }: ReturnType<typeof findIdSuccess>) => {
      setSuccessVisible(true);
      setFindedId(payload);
    },
  });

  useActionSubscribe({
    type: findIdFailure.type,
    callback: ({ payload }: ReturnType<typeof findIdFailure>) => {
      setContent(payload);
      setVisible(true);
    },
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={findIdSchema}>
      <>
        <Modal visible={successVisible} setVisible={setSuccessVisible} onConfirm={handleConfirmSuccess}>
          인증을 완료했습니다.
        </Modal>
        <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
          {content}
        </Modal>
        <FindIdFormContent />
      </>
    </Formik>
  );
}

export default FindId;
