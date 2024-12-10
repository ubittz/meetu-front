import { Form, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import FullScreen from '@@components/FullScreen';
import InputFormGroup from '@@components/InputFormGroup';
import SignTitle from '@@components/SignTitle';
import { VerifyOTPForm } from '@@pages/FindAccount/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledFindIdFormContent = styled(FullScreen)`
  .body {
    padding: 40px 20px;
  }
`;

function VerifyOTPFormContent() {
  const navigate = useNavigate();

  const { getFieldProps, handleSubmit, errors, isValid } = useFormikContext<VerifyOTPForm>();

  const handleClickSkip = () => {
    navigate(pathGenerator(PAGES.LOGIN));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledFindIdFormContent>
        <Flex.Vertical className='body'>
          <SignTitle title='인증번호'>이메일로 전송된 인증번호를 입력해주세요.</SignTitle>
          <Flex.Vertical gap={8}>
            <InputFormGroup
              label='인증번호'
              inputProps={{
                ...getFieldProps('otp'),
                placeholder: '인증번호를 입력해주세요',
              }}
              errorMessage={errors.otp}
            />
          </Flex.Vertical>
        </Flex.Vertical>
        <FooterContainer gap={12}>
          <Button.Medium theme='outline' type='button' onClick={handleClickSkip}>
            다음에 변경
          </Button.Medium>
          <Button.Medium type='submit' disabled={!isValid}>
            인증하기
          </Button.Medium>
        </FooterContainer>
      </StyledFindIdFormContent>
    </Form>
  );
}

export default VerifyOTPFormContent;
