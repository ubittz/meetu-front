import { useState } from 'react';

import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import ClassEmpty from '@@pages/Home/parts/ClassEmpty';
import { ProfileReviewDownArrowIcon } from '@@pages/Profile/icons';
import ProfileReviewBox from '@@pages/Profile/parts/ProfileReviewBox';
import { useReviewList } from '@@stores/meeting/hooks';
import { Meeting } from '@@stores/meeting/types';

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

function ProfileReviewClassBox({ meeting }: { meeting: Meeting }) {
  const [visible, setVisible] = useState<boolean>(false);

  const { content, isLoading } = useReviewList(
    {
      page: 0,
      id: meeting.meetingId,
    },
    !visible
  );

  const handleClickView = () => {
    setVisible((prev) => !prev);
  };

  return (
    <StyledProfileReviewClassBox>
      <div className='review_class__image'>
        <img src={meeting.imageUrl} alt='Class Image' />
      </div>
      <Flex.Vertical gap={4}>
        <Typography.Main fontSize='14px' fontWeight={500}>
          {meeting.meetingName}
        </Typography.Main>
        <Typography.Third fontSize='12px'>{meeting.meetingDescript}</Typography.Third>
      </Flex.Vertical>
      <Flex.Vertical className='tw-mt-[20px]' gap={20}>
        <Button.Tiny className='review_class__button' onClick={handleClickView} disabled={isLoading}>
          해당 모임에 대한 리뷰 보기 <ProfileReviewDownArrowIcon className={`tw-ml-[11px] ${visible ? 'tw-rotate-180' : ''}`} />
        </Button.Tiny>
        {visible && (
          <Flex.Vertical gap={12}>
            {content && content.length ? (
              content.slice(0, 4).map((review) => <ProfileReviewBox key={review.reviewNo} review={review} />)
            ) : (
              <ClassEmpty>이 모임에 대한 리뷰가 없습니다.</ClassEmpty>
            )}
          </Flex.Vertical>
        )}
      </Flex.Vertical>
    </StyledProfileReviewClassBox>
  );
}

export default ProfileReviewClassBox;
