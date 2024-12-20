import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ClassBoxList from '@@components/ClassBoxList';
import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useAppState } from '@@store/hooks';
import { useMeetingByUser } from '@@stores/meeting/hooks';

const StyledClassInfo = styled(Flex.Vertical)`
  padding: 30px 0;
  border-bottom: 6px solid ${COLORS.LINE_100};
`;

function ClassInfo() {
  const navigate = useNavigate();

  const { recentList } = useAppState((state) => state.meeting);

  const { content: myContent } = useMeetingByUser({ page: 0, size: 3 });

  const handleClickMyClass = () => {
    navigate(pathGenerator(PAGES.MY_PAGE, '/my-class'));
  };

  return (
    <StyledClassInfo gap={40}>
      <ClassBoxList title='내 모임' meetingList={myContent ?? []} onClickShowAll={handleClickMyClass} emptyContent='모임에 참여해보세요.' />
      <ClassBoxList title='최근 본 모임' meetingList={recentList} />
    </StyledClassInfo>
  );
}

export default ClassInfo;
