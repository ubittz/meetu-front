import { DefaultTheme } from 'styled-components';

import { BUTTON_SIZE, BUTTON_THEME } from '@@components/Button/constants';
import { COLORS } from '@@constants/colors';

export const theme: DefaultTheme = {
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
  color: {
    main_050: COLORS.MAIN_050,
    main_400: COLORS.MAIN_400,
    main_700: COLORS.MAIN_700,
  },
};
