import { useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import ClassInfo from '@@pages/MyPage/parts/ClassInfo';
import GuideInfo from '@@pages/MyPage/parts/GudieInfo';
import ProfileInfo from '@@pages/MyPage/parts/ProfileInfo';

function MyPage() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <FullScreen navigation>
      <Header onBack={handleClickBack} />
      <Flex.Vertical className='body'>
        <ProfileInfo />
        <ClassInfo />
        <GuideInfo />
      </Flex.Vertical>
    </FullScreen>
  );
}

export default MyPage;
