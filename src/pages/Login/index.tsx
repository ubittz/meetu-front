import { useState } from 'react';

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Modal from '@@components/Modal';
import { useModal } from '@@components/Modal/hooks';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { AppleLogoIcon, GoogleLogoIcon, KakaoLogoIcon, MainLogoIcon, NaverLogoIcon } from '@@pages/Login/icons';
import RegisterTermsBottomModal from '@@pages/Login/parts/\bRegisterTermsBottomModal';
import LoginFormContent from '@@pages/Login/parts/LoginFormContent';
import { LoginForm } from '@@pages/Login/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { loginFailure, loginRequest } from '@@stores/auth/reducer';

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
  const dispatch = useDispatch();
  const [bottomModalVisible, setBottomModalVisible] = useState(false);
  const { visible, content, setVisible, setContent } = useModal();

  const handleSubmit = (form: LoginForm) => {
    dispatch(loginRequest(form));
  };

  const handleClickRegister = () => {
    setBottomModalVisible(true);
  };

  const handleConfirm = () => {
    setVisible(false);
  };

  useActionSubscribe({
    type: loginFailure.type,
    callback: ({ payload }: ReturnType<typeof loginFailure>) => {
      setContent(payload);
      setVisible(true);
    },
  });

  return (
    <StyledLogin>
      <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
        {content}
      </Modal>
      <RegisterTermsBottomModal visible={bottomModalVisible} setVisible={setBottomModalVisible} />
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
            <StyledFindLink to={pathGenerator(PAGES.FIND_ACCOUNT, '/id')}>ID 찾기</StyledFindLink>
            <div className='login__divider' />
            <StyledFindLink to={pathGenerator(PAGES.FIND_ACCOUNT, '/password')}>Password 찾기</StyledFindLink>
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
