import { Form, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import InputFormGroup from '@@components/InputFormGroup';
import SignTitle from '@@components/SignTitle';

import { VerifyIdentityForm } from '../types';

const StyledFindPasswordFormContent = styled(FullScreen)`
  .body {
    padding: 40px 20px;
  }
`;

function FindPasswordFormContent() {
  const navigate = useNavigate();

  const { getFieldProps, handleSubmit, errors, isValid } = useFormikContext<VerifyIdentityForm>();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledFindPasswordFormContent>
        <Header onBack={handleClickBack}></Header>
        <Flex.Vertical className='body'>
          <SignTitle title='비밀번호 찾기'>
            회원정보에 등록된 이메일로 비밀번호를 찾을 수 있습니다.
            <br />
            가입 시 입력한 이메일을 인증해주세요.
          </SignTitle>
          <Flex.Vertical gap={30}>
            <InputFormGroup
              label='아이디'
              inputProps={{
                ...getFieldProps('id'),
                placeholder: '아이디를 입력해주세요',
              }}
              errorMessage={errors.id}
            />
            <InputFormGroup
              label='이메일'
              inputProps={{
                ...getFieldProps('email'),
                placeholder: '이메일 주소를 입력해주세요',
              }}
              errorMessage={errors.email}
            />
          </Flex.Vertical>
        </Flex.Vertical>
        <FooterContainer>
          <Button.Medium type='submit' disabled={!isValid}>
            인증번호 전송
          </Button.Medium>
        </FooterContainer>
      </StyledFindPasswordFormContent>
    </Form>
  );
}

export default FindPasswordFormContent;
