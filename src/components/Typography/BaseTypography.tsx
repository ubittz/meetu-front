import { Properties } from 'csstype';
import styled from 'styled-components';

import { TypographyProps, TypographyTheme } from '@@components/Typography/types';

const StyledBaseTypography = styled.p<{
  $theme: TypographyTheme;
  $fontSize: Properties['fontSize'];
  $fontWeight: Properties['fontWeight'];
  $color?: string;
}>`
  ${({ theme, $theme }) => theme.typography[$theme]}
  ${({ $color }) => $color && `color: ${$color};`}
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  line-height: 1.3em;
`;

const BaseTypography =
  (theme: TypographyTheme) =>
  ({ fontWeight = 400, fontSize = '16px', color, ...props }: TypographyProps) => {
    return <StyledBaseTypography {...props} $theme={theme} $fontSize={fontSize} $fontWeight={fontWeight} $color={color} />;
  };

export default BaseTypography;
