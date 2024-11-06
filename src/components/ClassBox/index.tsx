import styled from 'styled-components';

import Badge from '@@components/Badge';
import { ClassBoxProps } from '@@components/ClassBox/types';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledClassBox = styled(Flex.Vertical)`
  flex: 0 0 auto;
  .class_box__image {
    height: 154px;

    border-radius: 6px;
    border: 1px solid ${COLORS.LINE_100};

    & > img {
      height: 100%;
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

function ClassBox({ classItem, ...props }: ClassBoxProps) {
  return (
    <StyledClassBox {...props}>
      <div className='class_box__image'>
        <img src={classItem.image} alt='Class Box Image' />
      </div>
      <Flex.Vertical className='tw-mt-[8px]' gap={12}>
        <Flex.Horizontal>{classItem.badgeList?.map((badge) => <Badge theme={badge.theme}>{badge.title}</Badge>)}</Flex.Horizontal>
        <Flex.Vertical gap={4}>
          <Typography.Main className='class_box__title' fontSize='14px' fontWeight={500}>
            {classItem.title}
          </Typography.Main>
          <Typography.Third fontSize='12px' className='class_box__description'>
            {classItem.description}
          </Typography.Third>
        </Flex.Vertical>
        <Typography.Main className='' fontWeight={700}>
          {classItem.price.toLocaleString()}원
        </Typography.Main>
      </Flex.Vertical>
    </StyledClassBox>
  );
}

export default ClassBox;
