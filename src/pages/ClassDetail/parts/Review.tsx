import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Pagination from '@@components/Pagination';
import TabHeader from '@@components/Tab/TabHeader';
import Typography from '@@components/Typography';
import { TAB_LIST } from '@@pages/ClassDetail/constants';
import { StartIcon } from '@@pages/ClassDetail/icons';
import ReviewCard from '@@pages/ClassDetail/parts/ReviewCrad';
import ClassEmpty from '@@pages/Home/parts/ClassEmpty';
import { useReviewList } from '@@stores/meeting/hooks';
import { useQueryParams } from '@@utils/request/hooks';

const StyledReview = styled(Flex.Vertical)`
  .review__contents {
    padding: 0 20px;
  }
`;

function Review({ onChangeTab }: { onChangeTab: (index: number) => void }) {
  const {
    query: { reviewPage },
  } = useQueryParams(
    { reviewPage: 0 },
    {
      initialSearch: ({ reviewPage }) => reviewPage === undefined,
    }
  );
  const { id } = useParams();

  const { content, page } = useReviewList({
    id: id ?? '',
    page: reviewPage,
  });

  const AVERAGE_SCORE = 4;

  return (
    <StyledReview>
      <TabHeader itemList={TAB_LIST} selectedIndex={1} onChange={onChangeTab} />
      <Flex.Vertical className='review__contents'>
        <Flex.Horizontal className='tw-mt-[30px] tw-mb-[12px]' alignItems='center' justifyContent='space-between'>
          <Typography.Sub fontSize='14px' fontWeight={700}>
            Feel new happy 리뷰 ({page.total})
          </Typography.Sub>
          <Flex.Horizontal gap={2}>
            {Array.from({ length: 5 }).map((_, index) => (
              <StartIcon key={index} width={12} height={12} fill={index <= AVERAGE_SCORE - 1} />
            ))}
          </Flex.Horizontal>
        </Flex.Horizontal>
        <Flex.Vertical gap={12}>
          <Flex.Vertical>
            {content && content.length ? (
              content.map((review) => <ReviewCard key={review.reviewNo} review={review} />)
            ) : (
              <ClassEmpty>리뷰를 남겨보세요.</ClassEmpty>
            )}
          </Flex.Vertical>
          <Pagination current={page.current} lastPage={page.lastPage} pageKey='reviewPage' />
        </Flex.Vertical>
      </Flex.Vertical>
    </StyledReview>
  );
}

export default Review;
