import { useState } from 'react';

import { Form, useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import InputFormGroup from '@@components/InputFormGroup';
import Modal from '@@components/Modal';
import { useModal } from '@@components/Modal/hooks';
import SignTitle from '@@components/SignTitle';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { verifyOTPFailure, verifyOTPRequest, verifyOTPSuccess } from '@@stores/auth/reducer';

import { VerifyIdentityForm } from '../types';

const StyledFindPasswordFormContent = styled(FullScreen)`
  .body {
    padding: 40px 20px;
  }
`;

function FindPasswordFormContent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isVerify, setIsVerify] = useState<boolean>(false);
  const { values, getFieldProps, handleSubmit, errors, isValid } = useFormikContext<VerifyIdentityForm>();

  const { visible, setVisible, content, setContent } = useModal();

  const handleClickBack = () => {
    navigate(-1);
  };

  const handleClickOTP = () => {
    dispatch(verifyOTPRequest(values.email));
  };

  const handleConfirm = () => {
    setVisible(false);
  };

  useActionSubscribe({
    type: verifyOTPSuccess.type,
    callback: () => {
      setContent('인증번호가 발송되었습니다.');
      setVisible(true);
      setIsVerify(true);
    },
  });

  useActionSubscribe({
    type: verifyOTPFailure.type,
    callback: () => {
      setContent(
        <>
          가입하지 않은 이메일이거나
          <br />
          잘못된 이메일입니다.
        </>
      );
      setVisible(true);
      setIsVerify(false);
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
        {content}
      </Modal>
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
              buttonProps={{
                children: '인증하기',
                type: 'button',
                disabled: !!errors.email,
                onClick: handleClickOTP,
              }}
              errorMessage={errors.email}
            />
            {isVerify && (
              <InputFormGroup
                label='인증번호'
                inputProps={{
                  ...getFieldProps('authNumber'),
                  placeholder: '인증번호를 입력해주세요.',
                }}
                errorMessage={errors.authNumber}
              />
            )}
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
