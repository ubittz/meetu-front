import { useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Typography from '@@components/Typography';
import ClassInfo from '@@pages/PurchaseHistory/parts/ClassInfo';
import OrdererInfo from '@@pages/PurchaseHistory/parts/OrdererInfo';
import PaymentInfo from '@@pages/PurchaseHistory/parts/PaymentInfo';
import PurchaseInfo from '@@pages/PurchaseHistory/parts/PurchaseInfo';

function PurchaseDetail() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <FullScreen>
      <Header onBack={handleClickBack}>
        <Typography.Main fontWeight={600}>결제내역 상세</Typography.Main>
      </Header>
      <Flex.Vertical className='body'>
        <ClassInfo />
        <PurchaseInfo />
        <OrdererInfo />
        <PaymentInfo />
      </Flex.Vertical>
    </FullScreen>
  );
}

export default PurchaseDetail;
