import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import { NavigationItemType } from '@@components/NavigationBar/types';
import Typography from '@@components/Typography';

const StyledNavigationItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  -webkit-tap-highlight-color: transparent;

  &:active,
  &:visited {
    background: #fff;
  }

  .navigation_item__icon {
    width: 30px;
    height: 30px;
  }
`;

function NavigationItem({ item }: { item: NavigationItemType }) {
  return (
    <StyledNavigationItem to={item.path} className='navigation_item'>
      {({ isActive }) => (
        <>
          <Flex.Horizontal justifyContent='center' alignItems='center' className='navigation_item__icon'>
            {isActive ? item.activeIcon : item.inactiveIcon}
          </Flex.Horizontal>
          {isActive ? (
            <Typography.Main fontSize='10px' fontWeight={700}>
              {item.title}
            </Typography.Main>
          ) : (
            <Typography.Placeholder fontSize='10px' fontWeight={700}>
              {item.title}
            </Typography.Placeholder>
          )}
        </>
      )}
    </StyledNavigationItem>
  );
}

export default NavigationItem;
