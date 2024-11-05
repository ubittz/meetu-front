import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';

const StyledSignTitle = styled(Flex.Vertical)`
  margin-bottom: 40px;
`;

function SignTitle({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <StyledSignTitle gap={4}>
      <Typography.Main fontSize='24px' fontWeight={700}>
        {title}
      </Typography.Main>
      <Typography.Sub fontSize='14px'>{children}</Typography.Sub>
    </StyledSignTitle>
  );
}

export default SignTitle;
