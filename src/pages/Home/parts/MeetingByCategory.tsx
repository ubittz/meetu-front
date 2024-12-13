import { ChangeEventHandler } from 'react';

import styled from 'styled-components';

import ClassBox from '@@components/ClassBox';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { ALL_CATEGORIES, CATEGORY_STRINGS } from '@@pages/Home/constants';
import ClassEmpty from '@@pages/Home/parts/ClassEmpty';
import { Category } from '@@pages/Home/types';
import { Meeting } from '@@stores/meeting/types';

const StyledClassBoxList = styled(Flex.Horizontal)`
  overflow-x: scroll;
  padding: 0 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledSelect = styled.select`
  font-size: 12px;
  color: ${COLORS.TEXT_200};
  outline: none;
`;

function MeetingByCategory({
  meetingList,
  category,
  setCategory,
}: {
  meetingList: Meeting[];
  category?: Category;
  setCategory: (category?: Category) => void;
}) {
  const handleChangeCategory: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCategory((e.target.value as Category) || undefined);
  };

  return (
    <Flex.Vertical gap={20}>
      <Flex.Horizontal className='tw-px-[20px]' alignItems='center' justifyContent='space-between'>
        <Typography.Main fontSize='20px' fontWeight={700}>
          카테고리 별 추천 모임
        </Typography.Main>
        <Flex.Horizontal alignItems='center'>
          <StyledSelect value={category} onChange={handleChangeCategory}>
            <option value=''>모두보기</option>
            {ALL_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {CATEGORY_STRINGS[category]}
              </option>
            ))}
          </StyledSelect>
        </Flex.Horizontal>
      </Flex.Horizontal>
      <StyledClassBoxList gap={10}>
        {meetingList.length ? (
          meetingList.map((meeting) => <ClassBox key={meeting.meetingId} className='tw-w-[126px]' meeting={meeting} />)
        ) : (
          <ClassEmpty />
        )}
      </StyledClassBoxList>
    </Flex.Vertical>
  );
}

export default MeetingByCategory;
