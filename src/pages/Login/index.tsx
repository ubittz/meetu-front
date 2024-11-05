import { useState } from 'react';

import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { AppleLogoIcon, GoogleLogoIcon, KakaoLogoIcon, MainLogoIcon, NaverLogoIcon } from '@@pages/Login/icons';
import LoginFormContent from '@@pages/Login/parts/LoginFormContent';
import { LoginForm } from '@@pages/Login/types';

import RegisterTermsBottomModal from './parts/\bRegisterTermsBottomModal';

const StyledLogin = styled(Flex.Vertical)`
  height: 100vh;
  padding: 0 20px;
  padding-top: 80px;

  .login__header {
    margin-bottom: 50px;
  }

  .login__divider {
    width: 1px;
    background: ${COLORS.LINE_100};
  }
`;

const StyledFindLink = styled(Link)`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  color: ${COLORS.TEXT_400};
  font-size: 14px;
  line-height: 1.3em;
`;

const StyledRegisterButton = styled.span`
  font-size: 14px;
  line-height: 1.3em;
  text-decoration: underline;
  color: ${COLORS.MAIN};
`;

const initialValues: LoginForm = {
  id: '',
  password: '',
};

function Login() {
  const [visible, setVisible] = useState(false);

  const handleSubmit = (form: LoginForm) => {
    // 로그인 로직 들어가야함
    console.log(form);
  };

  const handleClickRegister = () => {
    setVisible(true);
  };

  return (
    <StyledLogin>
      <RegisterTermsBottomModal visible={visible} setVisible={setVisible} />
      <Flex.Vertical className='login__header' alignItems='center'>
        <MainLogoIcon />
        <Typography.Sub>밋유에 오신 것을 환영합니다!</Typography.Sub>
      </Flex.Vertical>
      <Flex.Vertical gap={20}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <LoginFormContent />
        </Formik>
        <Flex.Horizontal justifyContent='space-between'>
          <Flex.Horizontal gap={12} alignItems='stretch'>
            <StyledFindLink to={''}>ID 찾기</StyledFindLink>
            <div className='login__divider' />
            <StyledFindLink to={''}>Password 찾기</StyledFindLink>
          </Flex.Horizontal>
          <StyledRegisterButton onClick={handleClickRegister}>회원가입</StyledRegisterButton>
        </Flex.Horizontal>
      </Flex.Vertical>
      <Flex.Horizontal alignItems='center' justifyContent='center' flex={1}>
        <Flex.Horizontal justifyContent='center' gap={20}>
          <NaverLogoIcon />
          <KakaoLogoIcon />
          <GoogleLogoIcon />
          <AppleLogoIcon />
        </Flex.Horizontal>
      </Flex.Horizontal>
    </StyledLogin>
  );
}

export default Login;
