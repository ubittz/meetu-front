import { useState } from 'react';

import { useParams } from 'react-router-dom';

import Flex from '@@components/Flex';
import Pagination from '@@components/Pagination';
import TabHeader from '@@components/Tab/TabHeader';
import ClassEmpty from '@@pages/Home/parts/ClassEmpty';
import { ACCOUNT_TYPE, PROFILE_TAB_LIST_BY_ACCOUNT_TYPE } from '@@pages/Profile/constants';
import ProfileReviewClassBox from '@@pages/Profile/parts/ProfileReviewClassBox';
import { useMeetingByUser } from '@@stores/meeting/hooks';
import { useUserDetail } from '@@stores/user/hooks';

function ProfileReviewList({ onChangeTab }: { onChangeTab: (index: number) => void }) {
  const { id } = useParams();

  const [meetingPage, setMeetingPage] = useState(0);

  const { data } = useUserDetail(id ?? '');
  const { content, page } = useMeetingByUser({
    page: meetingPage,
    size: 4,
    userId: id,
  });

  const accountType = data?.isHost ? ACCOUNT_TYPE.HOST : ACCOUNT_TYPE.NORMAL;

  return (
    <Flex.Vertical>
      <TabHeader itemList={PROFILE_TAB_LIST_BY_ACCOUNT_TYPE[accountType]} selectedIndex={1} onChange={onChangeTab} />
      <Flex.Vertical className='tw-px-[20px] tw-py-[30px]' gap={20}>
        {content && content.length ? (
          content?.map((meeting) => <ProfileReviewClassBox key={meeting.meetingId} meeting={meeting} />)
        ) : (
          <ClassEmpty>모임이 존재하지 않습니다.</ClassEmpty>
        )}
      </Flex.Vertical>
      <Pagination current={page.current} lastPage={page.lastPage} onChange={(value) => setMeetingPage(value - 1)} />
    </Flex.Vertical>
  );
}

export default ProfileReviewList;
