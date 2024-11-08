import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import Image from '@@pages/Home/images/class_4.jpeg';

const StyledClassInfo = styled.div`
  padding: 30px 20px;
  border: 6px solid ${COLORS.LINE_100};

  .class_info__card {
    border-radius: 8px;
    background: #f8f8f8;
    padding: 16px 12px 20px;

    .class_info__image {
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

    .class_ingo__label {
      flex: 0 0 auto;
      width: 50px;
    }
  }
`;

function ClassInfo() {
  return (
    <StyledClassInfo>
      <Flex.Horizontal className='class_info__card' gap={14} alignItems='center'>
        <div className='class_info__image'>
          <img src={Image} alt='Class Image' />
        </div>
        <Flex.Vertical gap={12}>
          <Flex.Horizontal gap={10}>
            <Typography.Third className='class_ingo__label' fontSize='12px'>
              주문번호
            </Typography.Third>
            <Typography.Sub fontSize='12px'>20020725P074416</Typography.Sub>
          </Flex.Horizontal>
          <Typography.Main fontSize='14px' fontWeight={700}>
            미식가들의 쿠킹 클래스
          </Typography.Main>
          <Flex.Horizontal gap={10}>
            <Typography.Third className='class_ingo__label' fontSize='12px'>
              주문일자
            </Typography.Third>
            <Typography.Sub fontSize='12px'>2024. 07. 26</Typography.Sub>
          </Flex.Horizontal>
        </Flex.Vertical>
      </Flex.Horizontal>
    </StyledClassInfo>
  );
}

export default ClassInfo;
