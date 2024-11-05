import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import Background from '@@pages/Home/images/mood_banner.jpeg';

const StyledMoodBanner = styled(Flex.Horizontal)`
  position: relative;
  padding: 0 20px;
  height: 80px;

  overflow: hidden;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 498px;
    height: 367px;
    background-size: cover;
    top: 50%;
    left: 50%;

    background-image: url(${Background});
    transform: translateX(-50%) translateY(-30%);
    z-index: -2;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.5046612394957983) 0%, rgba(102, 102, 102, 0) 100%);
    z-index: -1;
  }
`;

function MoodBanner() {
  return (
    <StyledMoodBanner alignItems='center'>
      <Typography.White fontSize='14px' fontWeight={700}>
        <Typography.Point as='span' fontSize='inherit' fontWeight='inherit'>
          무드
        </Typography.Point>
        를 선택하고,
        <Typography.Point as='span' fontSize='inherit' fontWeight='inherit'>
          경험
        </Typography.Point>
        을 즐기세요.
      </Typography.White>
    </StyledMoodBanner>
  );
}

export default MoodBanner;
