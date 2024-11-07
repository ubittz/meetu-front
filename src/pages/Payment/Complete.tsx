import { useNavigate } from 'react-router-dom';

import Button from '@@components/Button';
import FooterContainer from '@@components/FooterContainer';
import NotifyScreen from '@@components/NotifyScreen';
import Typography from '@@components/Typography';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function PaymentComplete() {
  const navigate = useNavigate();

  const handleClickHistory = () => {};

  const handleClickMain = () => {
    navigate(pathGenerator(PAGES.HOME));
  };

  return (
    <NotifyScreen
      title={
        <>
          결제가
          <br />
          완료되었습니다.
        </>
      }
      footerContent={
        <FooterContainer>
          <Button.Medium theme='outline' onClick={handleClickHistory}>
            결제내역 보러가기
          </Button.Medium>
          <Button.Medium onClick={handleClickMain}>메인으로</Button.Medium>
        </FooterContainer>
      }
    >
      <Typography.Point as='span' fontSize='inherit' fontWeight={700}>
        밋유
      </Typography.Point>
      와 함께 새로운 만남에서
      <br />
      소소한 행복을 찾아보세요.
    </NotifyScreen>
  );
}

export default PaymentComplete;
