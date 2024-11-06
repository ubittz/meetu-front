import { UIEventHandler, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import Header from '@@components/Header';
import { HeaderProps } from '@@components/Header/types';
import ClassInfo from '@@pages/ClassDetail/parts/ClassInfo';
import Background from '@@pages/Home/images/class_4.jpeg';

import Ask from './parts/Ask';
import DetailInfo from './parts/DetailInfo';
import Review from './parts/Review';

const StyledClassDetail = styled(Flex.Vertical)<{ $scrollPadding: number }>`
  height: 100vh;
  background-image: url(${Background});
  background-attachment: fixed;
  background-size: cover;

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
  const navigate = useNavigate();

  const [paddingTop, setPaddingTop] = useState<number>(0);
  const [headerTheme, setHeaderTheme] = useState<HeaderProps['theme']>('transparent');

  const scrollWrapRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);

  const handleChangeTab = (index: number) => {
    if (!tabListRef.current || !scrollWrapRef.current) return;
    const targetNode = tabListRef.current.childNodes[index] as HTMLElement;
    scrollWrapRef.current.scrollTo({ top: targetNode.offsetTop, behavior: 'smooth' });
  };

  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    setHeaderTheme(e.currentTarget.scrollTop > paddingTop ? 'white' : 'transparent');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <StyledClassDetail $scrollPadding={paddingTop}>
      <Header theme={headerTheme} onBack={handleBack} />
      <Flex.Vertical ref={scrollWrapRef} className='scroll_wrap' onScroll={handleScroll}>
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
        <Button.Medium>신청하기</Button.Medium>
      </FooterContainer>
    </StyledClassDetail>
  );
}

export default ClassDetail;
