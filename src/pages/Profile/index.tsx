import { UIEventHandler, useRef, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import FullLoading from '@@components/FullLoading';
import Header from '@@components/Header';
import { HeaderProps } from '@@components/Header/types';
import ProfileClassList from '@@pages/Profile/parts/ProfileClassList';
import ProfileInfo from '@@pages/Profile/parts/ProfileInfo';
import ProfileReviewList from '@@pages/Profile/parts/ProfileReviewList';
import { useUserDetail } from '@@stores/user/hooks';

const StyledProfileDetail = styled(Flex.Vertical)<{ $profileImage: string; $scrollPadding: number }>`
  height: 100vh;
  background-image: url(${({ $profileImage }) => $profileImage});
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

function Profile() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [paddingTop, setPaddingTop] = useState<number>(0);
  const [headerTheme, setHeaderTheme] = useState<HeaderProps['theme']>('transparent');

  const scrollWrapRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);

  const { data, isLoading } = useUserDetail(id ?? '');

  const handleChangeTab = (index: number) => {
    if (!tabListRef.current || !scrollWrapRef.current) return;
    const targetNode = tabListRef.current.childNodes[index] as HTMLElement;
    scrollWrapRef.current.scrollTo({ top: targetNode.offsetTop - 52, behavior: 'smooth' });
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    setHeaderTheme(e.currentTarget.scrollTop > paddingTop ? 'white' : 'transparent');
  };

  return (
    <StyledProfileDetail $scrollPadding={paddingTop} $profileImage={data?.imageUrl ?? ''}>
      <Header theme={headerTheme} onBack={handleBack} />
      {!data && isLoading ? (
        <FullLoading visible />
      ) : (
        <Flex.Vertical ref={scrollWrapRef} className='scroll_wrap' onScroll={handleScroll}>
          <Flex.Vertical className='body' gap={30}>
            <ProfileInfo setPaddingTop={setPaddingTop} />
            <Flex.Vertical ref={tabListRef} gap={60}>
              <ProfileClassList onChangeTab={handleChangeTab} />
              {data?.isHost && <ProfileReviewList onChangeTab={handleChangeTab} />}
            </Flex.Vertical>
          </Flex.Vertical>
        </Flex.Vertical>
      )}
    </StyledProfileDetail>
  );
}

export default Profile;
