import { Field, FieldProps, useFormikContext } from 'formik';

import Flex from '@@components/Flex';
import FormGroup from '@@components/FormGroup';
import InputFormGroup from '@@components/InputFormGroup';
import Radio from '@@components/Radio';
import { GENDER } from '@@pages/Register/constants';
import { RegisterForm } from '@@pages/Register/types';

function RegisterFormInputContent() {
  const { getFieldProps } = useFormikContext<RegisterForm>();

  return (
    <Flex.Vertical gap={30}>
      <InputFormGroup
        label='아이디'
        inputProps={{
          ...getFieldProps('id'),
          placeholder: '아이디를 입력해주세요.',
        }}
        buttonProps={{
          children: '인증하기',
          type: 'button',
        }}
      />
      <InputFormGroup
        label='이름'
        inputProps={{
          ...getFieldProps('name'),
          placeholder: '이름을 입력해주세요.',
        }}
      />
      <Flex.Vertical gap={8}>
        <InputFormGroup
          label='비밀번호'
          inputProps={{
            ...getFieldProps('password'),
            placeholder: '비밀번호를 입력해주세요.',
          }}
        />
        <InputFormGroup
          inputProps={{
            ...getFieldProps('passwordCheck'),
            placeholder: '비밀번호를 한번 더 입력해주세요.',
          }}
        />
      </Flex.Vertical>
      <InputFormGroup
        label='생년월일'
        inputProps={{
          ...getFieldProps('birth'),
          placeholder: '생년월일을 선택해주세요.',
        }}
      />
      <FormGroup label='성별'>
        <Flex.Horizontal gap={30} className='register_form__radio_box'>
          <Field
            type='radio'
            {...getFieldProps('purchaseType')}
            value={GENDER.MALE}
            as={(props: FieldProps['field']) => <Radio {...props}>남자</Radio>}
          />
          <Field
            type='radio'
            {...getFieldProps('purchaseType')}
            value={GENDER.FEMALE}
            as={(props: FieldProps['field']) => <Radio {...props}>여자</Radio>}
          />
        </Flex.Horizontal>
      </FormGroup>
      <InputFormGroup
        label='연락처'
        inputProps={{
          ...getFieldProps('phone'),
          placeholder: '전화번호를 입력해주세요.',
        }}
      />
      <InputFormGroup
        label='이메일'
        inputProps={{
          ...getFieldProps('email'),
          placeholder: '이메일 주소를 입력해주세요.',
        }}
        buttonProps={{
          children: '중복체크',
          type: 'button',
        }}
      />
    </Flex.Vertical>
  );
}

export default RegisterFormInputContent;
