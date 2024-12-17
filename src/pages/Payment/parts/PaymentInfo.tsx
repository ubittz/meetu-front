import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { useMeetingDetail } from '@@stores/meeting/hooks';

const StyledPaymentInfo = styled(Flex.Vertical)`
  .payment_info__receipt {
    padding: 18px 16px;
    background: #fff6f1;
  }
`;

function PaymentInfo() {
  const { id } = useParams();
  const { data } = useMeetingDetail(id ?? '');

  if (!data) return;

  return (
    <StyledPaymentInfo gap={20}>
      <Flex.Vertical gap={8} className='payment_info__receipt'>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>주문금액</Typography.Sub>
          <Typography.Sub fontSize='14px'>{data.cost.toLocaleString()} 원</Typography.Sub>
        </Flex.Horizontal>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>주문할인</Typography.Sub>
          <Typography.Sub fontSize='14px'>0 원</Typography.Sub>
        </Flex.Horizontal>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>쿠폰</Typography.Sub>
          <Typography.Sub fontSize='14px'>0 원</Typography.Sub>
        </Flex.Horizontal>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>포인트</Typography.Sub>
          <Typography.Sub fontSize='14px'>0 원</Typography.Sub>
        </Flex.Horizontal>
      </Flex.Vertical>
      <Flex.Horizontal alignItems='center' justifyContent='space-between'>
        <Typography.Main fontSize='14px' fontWeight={700}>
          최종결제금액
        </Typography.Main>
        <Typography.Point fontSize='20px' fontWeight={700}>
          {data.cost.toLocaleString()}원
        </Typography.Point>
      </Flex.Horizontal>
    </StyledPaymentInfo>
  );
}

export default PaymentInfo;
