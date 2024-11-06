import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import ReviewImage from '@@pages/ClassDetail/images/review.jpeg';

import { StartIcon } from '../icons';

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

function ReviewCard() {
  const score = 4;

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
          5.0
        </Typography.Sub>
        <Flex.Horizontal gap={2}>
          {Array.from({ length: 5 }).map((_, index) => (
            <StartIcon key={index} fill={index <= score - 1} />
          ))}
        </Flex.Horizontal>
      </Flex.Horizontal>
      <Flex.Vertical gap={20}>
        <Typography.Sub fontSize='14px'>
          # 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용#
          <br />
          리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용#
        </Typography.Sub>
        <Flex.Horizontal gap={20}>
          <Typography.Third fontSize='12px'>kimj****</Typography.Third>
          <Typography.Third fontSize='12px'>2024.09.20</Typography.Third>
        </Flex.Horizontal>
      </Flex.Vertical>
    </StyledReviewCard>
  );
}

export default ReviewCard;
