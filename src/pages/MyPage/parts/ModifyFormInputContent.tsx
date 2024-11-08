import { useFormikContext } from 'formik';

import Flex from '@@components/Flex';
import FormGroup from '@@components/FormGroup';
import InputFormGroup from '@@components/InputFormGroup';
import Radio from '@@components/Radio';

import { ModifyMyInfoForm } from '../types';

function ModifyFormInputContent() {
  const { getFieldProps } = useFormikContext<ModifyMyInfoForm>();

  return (
    <Flex.Vertical className='tw-pt-[30px] tw-px-[20px]' gap={30}>
      <InputFormGroup
        label='아이디'
        inputProps={{
          value: 'Junsu01002',
          readOnly: true,
        }}
      />
      <InputFormGroup
        label='이름'
        inputProps={{
          value: '김준수',
          readOnly: true,
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
          value: '1993-11-22',
          readOnly: true,
        }}
      />
      <FormGroup label='성별'>
        <Flex.Horizontal className='tw-pt-[8px] tw-pb-[12px]' gap={30}>
          <Radio readOnly checked={true}>
            남자
          </Radio>
          <Radio readOnly checked={false}>
            여자
          </Radio>
        </Flex.Horizontal>
      </FormGroup>
      <InputFormGroup
        label='연락처'
        inputProps={{
          value: '010-1234-1234',
          readOnly: true,
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
      <InputFormGroup
        label='소개글'
        inputProps={{
          ...getFieldProps('description'),
          placeholder: '소개글을 입력해주세요.',
        }}
      />
    </Flex.Vertical>
  );
}

export default ModifyFormInputContent;
