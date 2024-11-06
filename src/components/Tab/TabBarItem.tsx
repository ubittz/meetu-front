import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';

const StyledTabBarItem = styled(Flex.Horizontal)`
  height: 100%;
  padding: 0 10px;
  & > p {
    font-size: 16px;
  }
`;

function TabBarItem({ selected, onClick, children }: PropsWithChildren<{ selected: boolean; onClick: () => void }>) {
  return (
    <StyledTabBarItem className={`tab_header__item ${selected && 'selected'}`} alignItems='center' onClick={onClick}>
      {selected ? <Typography.Main fontWeight={700}>{children}</Typography.Main> : <Typography.Sub>{children}</Typography.Sub>}
    </StyledTabBarItem>
  );
}

export default TabBarItem;
