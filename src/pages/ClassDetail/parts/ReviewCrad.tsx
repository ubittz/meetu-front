import { format } from 'date-fns';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { StartIcon } from '@@pages/ClassDetail/icons';
import ReviewImage from '@@pages/ClassDetail/images/review.jpeg';
import { ReviewListResponse } from '@@stores/meeting/types';

const StyledReviewCard = styled(Flex.Vertical)`
  padding: 20px 0;
  border-top: 1px solid ${COLORS.LINE_100};

  .review_card__image {
    flex: 0 0 auto;

    width: 68px;
    height: 68px;

    border-radius: 4px;

    object-fit: cover;

    overflow: hidden;
  }
`;

function ReviewCard({ review }: { review: ReviewListResponse }) {
  return (
    <StyledReviewCard gap={12}>
      <Flex.Horizontal gap={4}>
        <div className='review_card__image'>
          <img src={ReviewImage} alt='Review Image' />
        </div>
        <div className='review_card__image'>
          <img src={ReviewImage} alt='Review Image' />
        </div>
      </Flex.Horizontal>
      <Flex.Horizontal gap={4} alignItems='center'>
        <Typography.Sub fontWeight={700} fontSize='12px'>
          {review.reviewScore}
        </Typography.Sub>
        <Flex.Horizontal gap={2}>
          {Array.from({ length: 5 }).map((_, index) => (
            <StartIcon key={index} fill={index <= review.reviewScore - 1} />
          ))}
        </Flex.Horizontal>
      </Flex.Horizontal>
      <Flex.Vertical gap={20}>
        <Typography.Sub fontSize='14px'>{review.reviewDescript}</Typography.Sub>
        <Flex.Horizontal gap={20}>
          <Typography.Third fontSize='12px'>{review.userId}</Typography.Third>
          <Typography.Third fontSize='12px'>{format(review.createDatetime, 'yyyy.MM.dd')}</Typography.Third>
        </Flex.Horizontal>
      </Flex.Vertical>
    </StyledReviewCard>
  );
}

export default ReviewCard;
