import { Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';

import { paymentSchema } from '@@constants/schema';
import PaymentFormContent from '@@pages/Payment/parts/PaymentFormContent';
import { PaymentForm } from '@@pages/Payment/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function Payment() {
  const navigate = useNavigate();

  const { id } = useParams();

  const initialValues: PaymentForm = {
    classId: +(id ?? 0),
    ordererName: '',
    ordererPhone: '',
    agree: false,
  };

  const handleSubmit = (form: PaymentForm) => {
    console.log(form);

    navigate(pathGenerator(PAGES.PAYMENT, '/complete'));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={paymentSchema}>
      <PaymentFormContent />
    </Formik>
  );
}

export default Payment;
