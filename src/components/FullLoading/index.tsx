import styled from 'styled-components';

import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';

const StyledFullLoading = styled(Flex.Vertical)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);

  .full_loading__indicator {
    width: 40px;
    height: 40px;
    border: 5px solid #fff;
    border-bottom-color: ${COLORS.MAIN};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function FullLoading({ visible }: { visible?: boolean }) {
  if (visible === false) return null;

  return (
    <StyledFullLoading alignItems='center' justifyContent='center'>
      <div className='full_loading__indicator' />
    </StyledFullLoading>
  );
}

export default FullLoading;
