import { PropsWithChildren, ReactNode } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Typography from '@@components/Typography';

import { BackgroundLogoIcon } from './icons';

const StyledNotifyScreen = styled(FullScreen)`
  .body {
    position: relative;

    padding: 42px 20px 0;

    .notify_screen__logo {
      position: absolute;
      bottom: 20px;
      right: 0;
    }
  }
`;

function NotifyScreen({
  title,
  caption,
  footerContent,
  children,
}: PropsWithChildren<{ title: ReactNode; caption?: ReactNode; footerContent: ReactNode }>) {
  return (
    <StyledNotifyScreen>
      <Flex.Vertical className='body' gap={20}>
        <Typography.Main fontSize='28px' fontWeight={700}>
          {title}
        </Typography.Main>
        <Flex.Vertical gap={60}>
          <Typography.Main fontSize='14px'>{children}</Typography.Main>
          <Typography.Third fontSize='14px'>{caption}</Typography.Third>
        </Flex.Vertical>
        <BackgroundLogoIcon className='notify_screen__logo' />
      </Flex.Vertical>
      {footerContent}
    </StyledNotifyScreen>
  );
}

export default NotifyScreen;
