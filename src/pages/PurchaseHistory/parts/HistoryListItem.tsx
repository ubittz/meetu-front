import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import Image from '@@pages/Home/images/class_4.jpeg';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledHistoryListItem = styled(Flex.Vertical)`
  padding: 16px 12px 20px;
  border-radius: 8px;
  border: 1px solid ${COLORS.LINE_100};

  .item__image {
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

  .item__label {
    flex: 0 0 auto;
    width: 50px;
  }
`;

function HistoryListItem() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(pathGenerator(PAGES.MY_PAGE, '/purchase-history/1'));
  };

  return (
    <StyledHistoryListItem gap={30}>
      <Flex.Horizontal gap={14}>
        <div className='item__image'>
          <img src={Image} alt='History Image' />
        </div>
        <Flex.Vertical gap={12}>
          <Flex.Horizontal gap={10}>
            <Typography.Third className='item__label' fontSize='12px'>
              결제번호
            </Typography.Third>
            <Typography.Sub fontSize='12px'>20020725P074416</Typography.Sub>
          </Flex.Horizontal>
          <Typography.Main fontSize='14px' fontWeight={700}>
            미식가들의 쿠킹 클래스
          </Typography.Main>
          <Flex.Vertical gap={4}>
            <Flex.Horizontal gap={10}>
              <Typography.Third className='item__label' fontSize='12px'>
                결제일자
              </Typography.Third>
              <Typography.Sub fontSize='12px'>2024.07.26</Typography.Sub>
            </Flex.Horizontal>
            <Flex.Horizontal gap={10}>
              <Typography.Third className='item__label' fontSize='12px'>
                결제금액
              </Typography.Third>
              <Typography.Point fontSize='12px' fontWeight={700}>
                50,000원
              </Typography.Point>
            </Flex.Horizontal>
          </Flex.Vertical>
        </Flex.Vertical>
      </Flex.Horizontal>
      <Button.Tiny onClick={handleClick}>결제 상세 보기</Button.Tiny>
    </StyledHistoryListItem>
  );
}

export default HistoryListItem;
