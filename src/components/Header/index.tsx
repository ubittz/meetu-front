import styled from 'styled-components';

import BlankBox from '@@components/BlankBox';
import { ATTR_BY_HEADER_ALIGN } from '@@components/Header/constants';
import { HeaderAlignment, HeaderProps } from '@@components/Header/types';
import { COLORS } from '@@constants/colors';
import { ArrowLeftIcon } from '@@constants/icons';

const BUTTON_SIZE = 20;

const StyledHeader = styled.div<{ $hiddenBack: boolean; $align: HeaderAlignment }>`
  display: flex;
  justify-content: ${({ $hiddenBack, $align }) => (!$hiddenBack ? 'space-between' : ATTR_BY_HEADER_ALIGN[$align])};
  align-items: center;
  height: 52px;
  padding: 0 20px;
  border-bottom: 1px solid ${COLORS.LINE_100};

  .header__back_icon_wrap {
    display: ${({ $hiddenBack }) => ($hiddenBack ? 'none' : 'flex')};
    justify-content: center;
    align-items: center;
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
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
      {!hiddenBack && <BlankBox width={BUTTON_SIZE} />}
    </StyledHeader>
  );
}

export default Header;
