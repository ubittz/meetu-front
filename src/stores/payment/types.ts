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
  payId: string;
  orderName: string;
  orderTel: string;
  payFinalAmount: number;
}
