import { useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Pagination from '@@components/Pagination';
import Typography from '@@components/Typography';
import HistoryListItem from '@@pages/PurchaseHistory/parts/HistoryListItem';

import GuideCard from './parts/GuideCard';

function PurchaseHistory() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <FullScreen>
      <Header onBack={handleClickBack}>
        <Typography.Main fontWeight={600}>결제내역</Typography.Main>
      </Header>
      <Flex.Vertical className='body tw-px-[20px] tw-pt-[20px] tw-pb-[60px]'>
        <Flex.Vertical gap={12}>
          <Flex.Horizontal justifyContent='flex-end'>
            <Typography.Third fontSize='10px'>1년 이후 내역은 고객센터로 문의 바랍니다.</Typography.Third>
          </Flex.Horizontal>
          <HistoryListItem />
          <HistoryListItem />
          <HistoryListItem />
          <HistoryListItem />
          <HistoryListItem />
        </Flex.Vertical>
        <Pagination className='tw-mt-[20px]' length={5} currentPage={1} />
        <Flex.Vertical className='tw-mt-[60px]' gap={30}>
          <GuideCard title='결제 유의사항'>
            <Typography.Sub>1. 유의사항 1번의 텍스트가 노출됩니다.</Typography.Sub>
            <Typography.Sub>2. 유의사항 2번의 텍스트가 노출됩니다.</Typography.Sub>
            <Typography.Sub>3. 유의사항 3번의 텍스트가 노출됩니다.</Typography.Sub>
          </GuideCard>
          <GuideCard title='환불 안내'>
            <Typography.Sub>1. 환불안내 1번의 텍스트가 노출됩니다.</Typography.Sub>
            <Typography.Sub>2. 환불안내 2번의 텍스트가 노출됩니다.</Typography.Sub>
            <Typography.Sub>3. 환불안내 3번의 텍스트가 노출됩니다.</Typography.Sub>
          </GuideCard>
        </Flex.Vertical>
      </Flex.Vertical>
    </FullScreen>
  );
}

export default PurchaseHistory;
