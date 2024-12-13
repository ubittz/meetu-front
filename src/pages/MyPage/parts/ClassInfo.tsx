import styled from 'styled-components';

import ClassBoxList from '@@components/ClassBoxList';
import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';
import { useAppState } from '@@store/hooks';
import { useMeetingMyList } from '@@stores/meeting/hooks';

const StyledClassInfo = styled(Flex.Vertical)`
  padding: 30px 0;
  border-bottom: 6px solid ${COLORS.LINE_100};
`;

function ClassInfo() {
  const { recentList } = useAppState((state) => state.meeting);

  const { content: myContent } = useMeetingMyList();

  const handleClickMyClass = () => {};

  return (
    <StyledClassInfo gap={40}>
      <ClassBoxList title='내 모임' meetingList={myContent ?? []} onClickShowAll={handleClickMyClass} emptyContent='모임에 참여해보세요.' />
      <ClassBoxList title='최근 본 모임' meetingList={recentList} />
    </StyledClassInfo>
  );
}

export default ClassInfo;
