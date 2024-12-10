import styled from 'styled-components';

import { ButtonProps, ButtonSize, ButtonTheme } from '@@components/Button/types';

const StyledBasicButton = styled.button<{ $size: ButtonSize; $theme: ButtonTheme }>`
  outline: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3em;
  &:disabled {
    opacity: 0.6;
  }
  ${({ theme, $size }) => theme.button.size[$size]}
  ${({ theme, $theme }) => theme.button.theme[$theme]}
`;

const BasicButton =
  (size: ButtonSize) =>
  ({ theme = 'primary', ...props }: ButtonProps) => {
    return <StyledBasicButton type='button' {...props} $size={size} $theme={theme} />;
  };

export default BasicButton;
