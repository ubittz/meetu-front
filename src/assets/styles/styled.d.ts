import { BUTTON_SIZE, BUTTON_THEME } from '@@components/Button/constants';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    button: {
      size: {
        [BUTTON_SIZE.LARGE]: string;
        [BUTTON_SIZE.MEDIUM]: string;
        [BUTTON_SIZE.SMALL]: string;
      };
      theme: {
        [BUTTON_THEME.PRIMARY]: string;
        [BUTTON_THEME.SECONDARY]: string;
        [BUTTON_THEME.OUTLINE]: string;
        [BUTTON_THEME.SOFT]: string;
        [BUTTON_THEME.INACTIVE]: string;
      };
    };
    color: {
      main_050: string;
      main_400: string;
      main_700: string;
    };
  }
}
