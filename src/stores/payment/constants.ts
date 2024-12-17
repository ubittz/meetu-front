export const BOOTPAY_SUCCESS_CODE = {
  ISSUED: 'issued', // 가상계좌 발급
  DONE: 'done', // 결제 완료
} as const;

export const BOOTPAY_FAIL_CODE = {
  CANCEL: 'cancel',
  ERROR: 'error',
} as const;
