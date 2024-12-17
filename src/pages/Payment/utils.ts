import { PaymentAddDTO } from '@@stores/payment/types';

import { PaymentForm } from './types';

export const sanitizePaymentAddForm = (form: PaymentForm): PaymentAddDTO => ({
  meetingId: form.meetingId,
  customer: {
    name: form.customerName,
    tel: form.customerTel,
  },
  terms: {
    agreeFinancial: form.agreeFinancial,
  },
});
