import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledPurchaseDetailSection = styled(Flex.Vertical)`
  padding: 30px 20px;

  &:not(:last-child) {
    border-bottom: 6px solid ${COLORS.LINE_100};
  }

  .detail_section__title {
    padding-bottom: 12px;
    margin-bottom: 17px;
    border-bottom: 1px solid ${COLORS.LINE_100};
  }
`;

function PurchaseDetailSection({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <StyledPurchaseDetailSection>
      <Flex.Horizontal className='detail_section__title'>
        <Typography.Main fontSize='20px' fontWeight={700}>
          {title}
        </Typography.Main>
      </Flex.Horizontal>
      {children}
    </StyledPurchaseDetailSection>
  );
}

export default PurchaseDetailSection;
