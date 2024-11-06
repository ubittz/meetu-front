import styled from 'styled-components';

import Flex from '@@components/Flex';
import TabHeader from '@@components/Tab/TabHeader';
import Typography from '@@components/Typography';

import { TAB_LIST } from '../constants';
import ReviewCard from './ReviewCrad';
import { StartIcon } from '../icons';
import Pagination from './Pagination';

const StyledReview = styled(Flex.Vertical)`
  .review__contents {
    padding: 0 20px;
  }
`;

function Review({ onChangeTab }: { onChangeTab: (index: number) => void }) {
  const AVERAGE_SCORE = 4;

  return (
    <StyledReview>
      <TabHeader itemList={TAB_LIST} selectedIndex={1} onChange={onChangeTab} />
      <Flex.Vertical className='review__contents'>
        <Flex.Horizontal className='tw-mt-[30px] tw-mb-[12px]' alignItems='center' justifyContent='space-between'>
          <Typography.Sub fontSize='14px' fontWeight={700}>
            Feel new happy 리뷰 (9)
          </Typography.Sub>
          <Flex.Horizontal gap={2}>
            {Array.from({ length: 5 }).map((_, index) => (
              <StartIcon key={index} width={12} height={12} fill={index <= AVERAGE_SCORE - 1} />
            ))}
          </Flex.Horizontal>
        </Flex.Horizontal>
        <Flex.Vertical gap={12}>
          <Flex.Vertical>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </Flex.Vertical>
          <Pagination length={5} currentPage={1} />
        </Flex.Vertical>
      </Flex.Vertical>
    </StyledReview>
  );
}

export default Review;
