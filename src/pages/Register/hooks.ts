import { useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';

import { useModal } from '@@components/Modal/hooks';
import { RegisterForm } from '@@pages/Register/types';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import {
  checkDuplicateEmailFailure,
  checkDuplicateEmailRequest,
  checkDuplicateEmailSuccess,
  checkDuplicateIdFailure,
  checkDuplicateIdRequest,
  checkDuplicateIdSuccess,
} from '@@stores/auth/reducer';

export const useRegisterForm = () => {
  const dispatch = useDispatch();
  const { values, setFieldValue } = useFormikContext<RegisterForm>();
  const { visible, setVisible, content, setContent } = useModal();

  const handleClickCheckId = () => {
    dispatch(checkDuplicateIdRequest(values.userId));
  };

  const handleClickCheckEmail = () => {
    dispatch(checkDuplicateEmailRequest(values.email));
  };

  const handleConfirm = () => {
    setVisible(false);
  };

  useActionSubscribe({
    type: checkDuplicateIdSuccess.type,
    callback: () => {
      setContent('사용 가능한 아이디입니다.');
      setVisible(true);
      setFieldValue('checkedId', true);
    },
  });

  useActionSubscribe({
    type: checkDuplicateIdFailure.type,
    callback: () => {
      setContent('이미 사용중인 아이디입니다.');
      setVisible(true);
      setFieldValue('checkedId', false);
    },
  });

  useActionSubscribe({
    type: checkDuplicateEmailSuccess.type,
    callback: () => {
      setContent('사용 가능한 이메일입니다..');
      setVisible(true);
      setFieldValue('checkedEmail', true);
    },
  });

  useActionSubscribe({
    type: checkDuplicateEmailFailure.type,
    callback: () => {
      setContent('이미 사용중인 이메일입니다.');
      setVisible(true);
      setFieldValue('checkedEmail', false);
    },
  });

  return {
    visible,
    content,
    setVisible,
    handleConfirm,
    handleClickCheckId,
    handleClickCheckEmail,
  };
};
