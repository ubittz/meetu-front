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
      [BUTTON_SIZE.LARGE]: 'height: 48px;',
      [BUTTON_SIZE.MEDIUM]: 'height: 40px;',
      [BUTTON_SIZE.SMALL]: 'height: 32px;',
    },
    theme: {
      [BUTTON_THEME.PRIMARY]: `background: ${COLORS.MAIN_400}; border: none; color: ${COLORS.GRAY_SCALE_000}`,
      [BUTTON_THEME.SECONDARY]: `background: ${COLORS.GRAY_SCALE_000}; border: 1px solid ${COLORS.MAIN_400}; color: ${COLORS.MAIN_400}`,
      [BUTTON_THEME.SOFT]: `background: ${COLORS.MAIN_050}; border: none; color: ${COLORS.MAIN_700}`,
      [BUTTON_THEME.OUTLINE]: `background: ${COLORS.GRAY_SCALE_000}; border: 1px solid ${COLORS.GRAY_SCALE_050}; color: ${COLORS.GRAY_SCALE_700}`,
      [BUTTON_THEME.INACTIVE]: `background: ${COLORS.GRAY_SCALE_100}; border: none; color: ${COLORS.GRAY_SCALE_200}`,
    },
  },
  typography: {
    [TYPOGRAPHY_THEME.LARGE_TITLE]: 'font-size: 24px; font-weight: 800;',
    [TYPOGRAPHY_THEME.MEDIUM_TITLE]: 'font-size: 22px; font-weight: 800;',
    [TYPOGRAPHY_THEME.SMALL_TITLE]: 'font-size: 20px; font-weight: 800;',
    [TYPOGRAPHY_THEME.LARGE_SUBTITLE]: 'font-size: 18px; font-weight: 800;',
    [TYPOGRAPHY_THEME.MEDIUM_SUBTITLE]: 'font-size: 16px; font-weight: 600;',
    [TYPOGRAPHY_THEME.SMALL_SUBTITLE]: 'font-size: 14px; font-weight: 600;',
    [TYPOGRAPHY_THEME.LARGE_BODY]: 'font-size: 20px; font-weight: 400;',
    [TYPOGRAPHY_THEME.MEDIUM_BODY]: 'font-size: 16px; font-weight: 400;',
    [TYPOGRAPHY_THEME.SMALL_BODY]: 'font-size: 14px; font-weight: 400;',
    [TYPOGRAPHY_THEME.CAPTION]: 'font-size: 12px; font-weight: 400;',
    [TYPOGRAPHY_THEME.LARGE_BUTTON]: 'font-size: 16px; font-weight: 700;',
    [TYPOGRAPHY_THEME.MEDUIM_BUTTON]: 'font-size: 14px; font-weight: 700;',
    [TYPOGRAPHY_THEME.SMALL_BUTTON]: 'font-size: 12px; font-weight: 700;',
  },
  color: {
    defualtFontColor: COLORS.GRAY_SCALE_900,
    main_050: COLORS.MAIN_050,
    main_400: COLORS.MAIN_400,
    main_700: COLORS.MAIN_700,
  },
};
