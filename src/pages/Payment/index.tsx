import { Bootpay } from '@bootpay/client-js';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Modal from '@@components/Modal';
import { useModal } from '@@components/Modal/hooks';
import { paymentSchema } from '@@constants/schema';
import PaymentFormContent from '@@pages/Payment/parts/PaymentFormContent';
import { PaymentForm } from '@@pages/Payment/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { fetchPaymentConfigFailure, fetchPaymentConfigRequest, fetchPaymentConfigSuccess } from '@@stores/payment/reducer';

import { sanitizePaymentAddForm } from './utils';

function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const { visible, setVisible } = useModal();

  const initialValues: PaymentForm = {
    meetingId: id ?? '',
    customerName: '',
    customerTel: '',
    agreeFinancial: false,
  };

  const handleSubmit = async (form: PaymentForm) => {
    dispatch(fetchPaymentConfigRequest(sanitizePaymentAddForm(form)));
  };

  const handleConfirm = () => {
    setVisible(false);
  };

  useActionSubscribe({
    type: fetchPaymentConfigSuccess.type,
    callback: async ({ payload: { applicationId, config } }: ReturnType<typeof fetchPaymentConfigSuccess>) => {
      try {
        const response = await Bootpay.requestPayment({
          application_id: applicationId,
          price: config.payFinalAmount,
          order_name: '테스트 결제',
          order_id: 'TEST_ORDER_1',
          extra: {
            open_type: 'iframe',
          },
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  });

  useActionSubscribe({
    type: fetchPaymentConfigFailure.type,
    callback: () => {
      setVisible(true);
    },
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={paymentSchema}>
      <>
        <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
          결제 정보를 가져오는데에 실패했습니다.
        </Modal>
        <PaymentFormContent />
      </>
    </Formik>
  );
}

export default Payment;
