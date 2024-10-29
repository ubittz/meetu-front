import styled from 'styled-components';

import { TypographyProps, TypographyTheme } from '@@components/Typography/types';

const StyledBaseTypography = styled.p<{ $theme: TypographyTheme; $color?: string }>`
  ${({ theme, $theme }) => theme.typography[$theme]}
  color: ${({ theme, $color }) => $color ?? theme.color.defualtFontColor};
`;

const BaseTypography =
  (theme: TypographyTheme) =>
  ({ color, ...props }: TypographyProps) => {
    return <StyledBaseTypography {...props} $theme={theme} $color={color} />;
  };

export default BaseTypography;
