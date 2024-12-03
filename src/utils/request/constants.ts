export const API_ENDPOINT = import.meta.env.VITE_APP_API_ENDPOINT;

export const ERROR_CODE = {
  USER_NOTFOUND: 'User_NotFound',
  PASSWORD_MISMATCH: 'Password_Mismatch',
  LOGIN_PARAM_EMPTY: 'Login_Param_Empty',
} as const;

export const ERROR_CODE_STRING = {
  [ERROR_CODE.USER_NOTFOUND]: '아이디가 존재하지 않습니다.',
  [ERROR_CODE.PASSWORD_MISMATCH]: '비밀번호가 틀렸습니다.',
  [ERROR_CODE.LOGIN_PARAM_EMPTY]: '아이디와 비밀번호를 확인해주세요.',
} as const;
