import { useNavigate } from 'react-router-dom';

import Button from '@@components/Button';
import FooterContainer from '@@components/FooterContainer';
import NotifyScreen from '@@components/NotifyScreen';
import Typography from '@@components/Typography';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function FindIdComplete() {
  const navigate = useNavigate();

  const handleClickFindPassword = () => {
    navigate(pathGenerator(PAGES.FIND_ACCOUNT, '/password'));
  };

  const handleClickLogin = () => {
    navigate(pathGenerator(PAGES.LOGIN));
  };

  return (
    <NotifyScreen
      title={
        <>
          회원님의 아이디는
          <br />
          <Typography.Point as='span' fontSize='inherit' fontWeight='inherit'>
            ABC***1234
          </Typography.Point>
          입니다.
        </>
      }
      footerContent={
        <FooterContainer gap={12}>
          <Button.Medium theme='outline' onClick={handleClickFindPassword}>
            비밀번호 찾기
          </Button.Medium>
          <Button.Medium onClick={handleClickLogin}>로그인</Button.Medium>
        </FooterContainer>
      }
    >
      밋유를 통해 새로운 만남과 소소한 행복을
      <br />
      찾아보세요.
    </NotifyScreen>
  );
}

export default FindIdComplete;
