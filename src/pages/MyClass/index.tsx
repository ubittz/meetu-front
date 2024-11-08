import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import { ACCOUNT_TYPE } from '@@components/ProfileDetail/constants';
import Tab from '@@components/Tab';
import Typography from '@@components/Typography';
import { CLASS_LIST } from '@@pages/Home/constants';
import ContentTabContent from '@@pages/MyClass/parts/ClassTabContent';

const TAB_LIST = ['전체', '진행예정', '모임확정', '진행완료'];

function MyClass() {
  const navigate = useNavigate();
  const accountType = ACCOUNT_TYPE.HOST;

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <FullScreen>
      <Header onBack={handleClickBack}>
        <Typography.Main fontWeight={600}>내 모임</Typography.Main>
      </Header>
      <Flex.Vertical className='body tw-pb-[60px]' gap={20}>
        <Typography.Main className='tw-mx-[20px] tw-mt-[12px]' fontWeight={700} fontSize='20px'>
          총{' '}
          <Typography.Point fontWeight='inherit' fontSize='inherit' as='span'>
            N
          </Typography.Point>
          개
        </Typography.Main>
        <Tab itemList={TAB_LIST} selectedIndex={selectedIndex} onChange={(index) => setSelectedIndex(index)}>
          <ContentTabContent classList={CLASS_LIST} />
          <ContentTabContent classList={CLASS_LIST} />
          <ContentTabContent classList={CLASS_LIST} />
          <ContentTabContent classList={CLASS_LIST} />
        </Tab>
      </Flex.Vertical>
      {accountType === ACCOUNT_TYPE.HOST && (
        <FooterContainer>
          <Button.Medium>모임 만들기</Button.Medium>
        </FooterContainer>
      )}
    </FullScreen>
  );
}

export default MyClass;
