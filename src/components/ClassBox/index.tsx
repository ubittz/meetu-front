import { PropsWithChildren } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Badge from '@@components/Badge';
import { ClassBoxProps } from '@@components/ClassBox/types';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import Class1Image from '@@pages/Home/images/class_1.png';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { DISTRICT } from '@@stores/meeting/constants';

const StyledClassBox = styled(Flex.Vertical)`
  flex: 0 0 auto;
  .class_box__image {
    height: 154px;

    border-radius: 6px;
    border: 1px solid ${COLORS.LINE_100};

    & > img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .class_box__title {
    height: calc(14px * 1.3 * 2);
  }

  .class_box__title,
  .class_box__description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

function ClassBox({ meeting, children, ...props }: PropsWithChildren<ClassBoxProps>) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(pathGenerator(PAGES.CLASS, `/${meeting?.meetingId}`));
  };

  if (!meeting) return null;

  const district = Object.entries(DISTRICT).find(([, value]) => meeting.meetingMainPlace.includes(value))?.[0];

  return (
    <StyledClassBox {...props} onClick={handleClick}>
      <div className='class_box__image'>
        <img src={Class1Image} alt='Class Box Image' />
      </div>
      <Flex.Vertical className='tw-mt-[8px]' gap={12}>
        <Flex.Horizontal gap={4}>
          <Badge theme='primary'>HOT</Badge>
          {district && <Badge theme='outline'>{district}</Badge>}
        </Flex.Horizontal>
        <Flex.Vertical gap={4}>
          <Typography.Main className='class_box__title' fontSize='14px' fontWeight={500}>
            {meeting.meetingName}
          </Typography.Main>
          <Typography.Third fontSize='12px' className='class_box__description'>
            {meeting.meetingIntro}
          </Typography.Third>
        </Flex.Vertical>
        <Typography.Main fontWeight={700}>{meeting.meetingCost.toLocaleString()}원</Typography.Main>
      </Flex.Vertical>
      {children}
    </StyledClassBox>
  );
}

export default ClassBox;
