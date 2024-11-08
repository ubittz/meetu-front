import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';

const StyledGuideCard = styled(Flex.Vertical)`
  .guide_card__content {
    padding: 16px 12px;
    background: #fff6f1;

    & > p {
      font-size: 14px;
    }
  }
`;

function GuideCard({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <StyledGuideCard gap={12}>
      <Typography.Main fontSize='20px' fontWeight={700}>
        {title}
      </Typography.Main>
      <Flex.Vertical className='guide_card__content' gap={8}>
        {children}
      </Flex.Vertical>
    </StyledGuideCard>
  );
}

export default GuideCard;
