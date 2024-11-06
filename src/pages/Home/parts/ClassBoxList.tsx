import styled from 'styled-components';

import ClassBox from '@@components/ClassBox';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { RightArrowIcon } from '@@pages/Home/icons';
import { ClassBoxListProps } from '@@pages/Home/types';

const StyledClassBoxList = styled(Flex.Horizontal)`
  overflow-x: scroll;
  padding: 0 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function ClassBoxList({ title, classList, onClickShowAll, ...props }: ClassBoxListProps) {
  return (
    <Flex.Vertical {...props} gap={20}>
      <Flex.Horizontal className='tw-px-[20px]' alignItems='center' justifyContent='space-between'>
        <Typography.Main fontSize='20px' fontWeight={700}>
          {title}
        </Typography.Main>
        {onClickShowAll && (
          <Flex.Horizontal alignItems='center' onClick={onClickShowAll}>
            <Typography.Sub fontSize='12px'>전체보기</Typography.Sub>
            <RightArrowIcon />
          </Flex.Horizontal>
        )}
      </Flex.Horizontal>
      <StyledClassBoxList gap={10}>
        {classList.map((classItem) => (
          <ClassBox key={classItem.title} className='tw-w-[126px]' classItem={classItem} />
        ))}
      </StyledClassBoxList>
    </Flex.Vertical>
  );
}

export default ClassBoxList;
