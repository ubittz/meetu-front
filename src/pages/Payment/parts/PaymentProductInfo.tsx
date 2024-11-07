import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { CLASS_LIST } from '@@pages/Home/constants';

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

  const product = CLASS_LIST.find((classItem) => classItem.id === +(id ?? 0));

  if (!product) return;

  return (
    <StyledPaymentProductInfo gap={20}>
      <Flex.Horizontal gap={10} alignItems='center'>
        <div className='product_info__image'>
          <img src={product.image} alt='Product Image' />
        </div>
        <Flex.Vertical gap={4}>
          <Typography.Main fontWeight={700}>{product.title}</Typography.Main>
          <Typography.Sub fontWeight={700} fontSize='14px'>
            김탁구
          </Typography.Sub>
        </Flex.Vertical>
      </Flex.Horizontal>
      <Flex.Horizontal justifyContent='space-between'>
        <Typography.Sub fontSize='14px'>주소</Typography.Sub>
        <Typography.Main fontSize='14px' fontWeight={700}>
          서울특별시 강남구 도산대로 17-8
        </Typography.Main>
      </Flex.Horizontal>
    </StyledPaymentProductInfo>
  );
}

export default PaymentProductInfo;
