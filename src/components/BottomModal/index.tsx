import { ForwardedRef, forwardRef } from 'react';

import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import { ModalLeftArrowIcon } from '@@components/BottomModal/icons';
import { BottomModalProps } from '@@components/BottomModal/types';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledBottomModal = styled(Flex.Vertical)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 1000;

  &.bottom-modal-enter {
    opacity: 0;

    .bottom_modal {
      transform: translateY(100%);
    }
  }
  &.bottom-modal-enter-active {
    opacity: 1;
    transition: opacity 300ms;

    .bottom_modal {
      transform: translateY(0);
      transition: transform 300ms;
    }
  }
  &.bottom-modal-exit {
    opacity: 1;

    .bottom_modal {
      transform: translateY(0);
    }
  }
  &.bottom-modal-exit-active {
    opacity: 0;
    transition: opacity 300ms;

    .bottom_modal {
      transform: translateY(100%);
      transition: transform 300ms;
    }
  }

  .bottom_modal__cover {
    width: 100%;
    height: 100%;
    background: #00000066;
    z-index: 999;
  }
  .bottom_modal {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${COLORS.TEXT_500};

    z-index: 1000;

    .bottom_modal__header {
      height: 52px;
      padding: 0 20px;
    }

    .bottom_modal__header-blank {
      width: 24px;
    }
  }
`;

function BottomModal({ title, visible, setVisible, children }: BottomModalProps, ref: ForwardedRef<HTMLElement>) {
  const handleClose = () => {
    setVisible(!visible);
  };

  return (
    <CSSTransition classNames='bottom-modal' in={visible} nodeRef={ref} timeout={300} unmountOnExit>
      <StyledBottomModal ref={ref}>
        <div className='bottom_modal__cover' onClick={handleClose} />
        <Flex.Vertical className='bottom_modal'>
          <Flex.Horizontal className='bottom_modal__header' alignItems='center' justifyContent='space-between'>
            <ModalLeftArrowIcon onClick={handleClose} />
            <Typography.Main fontSize='14px' fontWeight={700}>
              {title}
            </Typography.Main>
            <div className='bottom_modal__header-blank' />
          </Flex.Horizontal>
          {children}
        </Flex.Vertical>
      </StyledBottomModal>
    </CSSTransition>
  );
}

export default forwardRef(BottomModal);
