import styled from 'styled-components';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import { CLASS_LIST } from '@@pages/Home/constants';
import { HomeLogoIcon } from '@@pages/Home/icons';
import CategoryList from '@@pages/Home/parts/CategoryList';
import ClassBanner from '@@pages/Home/parts/ClassBanner';
import ClassBoxList from '@@pages/Home/parts/ClassBoxList';
import CopyRight from '@@pages/Home/parts/CopyRight';
import MainBanner from '@@pages/Home/parts/MainBanner';
import MoodBanner from '@@pages/Home/parts/MoodBanner';

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
  const handleClickRecommendShowAll = () => {};

  const handleClickHotShowAll = () => {};

  return (
    <StyledHome navigation>
      <Header titleAlign='left' hiddenBack>
        <HomeLogoIcon />
      </Header>
      <Flex.Vertical className='body' gap={30}>
        <MainBanner />
        <CategoryList />
        <MoodBanner />
        <Flex.Vertical gap={40}>
          <ClassBoxList title='카테고리 별 추천 모임' classList={CLASS_LIST} onClickShowAll={handleClickRecommendShowAll} />
          <ClassBoxList title='지금 핫한 모임' classList={CLASS_LIST} onClickShowAll={handleClickHotShowAll} />
        </Flex.Vertical>
        <ClassBanner />
        <Flex.Vertical gap={40}>
          <ClassBoxList title='방금 만들어진 새로운 모임' classList={CLASS_LIST} />
          <ClassBoxList title='실시간 인기 모임' classList={CLASS_LIST} />
        </Flex.Vertical>
        <CopyRight />
      </Flex.Vertical>
    </StyledHome>
  );
}

export default Home;
