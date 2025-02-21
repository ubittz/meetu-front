import styled from 'styled-components';

import { CheckIcon } from '@@components/CheckBox/icons';
import { CheckBoxProps } from '@@components/CheckBox/types';
import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';

const StyledCheckBox = styled.label<{ $size: number }>`
  display: flex;
  align-items: center;
  gap: 8px;

  .checkbox__icon {
    flex: 0 0 auto;
    position: relative;

    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;

    background: ${COLORS.LINE_100};
    border-radius: 4px;
  }

  & > input:checked + .checkbox__icon {
    background: ${COLORS.MAIN};
  }
`;

function CheckBox({ children, size = 20, ...props }: CheckBoxProps) {
  return (
    <StyledCheckBox $size={size}>
      <input type='checkbox' hidden {...props} />
      <Flex.Horizontal className='checkbox__icon' alignItems='center' justifyContent='center'>
        <CheckIcon />
      </Flex.Horizontal>
      {children}
    </StyledCheckBox>
  );
}

export default CheckBox;
