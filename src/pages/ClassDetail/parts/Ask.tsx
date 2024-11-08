import styled from 'styled-components';

import Flex from '@@components/Flex';
import Pagination from '@@components/Pagination';
import TabHeader from '@@components/Tab/TabHeader';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { TAB_LIST } from '@@pages/ClassDetail/constants';
import AskCard from '@@pages/ClassDetail/parts/AskCard';
import AskInput from '@@pages/ClassDetail/parts/AskInput';

const StyledAsk = styled(Flex.Vertical)`
  .ask__title {
    padding-bottom: 12px;
    border-bottom: 1px solid ${COLORS.LINE_100};
  }
`;

function Ask({ onChangeTab }: { onChangeTab: (index: number) => void }) {
  return (
    <StyledAsk>
      <TabHeader itemList={TAB_LIST} selectedIndex={2} onChange={onChangeTab} />
      <Flex.Vertical className='tw-px-[20px] tw-pt-[30px]'>
        <Flex.Vertical className='ask__title' gap={20}>
          <Typography.Sub fontSize='14px' fontWeight={700}>
            Meet new People 문의 (e)
          </Typography.Sub>
          <AskInput placeholder='문의글을 작성해보세요!' />
        </Flex.Vertical>
        <Flex.Vertical gap={40}>
          <Flex.Vertical>
            <AskCard status='complete' isSecret />
            <AskCard status='pending' />
            <AskCard status='complete' isSecret />
            <AskCard status='complete' isSecret />
            <AskCard status='complete' isSecret />
          </Flex.Vertical>
          <Pagination length={5} currentPage={1} />
        </Flex.Vertical>
      </Flex.Vertical>
    </StyledAsk>
  );
}

export default Ask;
