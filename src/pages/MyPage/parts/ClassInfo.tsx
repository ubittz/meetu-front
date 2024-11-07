import styled from 'styled-components';

import ClassBoxList from '@@components/ClassBoxList';
import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';
import { CLASS_LIST } from '@@pages/Home/constants';

const StyledClassInfo = styled(Flex.Vertical)`
  padding: 30px 0;
  border-bottom: 6px solid ${COLORS.LINE_100};
`;

function ClassInfo() {
  const handleClickMyClass = () => {};

  const handleClickRecentClass = () => {};

  return (
    <StyledClassInfo gap={40}>
      <ClassBoxList
        title='카테고리 별 추천 모임'
        classList={CLASS_LIST.map((classItem) => ({ ...classItem, badgeList: undefined }))}
        onClickShowAll={handleClickMyClass}
      />
      <ClassBoxList title='최근 본 모임' classList={CLASS_LIST} onClickShowAll={handleClickRecentClass} />
    </StyledClassInfo>
  );
}

export default ClassInfo;
