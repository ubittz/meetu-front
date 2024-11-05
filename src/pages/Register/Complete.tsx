import { useNavigate } from 'react-router-dom';

import Button from '@@components/Button';
import FooterContainer from '@@components/FooterContainer';
import NotifyScreen from '@@components/NotifyScreen';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function RegisterComplete() {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate(pathGenerator(PAGES.LOGIN));
  };

  return (
    <NotifyScreen
      title={
        <>
          회원가입을
          <br />
          축하합니다!
        </>
      }
      caption='로그인 후 서비스를 이용해주세요.'
      footerContent={
        <FooterContainer>
          <Button.Medium onClick={handleClickLogin}>로그인</Button.Medium>
        </FooterContainer>
      }
    >
      <Typography.Point as='span' fontSize='inherit' fontWeight={700} color={COLORS.MAIN}>
        홍길동
      </Typography.Point>
      님의 회원가입을 축하합니다. <br />
      알차고 실속있는 서비스로 찾아뵙겠습니다.
    </NotifyScreen>
  );
}

export default RegisterComplete;
