export const BOOTPAY_SUCCESS_CODE = {
  ISSUED: 'issued', // 가상계좌 발급
  DONE: 'done', // 결제 완료
} as const;

export const BOOTPAY_FAIL_CODE = {
  CANCEL: 'cancel',
  ERROR: 'error',
} as const;

export const SIMPLE_TYPE = {
  NAVER: 'NAVER',
  KAKAO: 'KAKAO',
} as const;

export const SIMPLE_TYPE_STRING = {
  [SIMPLE_TYPE.NAVER]: '네이버페이',
  [SIMPLE_TYPE.KAKAO]: '카카오페이',
};
