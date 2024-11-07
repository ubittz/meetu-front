import Flex from '@@components/Flex';
import { GuideIcon, SmallLogoIcon, HeadsetIcon } from '@@pages/MyPage/icons';
import GuideBox from '@@pages/MyPage/parts/GuideBox';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function GuideInfo() {
  return (
    <Flex.Vertical className='tw-pt-[30px] tw-px-[20px] tw-pb-[60px]' gap={12}>
      <GuideBox icon={<GuideIcon />} to={pathGenerator(PAGES.HOME)}>
        모임 만들기 가이드
      </GuideBox>
      <GuideBox icon={<SmallLogoIcon />} to={pathGenerator(PAGES.HOME)}>
        밋유! 새로운 만남, 소소한 행복찾기
      </GuideBox>
      <GuideBox icon={<HeadsetIcon />} to={pathGenerator(PAGES.HOME)}>
        고객센터
      </GuideBox>
    </Flex.Vertical>
  );
}

export default GuideInfo;
