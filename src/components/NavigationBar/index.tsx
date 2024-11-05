import styled from 'styled-components';

import Flex from '@@components/Flex';
import {
  ActiveHomeIcon,
  ActiveMyPageIcon,
  ActiveFindClassIcon,
  InactiveHomeIcon,
  InactiveMyPageIcon,
  InactiveFindClassIcon,
} from '@@components/NavigationBar/icons';
import NavigationItem from '@@components/NavigationBar/parts/NavigationItem';
import { NavigationItemType } from '@@components/NavigationBar/types';
import { COLORS } from '@@constants/colors';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledNavigationBar = styled(Flex.Horizontal)`
  height: 66px;
  border-top: 1px solid ${COLORS.LINE_100};

  .navigation_item {
    flex: 1;
  }
`;

const NAVIGATION_LIST: NavigationItemType[] = [
  {
    title: '홈',
    path: pathGenerator(PAGES.HOME),
    activeIcon: <ActiveHomeIcon />,
    inactiveIcon: <InactiveHomeIcon />,
  },
  {
    title: '모임찾기',
    path: pathGenerator(PAGES.HOME),
    activeIcon: <ActiveFindClassIcon />,
    inactiveIcon: <InactiveFindClassIcon />,
  },
  {
    title: '마이페이지',
    path: pathGenerator(PAGES.HOME),
    activeIcon: <ActiveMyPageIcon />,
    inactiveIcon: <InactiveMyPageIcon />,
  },
];

function NavigationBar() {
  return (
    <StyledNavigationBar>
      {NAVIGATION_LIST.map((item) => (
        <NavigationItem key={item.title} item={item} />
      ))}
    </StyledNavigationBar>
  );
}

export default NavigationBar;
