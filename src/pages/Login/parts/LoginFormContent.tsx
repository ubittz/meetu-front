import { Form, useFormikContext } from 'formik';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import InputFormGroup from '@@components/InputFormGroup';

function LoginFormContent() {
  const { getFieldProps, handleSubmit } = useFormikContext();

  return (
    <Form onSubmit={handleSubmit}>
      <Flex.Vertical gap={30}>
        <Flex.Vertical gap={10}>
          <InputFormGroup
            inputProps={{
              ...getFieldProps('id'),
              placeholder: '아이디',
            }}
          />
          <InputFormGroup
            inputProps={{
              ...getFieldProps('password'),
              placeholder: '비밀번호',
              type: 'password',
            }}
          />
        </Flex.Vertical>
        <Button.ExtraLarge type='submit'>로그인</Button.ExtraLarge>
      </Flex.Vertical>
    </Form>
  );
}

export default LoginFormContent;
