import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import PurchaseDetailSection from '@@pages/PurchaseHistory/parts/PurchaseDetailSection';

import { usePaymentDetail } from '../hooks';

const StyledBetween = styled(Flex.Horizontal)`
  justify-content: space-between;
`;

const StyledSection = styled(Flex.Vertical)`
  padding: 16px;
  background: #fff6f1;
`;

function PurchaseInfo() {
  const { id } = useParams();

  const { data } = usePaymentDetail(id ?? '');

  if (!data) return null;

  const { amount } = data;

  return (
    <PurchaseDetailSection title='결제 정보'>
      <Flex.Vertical gap={12}>
        <StyledBetween>
          <Typography.Sub fontSize='14px'>정상가</Typography.Sub>
          <Typography.Sub fontSize='14px'>{amount.orderAmount.toLocaleString()}원</Typography.Sub>
        </StyledBetween>
        <Flex.Vertical gap={8}>
          {/* <StyledBetween>
            <Typography.Sub fontSize='14px'>부가 내역</Typography.Sub>
            <Typography.Sub fontSize='14px'>{amount.orderLatestAmount}원</Typography.Sub>
          </StyledBetween> */}
          <StyledSection>
            <StyledBetween>
              <Typography.Sub fontSize='14px'>상품 할인 금액</Typography.Sub>
              <Typography.Sub fontSize='14px'>{amount.orderSale.toLocaleString()}원</Typography.Sub>
            </StyledBetween>
            <StyledBetween>
              <Typography.Sub fontSize='14px'>쿠폰적용 할인 금액</Typography.Sub>
              <Typography.Sub fontSize='14px'>{amount.orderCoupon.toLocaleString()}원</Typography.Sub>
            </StyledBetween>
            <StyledBetween>
              <Typography.Sub fontSize='14px'>포인트 사용</Typography.Sub>
              <Typography.Sub fontSize='14px'>{amount.orderPoint.toLocaleString()}원</Typography.Sub>
            </StyledBetween>
            <StyledBetween>
              <Typography.Sub fontSize='14px'>적립 포인트</Typography.Sub>
              <Typography.Sub fontSize='14px'>0원</Typography.Sub>
            </StyledBetween>
          </StyledSection>
        </Flex.Vertical>
        <Flex.Vertical gap={8}>
          <StyledBetween>
            <Typography.Sub fontSize='14px'>결제수단</Typography.Sub>
          </StyledBetween>
          <StyledSection>
            <StyledBetween>
              <Typography.Sub fontSize='14px'>신용카드</Typography.Sub>
              <Typography.Sub fontSize='14px'>KB 국민카드 결제</Typography.Sub>
            </StyledBetween>
            <Flex.Horizontal justifyContent='flex-end'>
              <Typography.Sub fontSize='14px'>5363-****-****-4057 / 일시불</Typography.Sub>
            </Flex.Horizontal>
          </StyledSection>
        </Flex.Vertical>
        <StyledBetween alignItems='center'>
          <Typography.Main fontSize='14px' fontWeight={700}>
            최종결제금액
          </Typography.Main>
          <Typography.Point fontSize='20px' fontWeight={700}>
            {amount.orderLatestAmount.toLocaleString()}원
          </Typography.Point>
        </StyledBetween>
      </Flex.Vertical>
    </PurchaseDetailSection>
  );
}

export default PurchaseInfo;
