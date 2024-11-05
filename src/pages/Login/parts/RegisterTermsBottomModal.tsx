import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import BlankBox from '@@components/BlankBox';
import BottomModal from '@@components/BottomModal';
import Button from '@@components/Button';
import CheckBox from '@@components/CheckBox';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { TermsRightArrowIcon } from '@@pages/Login/icons';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledBody = styled(Flex.Vertical)`
  padding: 24px 20px 40px;
  .divider {
    height: 1px;
    width: 100%;
    background: ${COLORS.LINE_100};
  }
`;

function RegisterTermsBottomModal({ visible, setVisible }: { visible: boolean; setVisible: (visible: boolean) => void }) {
  const navigate = useNavigate();

  const handleClickNext = () => {
    navigate(pathGenerator(PAGES.REGISTER));
  };

  return (
    <BottomModal visible={visible} setVisible={setVisible} title='약관 동의'>
      <StyledBody gap={20}>
        <Flex.Vertical gap={8}>
          <CheckBox>
            <Typography.Main fontWeight={700}>모든 약관에 동의합니다.</Typography.Main>
          </CheckBox>
          <Flex.Horizontal gap={8}>
            <BlankBox width={20} />
            <Typography.Third fontSize='12px'>
              대상: 이용약관(필수), 개인정보 수집 및 이용(필수), 개인정보 취급위탁(선택), 마케팅정보활용(선택)
            </Typography.Third>
          </Flex.Horizontal>
        </Flex.Vertical>
        <div className='divider' />
        <Flex.Vertical gap={20}>
          <CheckBox>
            <Flex.Horizontal justifyContent='space-between' alignItems='center' flex='1'>
              <Typography.Third>이용약관 동의(필수)</Typography.Third>
              <Flex.Horizontal gap={2} alignItems='center'>
                <Typography.Third fontSize='12px'>보기</Typography.Third>
                <TermsRightArrowIcon />
              </Flex.Horizontal>
            </Flex.Horizontal>
          </CheckBox>
          <CheckBox>
            <Flex.Horizontal justifyContent='space-between' alignItems='center' flex='1'>
              <Typography.Third>개인정보 수집 및 이용 동의(필수)</Typography.Third>
              <Flex.Horizontal gap={2} alignItems='center'>
                <Typography.Third fontSize='12px'>보기</Typography.Third>
                <TermsRightArrowIcon />
              </Flex.Horizontal>
            </Flex.Horizontal>
          </CheckBox>
          <CheckBox>
            <Flex.Horizontal justifyContent='space-between' alignItems='center' flex='1'>
              <Typography.Third>개인정보 취급위탁 동의(선택)</Typography.Third>
              <Flex.Horizontal gap={2} alignItems='center'>
                <Typography.Third fontSize='12px'>보기</Typography.Third>
                <TermsRightArrowIcon />
              </Flex.Horizontal>
            </Flex.Horizontal>
          </CheckBox>
          <CheckBox>
            <Flex.Horizontal justifyContent='space-between' alignItems='center' flex='1'>
              <Typography.Third>마케팅정보 활용 동의(선택)</Typography.Third>
              <Flex.Horizontal gap={2} alignItems='center'>
                <Typography.Third fontSize='12px'>보기</Typography.Third>
                <TermsRightArrowIcon />
              </Flex.Horizontal>
            </Flex.Horizontal>
          </CheckBox>
        </Flex.Vertical>
      </StyledBody>
      <FooterContainer>
        <Button.Medium onClick={handleClickNext}>다음</Button.Medium>
      </FooterContainer>
    </BottomModal>
  );
}

export default RegisterTermsBottomModal;
