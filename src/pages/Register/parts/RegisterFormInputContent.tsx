import { Field, FieldProps, useFormikContext } from 'formik';

import Flex from '@@components/Flex';
import FormGroup from '@@components/FormGroup';
import InputFormGroup from '@@components/InputFormGroup';
import Modal from '@@components/Modal';
import Radio from '@@components/Radio';
import { GENDER } from '@@pages/Register/constants';
import { useRegisterForm } from '@@pages/Register/hooks';
import { RegisterForm } from '@@pages/Register/types';

function RegisterFormInputContent() {
  const { values, errors, getFieldProps, setFieldValue } = useFormikContext<RegisterForm>();

  const { visible, content, setVisible, handleConfirm, handleClickCheckId, handleClickCheckEmail } = useRegisterForm();

  console.log(values);

  return (
    <Flex.Vertical gap={30}>
      <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
        {content}
      </Modal>
      <InputFormGroup
        label='아이디'
        errorMessage={errors.userId || errors.checkedId}
        inputProps={{
          ...getFieldProps('userId'),
          placeholder: '아이디를 입력해주세요.',
          disabled: values.checkedId,
        }}
        buttonProps={{
          children: '중복체크',
          type: 'button',
          onClick: handleClickCheckId,
          disabled: values.checkedId,
        }}
      />
      <InputFormGroup
        label='이름'
        errorMessage={errors.username}
        inputProps={{
          ...getFieldProps('username'),
          placeholder: '이름을 입력해주세요.',
        }}
      />
      <Flex.Vertical gap={8}>
        <InputFormGroup
          label='비밀번호'
          errorMessage={errors.password}
          inputProps={{
            ...getFieldProps('password'),
            type: 'password',
            placeholder: '비밀번호를 입력해주세요.',
          }}
        />
        <InputFormGroup
          errorMessage={errors.passwordCheck}
          inputProps={{
            ...getFieldProps('passwordCheck'),
            type: 'password',
            placeholder: '비밀번호를 한번 더 입력해주세요.',
          }}
        />
      </Flex.Vertical>
      <InputFormGroup
        label='생년월일'
        errorMessage={errors.birth}
        inputProps={{
          ...getFieldProps('birth'),
          type: 'date',
          placeholder: '생년월일을 선택해주세요.',
          onChange: (e) => {
            setFieldValue('birth', e.target.value);
          },
        }}
      />
      <FormGroup label='성별'>
        <Flex.Horizontal gap={30} className='register_form__radio_box'>
          <Field type='radio' {...getFieldProps('gender')} value={GENDER.MALE} as={(props: FieldProps['field']) => <Radio {...props}>남자</Radio>} />
          <Field
            type='radio'
            {...getFieldProps('gender')}
            value={GENDER.FEMALE}
            as={(props: FieldProps['field']) => <Radio {...props}>여자</Radio>}
          />
        </Flex.Horizontal>
      </FormGroup>
      <InputFormGroup
        label='연락처'
        errorMessage={errors.tel}
        inputProps={{
          ...getFieldProps('tel'),
          placeholder: '전화번호를 입력해주세요.',
        }}
      />
      <InputFormGroup
        label='이메일'
        errorMessage={errors.email || errors.checkedEmail}
        inputProps={{
          ...getFieldProps('email'),
          placeholder: '이메일 주소를 입력해주세요.',
          disabled: values.checkedEmail,
        }}
        buttonProps={{
          children: '중복체크',
          type: 'button',
          onClick: handleClickCheckEmail,
          disabled: values.checkedEmail,
        }}
      />
    </Flex.Vertical>
  );
}

export default RegisterFormInputContent;
