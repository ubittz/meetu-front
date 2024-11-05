import BaseTypography from '@@components/Typography/BaseTypography';
import { TYPOGRAPHY_THEME } from '@@components/Typography/constants';

const Typography = {
  [TYPOGRAPHY_THEME.MAIN]: BaseTypography(TYPOGRAPHY_THEME.MAIN),
  [TYPOGRAPHY_THEME.SUB]: BaseTypography(TYPOGRAPHY_THEME.SUB),
  [TYPOGRAPHY_THEME.THIRD]: BaseTypography(TYPOGRAPHY_THEME.THIRD),
  [TYPOGRAPHY_THEME.PLACEHOLDER]: BaseTypography(TYPOGRAPHY_THEME.PLACEHOLDER),
  [TYPOGRAPHY_THEME.WHITE]: BaseTypography(TYPOGRAPHY_THEME.WHITE),
  [TYPOGRAPHY_THEME.POINT]: BaseTypography(TYPOGRAPHY_THEME.POINT),
};

export default Typography;
