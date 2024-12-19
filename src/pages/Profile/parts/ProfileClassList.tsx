import { useState } from 'react';

import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import ClassBox from '@@components/ClassBox';
import Flex from '@@components/Flex';
import Pagination from '@@components/Pagination';
import TabHeader from '@@components/Tab/TabHeader';
import ClassEmpty from '@@pages/Home/parts/ClassEmpty';
import { ACCOUNT_TYPE, PROFILE_TAB_LIST_BY_ACCOUNT_TYPE } from '@@pages/Profile/constants';
import { useMeetingByUser } from '@@stores/meeting/hooks';
import { useUserDetail } from '@@stores/user/hooks';

const StyledClassGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 30px;

  padding: 30px 20px;
`;

function ProfileClassList({ onChangeTab }: { onChangeTab: (index: number) => void }) {
  const { id } = useParams();

  const [meetingPage, setPage] = useState(0);

  const { data } = useUserDetail(id ?? '');
  const { content, page } = useMeetingByUser({ page: meetingPage, size: 4, userId: id });

  const accountType = data?.isHost ? ACCOUNT_TYPE.HOST : ACCOUNT_TYPE.NORMAL;

  return (
    <Flex.Vertical>
      <TabHeader itemList={PROFILE_TAB_LIST_BY_ACCOUNT_TYPE[accountType]} selectedIndex={0} onChange={onChangeTab} />
      <StyledClassGrid>
        {content && content.length ? (
          content?.map((content) => <ClassBox key={content.meetingId} meeting={content} />)
        ) : (
          <ClassEmpty>{data?.isHost ? '모임을 만들어보세요.' : '모임에 참여해보세요'}</ClassEmpty>
        )}
      </StyledClassGrid>
      <Pagination current={page.current} lastPage={page.lastPage} onChange={(value) => setPage(value - 1)} />
    </Flex.Vertical>
  );
}

export default ProfileClassList;
