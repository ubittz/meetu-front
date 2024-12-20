import Flex from '@@components/Flex';
import MyClassItem from '@@pages/MyClass/parts/MyClassItem';
import { Meeting } from '@@stores/meeting/types';

function ClassTabContent({ meetingList, onDelete }: { meetingList: Meeting[]; onDelete: (id: string) => void }) {
  return (
    <Flex.Vertical className='tw-pt-[40px] tw-px-[20px]' gap={30} flex={1}>
      {meetingList.map((meeting) => (
        <MyClassItem key={meeting.meetingId} meeting={meeting} onDelete={onDelete} />
      ))}
    </Flex.Vertical>
  );
}

export default ClassTabContent;
