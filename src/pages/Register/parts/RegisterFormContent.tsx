import { Form, useFormikContext } from 'formik';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import FullScreen from '@@components/FullScreen';
import SignTitle from '@@components/SignTitle';
import RegisterFormInputContent from '@@pages/Register/parts/RegisterFormInputContent';
import { RegisterForm } from '@@pages/Register/types';

const StyledRegisterFormContent = styled(FullScreen)`
  .body {
    padding: 40px 20px 60px;

    .register_form__radio_box {
      padding: 12px 0;
    }
  }
`;

function RegisterFormContent() {
  const { handleSubmit, isValid } = useFormikContext<RegisterForm>();

  return (
    <Form onSubmit={handleSubmit}>
      <StyledRegisterFormContent>
        <Flex.Vertical className='body'>
          <SignTitle title='회원정보'>회원가입을 위한 정보를 입력해주세요.</SignTitle>
          <RegisterFormInputContent />
        </Flex.Vertical>
        <FooterContainer gap={12}>
          <Button.Medium theme='outline' type='button'>
            취소
          </Button.Medium>
          <Button.Medium type='submit' disabled={!isValid}>
            회원가입
          </Button.Medium>
        </FooterContainer>
      </StyledRegisterFormContent>
    </Form>
  );
}

export default RegisterFormContent;
