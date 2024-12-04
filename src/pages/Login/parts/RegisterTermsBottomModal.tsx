import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import BlankBox from '@@components/BlankBox';
import BottomModal from '@@components/BottomModal';
import Button from '@@components/Button';
import CheckBox from '@@components/CheckBox';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import TermsBottomModal from '@@components/TermsBottomModal';
import { TERMS_TYPE } from '@@components/TermsBottomModal/constants';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { TermsRightArrowIcon } from '@@constants/icons';
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

const TERMS_COUNT = 1;

function RegisterTermsBottomModal({ visible, setVisible }: { visible: boolean; setVisible: (visible: boolean) => void }) {
  const navigate = useNavigate();

  const [termsVisible, setTermsVisible] = useState(false);
  const [checkList, setCheckList] = useState<boolean[]>([false]);

  const handleClickNext = () => {
    navigate(pathGenerator(PAGES.REGISTER));
  };

  const handleClickShowTerms = () => {
    setTermsVisible(true);
  };

  const handleChagneAllAgreement = () => {
    const value = checkList.filter((v) => v).length < TERMS_COUNT;
    const newCheckList = Array.from({ length: TERMS_COUNT }, () => value);
    setCheckList(newCheckList);
  };

  const handleChangeAgreement = (index: number, checked: boolean) => {
    const newCheckList = [...checkList];
    newCheckList[index] = checked;
    setCheckList(newCheckList);
  };

  return (
    <BottomModal visible={visible} setVisible={setVisible} title='약관 동의'>
      <TermsBottomModal visible={termsVisible} setVisible={setTermsVisible} type={TERMS_TYPE.PRIVACY} />
      <StyledBody gap={20}>
        <Flex.Vertical gap={8}>
          <CheckBox checked={checkList.filter((check) => check).length === TERMS_COUNT} onChange={handleChagneAllAgreement}>
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
          <Flex.Horizontal justifyContent='space-between'>
            <CheckBox
              checked={checkList[0]}
              onChange={(e) => {
                handleChangeAgreement(0, e.target.checked);
              }}
            >
              <Flex.Horizontal justifyContent='space-between' alignItems='center' flex='1'>
                <Typography.Third>개인정보 수집 및 이용동의(필수)</Typography.Third>
              </Flex.Horizontal>
            </CheckBox>
            <Flex.Horizontal gap={2} alignItems='center' onClick={handleClickShowTerms}>
              <Typography.Third fontSize='12px'>보기</Typography.Third>
              <TermsRightArrowIcon />
            </Flex.Horizontal>
          </Flex.Horizontal>
        </Flex.Vertical>
      </StyledBody>
      <FooterContainer>
        <Button.Medium disabled={checkList.filter((v) => v).length < TERMS_COUNT} onClick={handleClickNext}>
          다음
        </Button.Medium>
      </FooterContainer>
    </BottomModal>
  );
}

export default RegisterTermsBottomModal;
