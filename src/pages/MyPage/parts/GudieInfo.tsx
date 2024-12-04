import { useDispatch } from 'react-redux';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Modal from '@@components/Modal';
import { useModal } from '@@components/Modal/hooks';
import { GuideIcon, SmallLogoIcon, HeadsetIcon } from '@@pages/MyPage/icons';
import GuideBox from '@@pages/MyPage/parts/GuideBox';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { logout } from '@@stores/auth/reducer';

function GuideInfo() {
  const dispatch = useDispatch();

  const { visible, setVisible } = useModal(false);

  const handleClickLogout = () => {
    setVisible(true);
  };

  const handleConfirmLogout = () => {
    dispatch(logout());
  };

  return (
    <Flex.Vertical className='tw-pt-[30px] tw-px-[20px] tw-pb-[60px]' gap={12}>
      <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirmLogout}>
        로그아웃 하시겠습니까?
      </Modal>
      <GuideBox icon={<GuideIcon />} to={pathGenerator(PAGES.HOME)}>
        모임 만들기 가이드
      </GuideBox>
      <GuideBox icon={<SmallLogoIcon />} to={pathGenerator(PAGES.HOME)}>
        밋유! 새로운 만남, 소소한 행복찾기
      </GuideBox>
      <GuideBox icon={<HeadsetIcon />} to={pathGenerator(PAGES.HOME)}>
        고객센터
      </GuideBox>
      <Button.Large className='tw-mt-[10px]' onClick={handleClickLogout}>
        로그아웃
      </Button.Large>
    </Flex.Vertical>
  );
}

export default GuideInfo;
