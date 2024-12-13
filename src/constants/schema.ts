import { boolean, object, ref, string } from 'yup';

export const registerSchema = object({
  userId: string().required('아이디를 입력해주세요.'),
  username: string().required('이름을 입력해주세요'),
  password: string()
    .required('비밀번호를 입력해주세요.')
    .matches(new RegExp(/^[a-zA-Z0-9]{8,20}$/), { message: '비밀번호는 영문 대소문자 + 숫자 조합 8~20글자 입니다.' }),
  passwordCheck: string()
    .required('비밀번호를 확인해주세요.')
    .oneOf([ref('password')], '비밀번호가 일치하지 않습니다.'),
  birth: string()
    .required('생일을 입력해주세요.')
    .matches(new RegExp(/^\d{4}-\d{2}-\d{2}$/), { message: '생일을 정확히 입력해주세요.' }),
  gender: string().matches(new RegExp(/(T|F)/)),
  tel: string()
    .required('전화번호를 입력해주세요.')
    .matches(/^0\d{9,10}$/, { message: '전화번호를 정확히 입력해주세요.' }),
  email: string()
    .required('이메일을 입력해주세요.')
    .matches(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, { message: '이메일을 정확히 입력해주세요.' }),
  checkedId: boolean().isTrue('아이디 중복체크를 해주세요.'),
  checkedEmail: boolean().isTrue('이메일 중복체크를 해주세요.'),
});

export const paymentSchema = object({
  agree: boolean().isTrue(),
});

export const modifySchema = object({
  password: string().matches(new RegExp(/^[a-zA-Z0-9]{8,20}$/), { message: '비밀번호는 영문 대소문자 + 숫자 조합 8~20글자 입니다.' }),
  passwordCheck: string().oneOf([ref('password')], '비밀번호가 일치하지 않습니다.'),
  email: string().matches(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, { message: '이메일을 정확히 입력해주세요.' }),
  checkedEmail: boolean().when('email', ([email], schema) => {
    if (email) {
      return schema.isTrue('이메일 중복체크를 해주세요.');
    }
    return schema;
  }),
});

export const findIdSchema = object({
  email: string()
    .required('이메일을 입력해주세요.')
    .matches(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, { message: '이메일을 정확히 입력해주세요.' }),
});

export const verifyIdentitySchema = object({
  id: string().required('아이디를 입력해주세요'),
  email: string()
    .required('이메일을 입력해주세요.')
    .matches(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, { message: '이메일을 정확히 입력해주세요.' }),
});

export const verifyOTPSchema = object({
  otp: string().required('인증번호를 입력해주세요.'),
});

export const createContactSchema = object({
  meetingId: string().required(),
  description: string().required(),
});
