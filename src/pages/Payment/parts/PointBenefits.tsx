import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';

const StyledPointBenefits = styled(Flex.Vertical)`
  .point_benefits__receipt {
    padding: 18px 16px;
    background: #fff6f1;
  }
`;

function PointBenefits() {
  return (
    <StyledPointBenefits gap={20}>
      <Flex.Vertical className='point_benefits__receipt' gap={8}>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>주문 기본 적립</Typography.Sub>
          <Typography.Sub fontSize='14px'>0p</Typography.Sub>
        </Flex.Horizontal>
        <Flex.Horizontal justifyContent='space-between'>
          <Typography.Sub fontSize='14px'>리뷰 작성적립(예상)</Typography.Sub>
          <Typography.Sub fontSize='14px'>0p</Typography.Sub>
        </Flex.Horizontal>
      </Flex.Vertical>
      <Flex.Horizontal justifyContent='space-between' alignItems='center'>
        <Typography.Main fontWeight={700} fontSize='14px'>
          합계
        </Typography.Main>
        <Typography.Point fontWeight={700} fontSize='20px'>
          0P
        </Typography.Point>
      </Flex.Horizontal>
    </StyledPointBenefits>
  );
}

export default PointBenefits;
