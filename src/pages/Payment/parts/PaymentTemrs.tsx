import { useState } from 'react';

import styled from 'styled-components';

import CheckBox from '@@components/CheckBox';
import Flex from '@@components/Flex';
import TermsBottomModal from '@@components/TermsBottomModal';
import { TERMS_TYPE } from '@@components/TermsBottomModal/constants';
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
  const [visible, setVisible] = useState(false);

  const handleClickShowTerms = () => {
    setVisible(true);
  };

  return (
    <StyledPaymentTerms gap={20}>
      <TermsBottomModal visible={visible} setVisible={setVisible} type={TERMS_TYPE.TRANSACTION} />
      <Flex.Vertical gap={8}>
        <CheckBox>
          <Typography.Main fontWeight={700}>아래의 내용에 모두 동의합니다.</Typography.Main>
        </CheckBox>
      </Flex.Vertical>
      <div className='divider' />
      <Flex.Vertical gap={20}>
        <Flex.Horizontal justifyContent='space-between' alignItems='center' flex='1'>
          <CheckBox>
            <Typography.Third>전자금융거래 약관 동의(필수)</Typography.Third>
          </CheckBox>
          <Flex.Horizontal gap={2} alignItems='center'>
            <Typography.Third fontSize='12px' onClick={handleClickShowTerms}>
              보기
            </Typography.Third>
            <TermsRightArrowIcon />
          </Flex.Horizontal>
        </Flex.Horizontal>
      </Flex.Vertical>
    </StyledPaymentTerms>
  );
}

export default PaymentTerms;
