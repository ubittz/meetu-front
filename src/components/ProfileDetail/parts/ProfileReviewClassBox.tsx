import { useState } from 'react';

import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import { ProfileReviewDownArrowIcon } from '@@components/ProfileDetail/icons';
import ProfileReviewBox from '@@components/ProfileDetail/parts/ProfileReviewBox';
import { ProfileReviewClass } from '@@components/ProfileDetail/types';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledProfileReviewClassBox = styled(Flex.Vertical)`
  .review_class__image {
    width: 100%;
    aspect-ratio: 32 / 17;
    border-radius: 8px;
    border: 1px solid ${COLORS.LINE_100};
    overflow: hidden;
    margin-bottom: 8px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .review_class__button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function ProfileReviewClassBox({ reviewClass }: { reviewClass: ProfileReviewClass }) {
  const [visible, setVisible] = useState<boolean>(false);

  const handleClickView = () => {
    setVisible((prev) => !prev);
  };

  return (
    <StyledProfileReviewClassBox>
      <div className='review_class__image'>
        <img src={reviewClass.image} alt='Class Image' />
      </div>
      <Flex.Vertical gap={4}>
        <Typography.Main fontSize='14px' fontWeight={500}>
          {reviewClass.title}
        </Typography.Main>
        <Typography.Third fontSize='12px'>{reviewClass.description}</Typography.Third>
      </Flex.Vertical>
      <Flex.Vertical className='tw-mt-[20px]' gap={20}>
        <Button.Tiny className='review_class__button' onClick={handleClickView}>
          해당 모임에 대한 리뷰 보기 <ProfileReviewDownArrowIcon className='tw-ml-[11px]' />
        </Button.Tiny>
        {visible && (
          <Flex.Vertical gap={12}>
            {reviewClass.reviews.map((review) => (
              <ProfileReviewBox key={review.id} review={review} />
            ))}
          </Flex.Vertical>
        )}
      </Flex.Vertical>
    </StyledProfileReviewClassBox>
  );
}

export default ProfileReviewClassBox;
