import { PropsWithChildren, ReactNode } from 'react';

import { FormHelperText } from '@mui/material';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledPaymentSection = styled(Flex.Vertical)<{ $hiddenDivider: boolean }>`
  padding: 30px 20px;
  ${({ $hiddenDivider }) => !$hiddenDivider && `border-bottom: 8px solid ${COLORS.LINE_100};`}
`;

function PaymentSection({
  hiddenDivider = false,
  title,
  errorMessage,
  children,
}: PropsWithChildren<{ title: string; hiddenDivider?: boolean; errorMessage?: ReactNode }>) {
  return (
    <StyledPaymentSection $hiddenDivider={hiddenDivider}>
      <Flex.Horizontal gap={12}>
        <Typography.Main className='tw-mb-[12px]' fontWeight={700} fontSize='20px'>
          {title}
        </Typography.Main>
        {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
      </Flex.Horizontal>
      {children}
    </StyledPaymentSection>
  );
}

export default PaymentSection;
