import { Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';

import { PAYMENT_METHOD } from '@@pages/Payment/constants';
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
    paymentMethod: PAYMENT_METHOD.CARD,
  };

  const handleSubmit = (form: PaymentForm) => {
    console.log(form);

    navigate(pathGenerator(PAGES.PAYMENT, '/complete'));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <PaymentFormContent />
    </Formik>
  );
}

export default Payment;
