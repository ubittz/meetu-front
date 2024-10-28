import styled from 'styled-components';

import { ATTR_BY_HEADER_ALIGN } from '@@components/Header/constants';
import { HeaderAlignment, HeaderProps } from '@@components/Header/types';
import { ArrowLeftIcon } from '@@constants/icons';

const BUTTON_SIZE = 24;

const StyledHeader = styled.div<{ $hiddenBack: boolean; $align: HeaderAlignment }>`
  display: flex;
  justify-content: ${({ $hiddenBack, $align }) => (!$hiddenBack ? 'space-between' : ATTR_BY_HEADER_ALIGN[$align])};
  align-items: center;

  .header__back_icon_wrap {
    display: ${({ $hiddenBack }) => ($hiddenBack ? 'none' : 'flex')};
    justify-content: center;
    align-items: center;
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
  }

  .header__title {
  }

  .header__blank_box {
    display: ${({ $hiddenBack }) => ($hiddenBack ? 'none' : 'flex')};
    width: ${BUTTON_SIZE}px;
  }
`;

function Header({ children, titleAlign = 'center', hiddenBack = false, onBack, className, ...props }: HeaderProps) {
  return (
    <StyledHeader {...props} className={`header ${className}`} $hiddenBack={hiddenBack} $align={titleAlign}>
      {!hiddenBack && (
        <div className='header__back_icon_wrap' onClick={onBack}>
          <ArrowLeftIcon />
        </div>
      )}
      <div className='header__title'>{children}</div>
      <div className='header__blank_box'></div>
    </StyledHeader>
  );
}

export default Header;
