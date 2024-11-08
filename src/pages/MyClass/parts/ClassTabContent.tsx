import { Class } from '@@components/ClassBox/types';
import Flex from '@@components/Flex';

import MyClassItem from './MyClassItem';

function ClassTabContent({ classList }: { classList: Class[] }) {
  return (
    <Flex.Vertical className='tw-pt-[40px] tw-px-[20px]' gap={30} flex={1}>
      {classList.map((classItem) => (
        <MyClassItem key={classItem.id} classItem={classItem} />
      ))}
    </Flex.Vertical>
  );
}

export default ClassTabContent;
