import { Bootpay } from '@bootpay/client-js';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Modal from '@@components/Modal';
import { useModal } from '@@components/Modal/hooks';
import { paymentSchema } from '@@constants/schema';
import PaymentFormContent from '@@pages/Payment/parts/PaymentFormContent';
import { PaymentForm } from '@@pages/Payment/types';
import { sanitizePaymentAddForm } from '@@pages/Payment/utils';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { BOOTPAY_FAIL_CODE } from '@@stores/payment/constants';
import { fetchPaymentConfigFailure, fetchPaymentConfigRequest, fetchPaymentConfigSuccess } from '@@stores/payment/reducer';
import { BootpayFailCode, BootpaySuccessCode } from '@@stores/payment/types';

function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const { visible, setVisible, content, setContent } = useModal();

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
          price: 100,
          // price: config.payFinalAmount,
          order_name: config.meetingName,
          order_id: config.payId,
          extra: {
            open_type: 'iframe',
            escrow: false,
          },
          user: {
            username: config.orderName,
            phone: config.orderTel,
          },
        });
        const code: BootpaySuccessCode = response.data;

        navigate(pathGenerator(PAGES.PAYMENT, '/complete'), {
          state: {
            code,
          },
        });
      } catch (error) {
        const newError = error as unknown as { message: string; event: BootpayFailCode };
        if (newError.event === BOOTPAY_FAIL_CODE.ERROR) {
          setContent(newError.message as string);
        }
      }
    },
  });

  useActionSubscribe({
    type: fetchPaymentConfigFailure.type,
    callback: () => {
      setContent('결제 정보를 가져오는데에 실패했습니다.');
      setVisible(true);
    },
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={paymentSchema}>
      <>
        <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
          {content}
        </Modal>
        <PaymentFormContent />
      </>
    </Formik>
  );
}

export default Payment;
