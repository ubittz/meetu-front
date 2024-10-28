import styled from 'styled-components';

import { BasicButtonProps, ButtonSize, ButtonTheme } from '@@components/Button/types';

const StyledBasicButton = styled.button<{ $size: ButtonSize; $theme: ButtonTheme }>`
  outline: none;
  border-radius: 8px;
  ${({ theme, $size }) => theme.button.size[$size]}
  ${({ theme, $theme }) => {
    console.log(theme, $theme);
    return theme.button.theme[$theme];
  }}
`;

function BasicButton({ size = 'md', theme = 'primary', ...props }: BasicButtonProps) {
  return <StyledBasicButton {...props} $size={size} $theme={theme} />;
}

export default BasicButton;
