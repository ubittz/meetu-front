import { useState } from 'react';

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Modal from '@@components/Modal';
import { useModal } from '@@components/Modal/hooks';
import { modifySchema } from '@@constants/schema';
import ModifyMyPageFormContent from '@@pages/MyPage/parts/ModifyMyPageFormContent';
import { ModifyMyInfoForm } from '@@pages/MyPage/types';
import { sanitizeEditForm } from '@@pages/MyPage/utils';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useAppState } from '@@store/hooks';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { userEditFailure, userEditRequest, userEditSuccess } from '@@stores/auth/reducer';

function ModifyMyInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useAppState((state) => state.auth.me);

  const { visible, setVisible, content, setContent } = useModal();
  const [editType, setEditType] = useState<'success' | 'failure'>('success');

  const initialValues: ModifyMyInfoForm = {
    id: user?.id ?? '',
    checkedEmail: false,
  };

  const handleSubmit = (form: ModifyMyInfoForm) => {
    const data = sanitizeEditForm(form);
    dispatch(userEditRequest(data));
  };

  const handleConfirm = () => {
    if (editType === 'success') {
      navigate(pathGenerator(PAGES.MY_PAGE));
    } else {
      setVisible(false);
    }
  };

  useActionSubscribe({
    type: userEditSuccess.type,
    callback: () => {
      setContent('회원정보 수정이 완료되었습니다.');
      setVisible(true);
      setEditType('success');
    },
  });

  useActionSubscribe({
    type: userEditFailure.type,
    callback: ({ payload }: ReturnType<typeof userEditFailure>) => {
      setContent(payload ?? '회원정보 수정을 실패했습니다.');
      setVisible(true);
      setEditType('failure');
    },
  });

  if (!user) {
    return 'Loading...';
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={modifySchema}>
      <>
        <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
          {content}
        </Modal>
        <ModifyMyPageFormContent />
      </>
    </Formik>
  );
}

export default ModifyMyInfo;
