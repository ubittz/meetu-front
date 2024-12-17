import { asType } from '@@types/common';

import { BOOTPAY_FAIL_CODE, BOOTPAY_SUCCESS_CODE } from './constants';

export interface PaymentAddDTO {
  meetingId: string;
  customer: Customer;
  terms: Terms;
}

export interface Customer {
  name: string;
  tel: string;
}

export interface Terms {
  agreeFinancial: boolean;
}

export interface PaymentAddResponse {
  meetingName: string;
  payId: string;
  orderName: string;
  orderTel: string;
  payFinalAmount: number;
}

export type BootpaySuccessCode = asType<typeof BOOTPAY_SUCCESS_CODE>;

export type BootpayFailCode = asType<typeof BOOTPAY_FAIL_CODE>;
