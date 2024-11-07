import { format } from 'date-fns';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import { ProfileReview } from '@@components/ProfileDetail/types';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { StartIcon } from '@@pages/ClassDetail/icons';

const StyledProfileReviewBox = styled(Flex.Vertical)`
  padding: 16px 10px 20px;
  border-radius: 8px;
  border: 1px solid ${COLORS.LINE_100};
  background: #f8f8f8;

  .profile_review__top {
    padding-bottom: 15px;
    border-bottom: 1px solid ${COLORS.LINE_100};

    .profile_review__image {
      flex: 0 0 auto;
      width: 130px;
      height: 100px;

      border: 1px solid ${COLORS.LINE_100};
      border-radius: 8px;

      overflow: hidden;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .profile_review__description {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  .profile_review__bottom {
    padding-top: 12px;

    .profile_review__profile_image {
      width: 48px;
      height: 48px;
      border: 1px solid ${COLORS.LINE_100};
      border-radius: 50%;
      overflow: hidden;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

function ProfileReviewBox({ review }: { review: ProfileReview }) {
  return (
    <StyledProfileReviewBox>
      <Flex.Horizontal className='profile_review__top' gap={12}>
        <div className='profile_review__image'>
          <img src={review.image} alt='Review Image' />
        </div>
        <Flex.Vertical>
          <Typography.Main fontSize='14px' fontWeight={700}>
            {review.title}
          </Typography.Main>
          <Flex.Horizontal className='tw-mt-[8px]' gap={4}>
            <Typography.Sub fontSize='12px' fontWeight={700}>
              {review.score}.0
            </Typography.Sub>
            <Flex.Horizontal gap={2}>
              {Array.from({ length: 5 }).map((_, index) => (
                <StartIcon fill={index <= review.score - 1} />
              ))}
            </Flex.Horizontal>
          </Flex.Horizontal>
          <Typography.Sub className='tw-mt-[12px] profile_review__description' fontSize='12px'>
            {review.description}
          </Typography.Sub>
          <Typography.Third className='tw-mt-[4px]' fontSize='10px'>
            더보기
          </Typography.Third>
        </Flex.Vertical>
      </Flex.Horizontal>
      <Flex.Horizontal className='profile_review__bottom' alignItems='center' justifyContent='space-between'>
        <Flex.Horizontal alignItems='center' gap={4}>
          <div className='profile_review__profile_image'>
            <img src={review.profileImage} alt='Profile Image' />
          </div>
          <Typography.Sub fontSize='10px' fontWeight='bold'>
            {review.writer}
          </Typography.Sub>
        </Flex.Horizontal>
        <Typography.Third fontSize='10px'>{format(review.createdAt, 'yyyy. MM. dd')}</Typography.Third>
      </Flex.Horizontal>
    </StyledProfileReviewBox>
  );
}

export default ProfileReviewBox;
