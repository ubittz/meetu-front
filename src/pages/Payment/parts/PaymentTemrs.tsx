import styled from 'styled-components';

import CheckBox from '@@components/CheckBox';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { TermsRightArrowIcon } from '@@constants/icons';

const StyledPaymentTerms = styled(Flex.Vertical)`
  margin-top: 8px;
  .divider {
    height: 1px;
    width: 100%;
    background: ${COLORS.LINE_100};
  }
`;

function PaymentTerms() {
  return (
    <StyledPaymentTerms gap={20}>
      <Flex.Vertical gap={8}>
        <CheckBox>
          <Typography.Main fontWeight={700}>아래의 내용에 모두 동의합니다.</Typography.Main>
        </CheckBox>
      </Flex.Vertical>
      <div className='divider' />
      <Flex.Vertical gap={20}>
        <CheckBox>
          <Flex.Horizontal justifyContent='space-between' alignItems='center' flex='1'>
            <Typography.Third>개인정보 수집 및 이용동의(필수)</Typography.Third>
            <Flex.Horizontal gap={2} alignItems='center'>
              <Typography.Third fontSize='12px'>보기</Typography.Third>
              <TermsRightArrowIcon />
            </Flex.Horizontal>
          </Flex.Horizontal>
        </CheckBox>
        <CheckBox>
          <Flex.Horizontal justifyContent='space-between' alignItems='center' flex='1'>
            <Typography.Third>개인정보 제3자 제공 동의(필수)</Typography.Third>
            <Flex.Horizontal gap={2} alignItems='center'>
              <Typography.Third fontSize='12px'>보기</Typography.Third>
              <TermsRightArrowIcon />
            </Flex.Horizontal>
          </Flex.Horizontal>
        </CheckBox>
        <CheckBox>
          <Flex.Horizontal justifyContent='space-between' alignItems='center' flex='1'>
            <Typography.Third>이용 약관 동의(선택)</Typography.Third>
            <Flex.Horizontal gap={2} alignItems='center'>
              <Typography.Third fontSize='12px'>보기</Typography.Third>
              <TermsRightArrowIcon />
            </Flex.Horizontal>
          </Flex.Horizontal>
        </CheckBox>
      </Flex.Vertical>
    </StyledPaymentTerms>
  );
}

export default PaymentTerms;
