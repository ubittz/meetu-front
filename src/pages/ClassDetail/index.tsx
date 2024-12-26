import { UIEventHandler, useEffect, useRef, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import FullLoading from '@@components/FullLoading';
import Header from '@@components/Header';
import { HeaderProps } from '@@components/Header/types';
import Ask from '@@pages/ClassDetail/parts/Ask';
import ClassInfo from '@@pages/ClassDetail/parts/ClassInfo';
import DetailInfo from '@@pages/ClassDetail/parts/DetailInfo';
import EnrollBottomModal from '@@pages/ClassDetail/parts/EnrollBottomModal';
import Review from '@@pages/ClassDetail/parts/Review';
import { useMeetingDetail } from '@@stores/meeting/hooks';
import { appendRecentMeeting } from '@@stores/meeting/reducer';
import { singleResponseToMeeting } from '@@stores/meeting/utils';

const StyledClassDetail = styled(Flex.Vertical)<{ $scrollPadding: number; $imageUrl: string }>`
  height: 100vh;
  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

  .scroll_wrap {
    height: 100vh;
    flex: 1;
    padding-top: ${({ $scrollPadding }) => $scrollPadding}px;
    transition: padding-top 0.8s;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    .body {
      flex: 1;
      border-radius: 40px 40px 0 0;
      background: #fff;
      padding-bottom: 60px;
    }
  }
`;

function ClassDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading } = useMeetingDetail(id ?? '');

  const [paddingTop, setPaddingTop] = useState<number>(0);
  const [headerTheme, setHeaderTheme] = useState<HeaderProps['theme']>('transparent');
  const [visible, setVisible] = useState<boolean>(false);

  const scrollWrapRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);

  const handleChangeTab = (index: number) => {
    if (!tabListRef.current || !scrollWrapRef.current) return;
    const targetNode = tabListRef.current.childNodes[index] as HTMLElement;
    scrollWrapRef.current.scrollTo({ top: targetNode.offsetTop - 52, behavior: 'smooth' });
  };

  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    setHeaderTheme(e.currentTarget.scrollTop > paddingTop ? 'white' : 'transparent');
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleClickEnroll = () => {
    setVisible(true);
  };

  useEffect(() => {
    if (data?.id) {
      dispatch(appendRecentMeeting(singleResponseToMeeting(data)));
    }
  }, [data, dispatch]);

  return (
    <StyledClassDetail $scrollPadding={paddingTop} $imageUrl={data?.imageUrl ?? ''}>
      <FullLoading visible={isLoading} />
      <Header theme={headerTheme} onBack={handleBack} />
      <Flex.Vertical ref={scrollWrapRef} className='scroll_wrap' onScroll={handleScroll}>
        <EnrollBottomModal visible={visible} setVisible={setVisible} />
        <Flex.Vertical className='body' gap={30}>
          <ClassInfo setPaddingTop={setPaddingTop} />
          <Flex.Vertical ref={tabListRef} gap={60}>
            <DetailInfo onChangeTab={handleChangeTab} />
            <Review onChangeTab={handleChangeTab} />
            <Ask onChangeTab={handleChangeTab} />
          </Flex.Vertical>
        </Flex.Vertical>
      </Flex.Vertical>
      <FooterContainer className='tw-bg-white'>
        <Button.Medium onClick={handleClickEnroll}>신청하기</Button.Medium>
      </FooterContainer>
    </StyledClassDetail>
  );
}

export default ClassDetail;
