import { ButtonSize, ButtonTheme } from '@@components/Button/types';
import { FlexDirection } from '@@components/Flex/types';
import { TypographyTheme } from '@@components/Typography/types';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    flex: {
      direction: Record<FlexDirection, string>;
    };
    button: {
      size: Record<ButtonSize, string>;
      theme: Record<ButtonTheme, string>;
    };
    typography: Record<TypographyTheme, string>;
    color: {
      defualtFontColor: string;
      main: string;
      secondary_100: string;
      secondary_200: string;
      text_100: string;
      text_200: string;
      text_300: string;
      text_400: string;
      text_500: string;
      background_100: string;
      line_100: string;
    };
  }
}
