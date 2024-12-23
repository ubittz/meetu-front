import { BOOTPAY_FAIL_CODE, BOOTPAY_SUCCESS_CODE, SIMPLE_TYPE } from '@@stores/payment/constants';
import { asType } from '@@types/common';

export interface PaymentAddDTO {
  meetingId: string;
  customer: Customer;
  terms: Terms;
}

export interface Customer {
  name: string;
  tel: string;
  birth?: Date;
  email?: string;
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

export interface PaymentListResponse {
  id: string;
  meetingId: string;
  meetingName: string;
  createDatetime: Date;
  latestCost: number;
}

export interface PaymentDetailResponse {
  id: string;
  createDatetime: Date;
  meetingId: string;
  meetingName: string;
  customer: Customer;
  amount: Amount;
  card?: Card;
  transfer?: Transfer;
  simple?: Simple;
  pgData?: PgData;
}

export interface Amount {
  orderAmount: number;
  orderSale: number;
  orderCoupon: number;
  orderPoint: number;
  orderLatestAmount: number;
}

export interface Card {
  companyName?: string;
  no?: string;
  plan?: number; // 할부 개월 0이면 일시불
}

export interface Transfer {
  bankName?: string;
  accountNo?: string;
  depositNmae?: string;
}

export type SimpleType = asType<typeof SIMPLE_TYPE>;

export interface Simple {
  type: SimpleType;
}

export interface PgData {
  method: string;
  methodNo: string;
  approveNo: string;
  price: number;
  purchasedAt: Date;
}
