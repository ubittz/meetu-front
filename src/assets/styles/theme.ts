import { DefaultTheme } from 'styled-components';

import { BUTTON_SIZE, BUTTON_THEME } from '@@components/Button/constants';
import { FLEX_DIRECTION } from '@@components/Flex/constants';
import { TYPOGRAPHY_THEME } from '@@components/Typography/constants';
import { COLORS } from '@@constants/colors';

export const theme: DefaultTheme = {
  flex: {
    direction: {
      [FLEX_DIRECTION.HORIZONTAL]: 'row',
      [FLEX_DIRECTION.VERTICAL]: 'column',
    },
  },
  button: {
    size: {
      [BUTTON_SIZE.TINY]: 'height: 42px;',
      [BUTTON_SIZE.SMALL]: 'height: 44px;',
      [BUTTON_SIZE.MEDIUM]: 'height: 46px;',
      [BUTTON_SIZE.LARGE]: 'height: 48px;',
      [BUTTON_SIZE.EXTRALARGE]: 'height: 52px;',
    },
    theme: {
      [BUTTON_THEME.PRIMARY]: `background: ${COLORS.MAIN}; border: none; color: ${COLORS.TEXT_500};`,
      [BUTTON_THEME.OUTLINE]: `background: ${COLORS.TEXT_500}; border: 1px solid ${COLORS.LINE_100}; color: ${COLORS.TEXT_200};`,
    },
  },
  typography: {
    [TYPOGRAPHY_THEME.MAIN]: `color: ${COLORS.TEXT_100};`,
    [TYPOGRAPHY_THEME.SUB]: `color: ${COLORS.TEXT_200};`,
    [TYPOGRAPHY_THEME.THIRD]: `color: ${COLORS.TEXT_300};`,
    [TYPOGRAPHY_THEME.PLACEHOLDER]: `color: ${COLORS.TEXT_400};`,
  },
  color: {
    defualtFontColor: COLORS.TEXT_100,
    main: COLORS.MAIN,
    secondary_100: COLORS.SECONDARY_100,
    secondary_200: COLORS.SECONDARY_200,
    text_100: COLORS.TEXT_100,
    text_200: COLORS.TEXT_200,
    text_300: COLORS.TEXT_300,
    text_400: COLORS.TEXT_400,
    text_500: COLORS.TEXT_500,
    background_100: COLORS.BACKGROUND_100,
    line_100: COLORS.LINE_100,
  },
};
