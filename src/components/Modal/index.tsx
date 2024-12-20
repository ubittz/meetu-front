import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import { ModalProps } from './types';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: 1000;

  .modal_back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: #00000066;
    z-index: 999;
  }

  .modal_box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: 54px 30px 30px;

    width: 80%;

    background: ${COLORS.TEXT_500};

    z-index: 1000;

    .modal_box__content {
      flex: 1;
      text-align: center;
    }

    .modal_box__button {
      flex: 0 0 auto;
    }
  }
`;

function Modal({ visible, setVisible, confirmContent, children, onConfirm }: ModalProps) {
  if (!visible) return null;

  return (
    <StyledModal>
      <div className='modal_back' onClick={() => setVisible(false)} />
      <Flex.Vertical className='modal_box' gap={30}>
        <Flex.Horizontal className='modal_box__content' alignItems='center' justifyContent='center'>
          <Typography.Main fontSize='16px'>{children}</Typography.Main>
        </Flex.Horizontal>
        <Button.Small className='modal_box__button' onClick={onConfirm}>
          {confirmContent ?? '확인'}
        </Button.Small>
      </Flex.Vertical>
    </StyledModal>
  );
}

export default Modal;
