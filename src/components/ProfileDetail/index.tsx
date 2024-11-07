import { UIEventHandler, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Header from '@@components/Header';
import { HeaderProps } from '@@components/Header/types';
import { ACCOUNT_TYPE } from '@@components/ProfileDetail/constants';
import Profile from '@@components/ProfileDetail/images/profile_image.jpeg';
import ProfileClassList from '@@components/ProfileDetail/parts/ProfileClassList';
import ProfileInfo from '@@components/ProfileDetail/parts/ProfileInfo';
import ProfileReviewList from '@@components/ProfileDetail/parts/ProfileReviewList';
import { AccountType } from '@@components/ProfileDetail/types';

const StyledProfileDetail = styled(Flex.Vertical)<{ $profileImage: string; $scrollPadding: number }>`
  height: 100vh;
  background-image: url(${({ $profileImage }) => $profileImage});
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

function ProfileDetail({ accountType = ACCOUNT_TYPE.HOST }: { accountType?: AccountType }) {
  const navigate = useNavigate();

  const [paddingTop, setPaddingTop] = useState<number>(0);
  const [headerTheme, setHeaderTheme] = useState<HeaderProps['theme']>('transparent');

  const scrollWrapRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);

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
    <StyledProfileDetail $scrollPadding={paddingTop} $profileImage={Profile}>
      <Header theme={headerTheme} onBack={handleBack} />
      <Flex.Vertical ref={scrollWrapRef} className='scroll_wrap' onScroll={handleScroll}>
        <Flex.Vertical className='body' gap={30}>
          <ProfileInfo accountType={accountType} setPaddingTop={setPaddingTop} />
          <Flex.Vertical ref={tabListRef} gap={60}>
            <ProfileClassList accountType={accountType} onChangeTab={handleChangeTab} />
            {/* @ts-ignore 나중에 State로 변경하면 발생하지 않을 에러 */}
            {accountType === ACCOUNT_TYPE.HOST && <ProfileReviewList accountType={accountType} onChangeTab={handleChangeTab} />}
          </Flex.Vertical>
        </Flex.Vertical>
      </Flex.Vertical>
    </StyledProfileDetail>
  );
}

export default ProfileDetail;
