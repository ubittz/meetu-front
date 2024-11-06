import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledCopyRight = styled(Flex.Vertical)`
  border-top: 1px solid ${COLORS.LINE_100};
  margin: 0 20px;
  padding: 23px 0 40px;
`;

function CopyRight() {
  return (
    <StyledCopyRight gap={20}>
      <Typography.Main fontSize='14px' fontWeight={700}>
        새로운 만남 소소한 행복찾기,
        <br />
        밋유
      </Typography.Main>
      <Flex.Vertical gap={6}>
        <Flex.Horizontal gap={8}>
          <Typography.Third fontSize='10px'>(주)루나스타</Typography.Third>
          <Typography.Third fontSize='10px'>대표이사 송정원</Typography.Third>
        </Flex.Horizontal>
        <Typography.Third fontSize='10px'>경기도 이천시 애련청로 67-39, 1024호</Typography.Third>
        <Typography.Third fontSize='10px'>사업자등록번호 : 698-30-01098</Typography.Third>
      </Flex.Vertical>
      <Flex.Vertical gap={6}>
        <Flex.Horizontal gap={8}>
          <Typography.Third fontSize='10px'>고객센터</Typography.Third>
          <Typography.Third fontSize='10px'>010-7569-3507</Typography.Third>
        </Flex.Horizontal>
        <Flex.Horizontal gap={8}>
          <Typography.Third fontSize='10px'>이메일</Typography.Third>
          <Typography.Third fontSize='10px'>lunastarbeauty@naver.com</Typography.Third>
        </Flex.Horizontal>
        <Flex.Horizontal gap={8}>
          <Typography.Third fontSize='10px'>운영시간</Typography.Third>
          <Typography.Third fontSize='10px'>평일 09:00 ~ 18:00</Typography.Third>
        </Flex.Horizontal>
      </Flex.Vertical>
    </StyledCopyRight>
  );
}

export default CopyRight;
