import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { usePaymentDetail } from '@@pages/PurchaseHistory/hooks';
import PurchaseDetailSection from '@@pages/PurchaseHistory/parts/PurchaseDetailSection';

function OrdererInfo() {
  const { id } = useParams();

  const { data } = usePaymentDetail(id ?? '');

  if (!data) return null;

  const { customer } = data;

  return (
    <PurchaseDetailSection title='주문자 정보'>
      <Flex.Vertical gap={12}>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>이름</Typography.Sub>
          <Typography.Sub fontSize='14px'>{customer.name}</Typography.Sub>
        </Flex.Horizontal>
        {customer.birth && (
          <Flex.Horizontal justifyContent='space-between'>
            <Typography.Sub fontSize='14px'>생년월일</Typography.Sub>
            <Typography.Sub fontSize='14px'>{format(customer.birth, 'yyyy-MM-dd')}</Typography.Sub>
          </Flex.Horizontal>
        )}
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>연락처</Typography.Sub>
          <Typography.Sub fontSize='14px'>{customer.tel}</Typography.Sub>
        </Flex.Horizontal>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>이메일</Typography.Sub>
          <Typography.Sub fontSize='14px'>testname@gmail.com</Typography.Sub>
        </Flex.Horizontal>
      </Flex.Vertical>
    </PurchaseDetailSection>
  );
}

export default OrdererInfo;
