import { useRef } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';
import { PlusIcon } from '@@pages/MyPage/icons';

const StyledReviewCreateImageBox = styled(Flex.Horizontal)`
  position: relative;
  width: 80px;
  height: 80px;
  border: 1px solid ${COLORS.LINE_100};

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  .review__delete {
    position: absolute;
    width: 20px;
    height: 20px;
    top: -5px;
    right: -5px;
    background: ${COLORS.TEXT_200};
    border-radius: 50%;

    & > svg {
      transform: rotate(45deg);
    }
  }
`;

function ReviewCreateImageBox({ image, index, onDelete }: { image: File; index: number; onDelete: (index: number) => void }) {
  const url = useRef(URL.createObjectURL(image));

  return (
    <StyledReviewCreateImageBox justifyContent='center' alignItems='center'>
      <img src={url.current} alt='Review Image' />
      <Flex.Horizontal className='review__delete' alignItems='center' justifyContent='center'>
        <PlusIcon width='13' height='13' onClick={() => onDelete(index)} />
      </Flex.Horizontal>
    </StyledReviewCreateImageBox>
  );
}

export default ReviewCreateImageBox;
