import { EAZY_PAY_TYPE, PAYMENT_METHOD } from '@@pages/Payment/constants';
import { asType } from '@@types/common';

export interface PaymentForm {
  classId: number;
  ordererName: string;
  ordererPhone: string;
  paymentMethod: PaymentMethod;

  // 결제 수단이 카드일 때 쓸 정보들
  cardCompany?: string;
  installment?: number;

  // 결제 수단이 계좌이체일 때
  bankName?: string;
  depositor?: string;

  // 결제 수단이 간편결제일 때
  eazyPaymentType?: EazyPaymentType;
}

export type PaymentMethod = asType<typeof PAYMENT_METHOD>;

export type EazyPaymentType = asType<typeof EAZY_PAY_TYPE>;
