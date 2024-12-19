import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { DefaultUserIcon, InformationIcon, WalletIcon, FaxIcon, ListIcon } from '@@pages/MyPage/icons';
import MenuBox from '@@pages/MyPage/parts/MenuBox';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useAppState } from '@@store/hooks';

const StyledProfileInfo = styled(Flex.Vertical)`
  border-bottom: 6px solid ${COLORS.LINE_100};
  padding: 30px 0;

  .profile_info__image {
    position: relative;

    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid ${COLORS.LINE_100};
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    & > svg {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }

  .profile_info__menu_list {
    overflow-x: scroll;
    padding: 0 20px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

function ProfileInfo() {
  const me = useAppState((state) => state.auth.me);

  return (
    <StyledProfileInfo gap={30}>
      <Flex.Horizontal className='tw-px-[20px]' gap={12}>
        <div className='profile_info__image'>{me?.imageUrl ? <img src={me.imageUrl} /> : <DefaultUserIcon />}</div>
        <Flex.Vertical gap={8}>
          <Typography.Main fontSize='20px' fontWeight={700}>
            {me?.name}
          </Typography.Main>
          <Typography.Sub fontSize='14px'>사용자 한줄 소개글입니다.</Typography.Sub>
        </Flex.Vertical>
      </Flex.Horizontal>
      <Flex.Horizontal className='profile_info__menu_list' gap={8}>
        <MenuBox to={pathGenerator(PAGES.MY_PAGE, '/modify')} icon={<InformationIcon />}>
          내 정보
        </MenuBox>
        <MenuBox to={pathGenerator(PAGES.MY_PAGE, '/purchase-history')} icon={<WalletIcon />}>
          결제 내역
        </MenuBox>
        <MenuBox to={pathGenerator(PAGES.MY_PAGE, '/request-host-register')} icon={<FaxIcon />}>
          호스트 등록 신청
        </MenuBox>
        <MenuBox to={pathGenerator(PAGES.MY_PAGE, '/my-class')} icon={<ListIcon />}>
          내 모임
        </MenuBox>
      </Flex.Horizontal>
    </StyledProfileInfo>
  );
}

export default ProfileInfo;
