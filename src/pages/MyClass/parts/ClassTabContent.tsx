import Flex from '@@components/Flex';
import MyClassItem from '@@pages/MyClass/parts/MyClassItem';
import { Meeting } from '@@stores/meeting/types';

function ClassTabContent({ meetingList }: { meetingList: Meeting[] }) {
  return (
    <Flex.Vertical className='tw-pt-[40px] tw-px-[20px]' gap={30} flex={1}>
      {meetingList.map((meeting) => (
        <MyClassItem key={meeting.meetingId} meeting={meeting} />
      ))}
    </Flex.Vertical>
  );
}

export default ClassTabContent;
