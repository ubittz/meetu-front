import styled from 'styled-components';

import { ButtonProps, ButtonSize, ButtonTheme } from '@@components/Button/types';

const StyledBasicButton = styled.button<{ $size: ButtonSize; $theme: ButtonTheme }>`
  outline: none;
  border-radius: 8px;
  ${({ theme, $size }) => theme.button.size[$size]}
  ${({ theme, $theme }) => theme.button.theme[$theme]}
`;

const BasicButton =
  (size: ButtonSize) =>
  ({ theme = 'primary', ...props }: ButtonProps) => {
    return <StyledBasicButton {...props} $size={size} $theme={theme} />;
  };

export default BasicButton;
