import styled from 'styled-components';

import { BADGE_THEME } from '@@components/Badge/constants';
import { BadgeProps, BadgeTheme } from '@@components/Badge/types';
import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';

const StyledBadge = styled(Flex.Horizontal)<{ $theme: BadgeTheme }>`
  font-size: 10px;
  line-height: 1.3em;
  font-weight: 400;

  color: ${({ $theme }) => ($theme === BADGE_THEME.PRIMARY ? COLORS.TEXT_500 : COLORS.TEXT_200)};
  background: ${({ $theme }) => ($theme === BADGE_THEME.PRIMARY ? COLORS.MAIN : COLORS.TEXT_500)};
  border: 1px solid ${({ $theme }) => ($theme === BADGE_THEME.PRIMARY ? COLORS.MAIN : COLORS.LINE_100)};

  border-radius: 4px;
  padding: 4px 10px;
`;

function Badge({ theme = BADGE_THEME.PRIMARY, children }: BadgeProps) {
  return <StyledBadge $theme={theme}>{children}</StyledBadge>;
}

export default Badge;
