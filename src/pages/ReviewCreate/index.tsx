import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import Modal from '@@components/Modal';
import { useModal } from '@@components/Modal/hooks';
import { reviewCreateSchema } from '@@constants/schema';
import ReviewCreateFormContent from '@@pages/ReviewCreate/parts/ReviewCreateFormContent';
import { ReviewCreateForm } from '@@pages/ReviewCreate/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { addReviewFailure, addReviewRequest, addReviewSuccess } from '@@stores/meeting/reducer';

import { sanitizeReviewCreateForm } from './utils';

function ReviewCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { visible: successVisible, setVisible: setSuccessVisible } = useModal();
  const { visible, setVisible } = useModal();

  const handleSubmit = (form: ReviewCreateForm) => {
    dispatch(
      addReviewRequest({
        review: sanitizeReviewCreateForm(form),
        files: form.images,
      })
    );
  };

  const handleConfirmSuccess = () => {
    navigate(pathGenerator(PAGES.CLASS, `/${id}`));
  };

  const handleConfirm = () => {
    setVisible(false);
  };

  useActionSubscribe({
    type: addReviewSuccess.type,
    callback: () => {
      setSuccessVisible(true);
    },
  });

  useActionSubscribe({
    type: addReviewFailure.type,
    callback: () => {
      setVisible(true);
    },
  });

  if (!id) {
    return <Navigate to={pathGenerator(PAGES.HOME)} replace />;
  }

  const initialValues: ReviewCreateForm = {
    meetingId: id,
    score: 5,
    description: '',
    images: [],
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={reviewCreateSchema}>
      <>
        <Modal visible={successVisible} setVisible={setSuccessVisible} onConfirm={handleConfirmSuccess}>
          리뷰 등록을 완료했습니다.
        </Modal>
        <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
          리뷰 등록을 실패했습니다.
        </Modal>
        <ReviewCreateFormContent />
      </>
    </Formik>
  );
}

export default ReviewCreate;
