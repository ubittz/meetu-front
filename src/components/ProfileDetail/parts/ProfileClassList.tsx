import styled from 'styled-components';

import ClassBox from '@@components/ClassBox';
import Flex from '@@components/Flex';
import { PROFILE_TAB_LIST_BY_ACCOUNT_TYPE } from '@@components/ProfileDetail/constants';
import { AccountType } from '@@components/ProfileDetail/types';
import TabHeader from '@@components/Tab/TabHeader';
import { CLASS_LIST } from '@@pages/Home/constants';

const StyledClassGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 30px;

  padding: 30px 20px 0;
`;

function ProfileClassList({ accountType, onChangeTab }: { accountType: AccountType; onChangeTab: (index: number) => void }) {
  return (
    <Flex.Vertical>
      <TabHeader itemList={PROFILE_TAB_LIST_BY_ACCOUNT_TYPE[accountType]} selectedIndex={0} onChange={onChangeTab} />
      <StyledClassGrid>
        {CLASS_LIST.map((classItem) => (
          <ClassBox key={classItem.id} classItem={classItem} />
        ))}
      </StyledClassGrid>
    </Flex.Vertical>
  );
}

export default ProfileClassList;
