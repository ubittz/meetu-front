import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { KakaoPayIcon, KakaoPayTextIcon } from '@@pages/Payment/icons';

const StyledKakaoPay = styled(Flex.Vertical)`
  flex: 0 0 auto;

  width: 262px;
  height: 120px;
  border-radius: 8px;
  border: 1px solid #f8e143;
  background: #fffdf0;

  padding: 16px 20px;
`;

function KakaoPay() {
  return (
    <StyledKakaoPay justifyContent='space-between'>
      <Flex.Horizontal gap={4} alignItems='center'>
        <KakaoPayIcon />
        <KakaoPayTextIcon />
      </Flex.Horizontal>
      <Typography.Main color='#301D1D' fontSize='14px' fontWeight={700}>
        카카오페이로 결제하기
      </Typography.Main>
    </StyledKakaoPay>
  );
}

export default KakaoPay;
