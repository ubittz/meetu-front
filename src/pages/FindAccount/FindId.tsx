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
};

function FindId() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { visible, setVisible } = useModal();

  const handleSubmit = (form: FindIdForm) => {
    dispatch(findIdRequest(form));
  };

  const handleConfirm = () => {
    setVisible(false);
  };

  useActionSubscribe({
    type: findIdSuccess.type,
    callback: ({ payload }: ReturnType<typeof findIdSuccess>) => {
      navigate(pathGenerator(PAGES.FIND_ACCOUNT, '/id/complete'), {
        state: {
          findedId: payload,
        },
      });
    },
  });

  useActionSubscribe({
    type: findIdFailure.type,
    callback: () => {
      setVisible(true);
    },
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={findIdSchema}>
      <>
        <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
          인증을 실패했습니다.
        </Modal>
        <FindIdFormContent />
      </>
    </Formik>
  );
}

export default FindId;
