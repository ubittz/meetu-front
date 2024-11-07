import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { NaverPayIcon, NaverPayTextIcon } from '@@pages/Payment/icons';

const StyledNaverPay = styled(Flex.Vertical)`
  flex: 0 0 auto;
  width: 262px;
  height: 120px;
  border-radius: 8px;
  border: 1px solid ${COLORS.LINE_100};
  background: #fff;

  padding: 16px 20px;
`;

function NaverPay() {
  return (
    <StyledNaverPay justifyContent='space-between'>
      <Flex.Horizontal gap={4} alignItems='center'>
        <NaverPayIcon />
        <NaverPayTextIcon />
      </Flex.Horizontal>
      <Typography.Main color='#03C75A' fontSize='14px' fontWeight={700}>
        네이버페이로 결제하기
      </Typography.Main>
    </StyledNaverPay>
  );
}

export default NaverPay;
