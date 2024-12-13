import { useState } from 'react';

import styled from 'styled-components';

import ClassBoxList from '@@components/ClassBoxList';
import Flex from '@@components/Flex';
import FullLoading from '@@components/FullLoading';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import { MEETING_ORDER_TYPE } from '@@pages/Home/constants';
import { useMeetingListByFilter, useMeetingListByLastMonth } from '@@pages/Home/hooks';
import { HomeLogoIcon } from '@@pages/Home/icons';
import CategoryList from '@@pages/Home/parts/CategoryList';
import ClassBanner from '@@pages/Home/parts/ClassBanner';
import CopyRight from '@@pages/Home/parts/CopyRight';
import MainBanner from '@@pages/Home/parts/MainBanner';
import MeetingByCategory from '@@pages/Home/parts/MeetingByCategory';
import MoodBanner from '@@pages/Home/parts/MoodBanner';
import { Category } from '@@pages/Home/types';

const StyledHome = styled(FullScreen)`
  .body {
    overflow-x: hidden;
    padding-top: 20px;

    & > div {
      flex: 0 0 auto;
    }
  }
`;

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>();

  const { content: contentByCategory, isLoading: categoryLoading } = useMeetingListByFilter({
    page: 0,
    category: selectedCategory,
    orderType: 'LATEST',
  });

  const { content: contentByRequest, isLoading: requestLoading } = useMeetingListByFilter({
    page: 0,
    orderType: MEETING_ORDER_TYPE.REQUEST_COUNT,
  });

  const { content: contentByLatest, isLoading: latestLoading } = useMeetingListByFilter({
    page: 0,
    orderType: MEETING_ORDER_TYPE.LATEST,
  });

  const { content: contentByLastMonth, isLoading: lastMonthLoading } = useMeetingListByLastMonth();

  const handleClickHotShowAll = () => {};

  const isLoading = categoryLoading || requestLoading || latestLoading || lastMonthLoading;

  return (
    <StyledHome navigation>
      <FullLoading visible={isLoading} />
      <Header titleAlign='left' hiddenBack>
        <HomeLogoIcon />
      </Header>
      <Flex.Vertical className='body' gap={30}>
        <MainBanner />
        <CategoryList />
        <MoodBanner />
        <Flex.Vertical gap={40}>
          <MeetingByCategory meetingList={contentByCategory ?? []} category={selectedCategory} setCategory={setSelectedCategory} />
          <ClassBoxList title='지금 핫한 모임' meetingList={contentByRequest ?? []} onClickShowAll={handleClickHotShowAll} />
        </Flex.Vertical>
        <ClassBanner />
        <Flex.Vertical gap={40}>
          <ClassBoxList title='방금 만들어진 새로운 모임' meetingList={contentByLatest ?? []} />
          <ClassBoxList title='실시간 인기 모임' meetingList={contentByLastMonth ?? []} />
        </Flex.Vertical>
        <CopyRight />
      </Flex.Vertical>
    </StyledHome>
  );
}

export default Home;
