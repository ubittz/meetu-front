import { useEffect, useState } from 'react';

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FullLoading from '@@components/FullLoading';
import Modal from '@@components/Modal';
import { useModal } from '@@components/Modal/hooks';
import { modifySchema } from '@@constants/schema';
import { useRequestFlag } from '@@hooks/useRequestFlag';
import ModifyMyPageFormContent from '@@pages/MyPage/parts/ModifyMyPageFormContent';
import { ModifyMyInfoForm } from '@@pages/MyPage/types';
import { sanitizeEditForm } from '@@pages/MyPage/utils';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useAppState } from '@@store/hooks';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import {
  changeProfileFailure,
  changeProfileRequest,
  changeProfileSuccess,
  fetchMeRequest,
  userEditFailure,
  userEditRequest,
  userEditSuccess,
} from '@@stores/auth/reducer';

type RequestStatus = 'idle' | 'failure' | 'success';

function ModifyMyInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useAppState((state) => state.auth.me);

  const [requestStatus, setRequestStatus] = useState<{ image: RequestStatus; profile: RequestStatus }>({
    image: 'idle',
    profile: 'idle',
  });
  const [editType, setEditType] = useState<'success' | 'failure'>('success');

  const { visible, setVisible, content, setContent } = useModal();

  const profileLoading = useRequestFlag(userEditRequest.type);
  const imageLoading = useRequestFlag(changeProfileRequest.type);

  const handleSubmit = (form: ModifyMyInfoForm) => {
    const data = sanitizeEditForm(form);

    if (form.image && typeof form.image !== 'string') {
      dispatch(changeProfileRequest(form.image));
    } else {
      setRequestStatus({ ...requestStatus, image: 'success' });
    }

    dispatch(userEditRequest(data));
  };

  const handleConfirm = () => {
    if (editType === 'success') {
      dispatch(fetchMeRequest());
      navigate(pathGenerator(PAGES.MY_PAGE));
    } else {
      setVisible(false);
    }
  };

  useActionSubscribe({
    type: userEditSuccess.type,
    callback: () => {
      setRequestStatus({ ...requestStatus, profile: 'success' });
    },
  });

  useActionSubscribe({
    type: userEditFailure.type,
    callback: () => {
      setRequestStatus({ ...requestStatus, profile: 'failure' });
      setVisible(true);
      setEditType('failure');
    },
  });

  useActionSubscribe({
    type: changeProfileSuccess.type,
    callback: () => {
      setRequestStatus({ ...requestStatus, image: 'success' });
    },
  });

  useActionSubscribe({
    type: changeProfileFailure.type,
    callback: () => {
      setRequestStatus({ ...requestStatus, image: 'failure' });
    },
  });

  useEffect(() => {
    const values = Object.values(requestStatus);

    if (values.includes('idle')) {
      return;
    } else if (values.includes('failure')) {
      setEditType('failure');
      setContent('회원정보 수정을 실패했습니다.');
    } else {
      setEditType('success');
      setContent('회원정보 수정을 완료했습니다.');
    }

    setVisible(true);
  }, [requestStatus, setContent, setVisible]);

  if (!user) {
    return 'Loading...';
  }

  const initialValues: ModifyMyInfoForm = {
    id: user.id ?? '',
    checkedEmail: false,
    image: user.imageUrl,
    description: user.userDescription,
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={modifySchema}>
      <>
        <FullLoading visible={profileLoading || imageLoading} />
        <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
          {content}
        </Modal>
        <ModifyMyPageFormContent />
      </>
    </Formik>
  );
}

export default ModifyMyInfo;
