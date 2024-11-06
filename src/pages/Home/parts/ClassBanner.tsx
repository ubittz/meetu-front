import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import Background from '@@pages/Home/images/class_banner_background.png';

const StyledClassBanner = styled(Flex.Horizontal)`
  height: 80px;
  background-image: url(${Background});
  background-size: cover;
  padding: 0 20px;
`;

function ClassBanner() {
  return (
    <StyledClassBanner alignItems='center'>
      <Typography.White fontWeight={700}>
        참여하고 싶은 모임이 있다면?
        <br />
        모임을 직접 개설해보세요!
      </Typography.White>
    </StyledClassBanner>
  );
}

export default ClassBanner;
