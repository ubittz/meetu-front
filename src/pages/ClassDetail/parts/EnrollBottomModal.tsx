import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import BottomModal from '@@components/BottomModal';
import { BottomModalProps } from '@@components/BottomModal/types';
import Button from '@@components/Button';
import CheckBox from '@@components/CheckBox';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import Image from '@@pages/Home/images/class_4.jpeg';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledEnrollBottomModalBody = styled(Flex.Vertical)`
  padding-top: 20px;
  .enroll__top {
    padding: 0 20px 40px;
    border-bottom: 1px solid ${COLORS.LINE_100};

    .enroll__info_content {
      & > p:first-child {
        width: 68px;
        flex: 0 0 auto;
      }
    }

    .enroll__image {
      width: 80px;
      height: 80px;
      border: 1px solid ${COLORS.LINE_100};
      border-radius: 6px;
      overflow: hidden;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

function EnrollBottomModal(props: Omit<BottomModalProps, 'title'>) {
  const navigate = useNavigate();

  const { id } = useParams();

  const handleClickEnroll = () => {
    navigate(pathGenerator(PAGES.PAYMENT, `/${id}`));
  };

  return (
    <BottomModal {...props}>
      <StyledEnrollBottomModalBody>
        <Flex.Vertical className='enroll__top' gap={12}>
          <Flex.Horizontal gap={10}>
            <div className='enroll__image'>
              <img src={Image} alt='Class Image' />
            </div>
            <Flex.Vertical gap={8}>
              <Typography.Main fontSize='20px' fontWeight={700}>
                미식가들의 쿠킹 클래스
              </Typography.Main>
              <Typography.Sub fontWeight={700}>김탁구</Typography.Sub>
            </Flex.Vertical>
          </Flex.Horizontal>
          <Flex.Vertical gap={12}>
            <Flex.Horizontal className='enroll__info_content' gap={12}>
              <Typography.Third fontSize='14px' fontWeight={700}>
                주소
              </Typography.Third>
              <Typography.Main fontSize='14px'>서울특별시 강남구 도산대로 17-8</Typography.Main>
            </Flex.Horizontal>
            <Flex.Horizontal className='enroll__info_content' gap={12}>
              <Typography.Third fontSize='14px' fontWeight={700}>
                진행일
              </Typography.Third>
              <Typography.Main fontSize='14px'>2024년 12월 26일</Typography.Main>
            </Flex.Horizontal>
            <Flex.Horizontal className='enroll__info_content' gap={12}>
              <Typography.Third fontSize='14px' fontWeight={700}>
                가격
              </Typography.Third>
              <Typography.Point fontSize='14px' fontWeight={700}>
                50,000원
              </Typography.Point>
            </Flex.Horizontal>
          </Flex.Vertical>
        </Flex.Vertical>
        <Flex.Horizontal className='tw-mt-[20px] tw-mb-[30px] tw-px-[20px]'>
          <CheckBox>
            <Typography.Main fontWeight={700}>밋유 모임 약관에 동의합니다.</Typography.Main>
          </CheckBox>
        </Flex.Horizontal>
        <FooterContainer>
          <Button.Medium onClick={handleClickEnroll}>신청하기</Button.Medium>
        </FooterContainer>
      </StyledEnrollBottomModalBody>
    </BottomModal>
  );
}

export default EnrollBottomModal;
