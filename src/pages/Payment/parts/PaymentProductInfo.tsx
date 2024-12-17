import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import Class1Image from '@@pages/Home/images/class_1.png';
import { useMeetingDetail } from '@@stores/meeting/hooks';

const StyledPaymentProductInfo = styled(Flex.Vertical)`
  .product_info__image {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    border: 1px solid ${COLORS.LINE_100};
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

function PaymentProductInfo() {
  const { id } = useParams();

  const { data } = useMeetingDetail(id ?? '');

  if (!data) return;

  return (
    <StyledPaymentProductInfo gap={20}>
      <Flex.Horizontal gap={10} alignItems='center'>
        <div className='product_info__image'>
          <img src={Class1Image} alt='Product Image' />
        </div>
        <Flex.Vertical gap={4}>
          <Typography.Main fontWeight={700}>{data.name}</Typography.Main>
          <Typography.Sub fontWeight={700} fontSize='14px'>
            {data.hostName}
          </Typography.Sub>
        </Flex.Vertical>
      </Flex.Horizontal>
      <Flex.Horizontal justifyContent='space-between'>
        <Typography.Sub fontSize='14px'>주소</Typography.Sub>
        <Typography.Main fontSize='14px' fontWeight={700}>
          {data.address}
        </Typography.Main>
      </Flex.Horizontal>
    </StyledPaymentProductInfo>
  );
}

export default PaymentProductInfo;
