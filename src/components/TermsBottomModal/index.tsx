import styled from 'styled-components';

import BottomModal from '@@components/BottomModal';
import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import { TermsBottomModalProps } from '@@components/TermsBottomModal/types';

import { TERMS_TYPE_CONTENT, TERMS_TYPE_TITLE } from './constants';

const StyledBody = styled(Flex.Vertical)`
  .terms_bottom_modal__content {
    font-size: 12px;

    padding: 24px 20px 40px;
    flex: 1;

    .terms__list_first {
      font-weight: bold;
    }

    .terms__list_second {
      padding-left: 15px;
    }

    .terms__list_third {
      padding-left: 30px;
    }

    .terms__list_fourth {
      padding-left: 45px;
    }

    ul > li {
      list-style: circle;
    }

    ol > li {
      list-style: auto;
    }

    h3 {
      font-size: 14px;
      font-weight: bold;
    }

    h4 {
      font-weight: bold;
    }
  }
`;

function TermsBottomModal({ visible, setVisible, type }: TermsBottomModalProps) {
  const handleClickConfirm = () => {
    setVisible(false);
  };

  return (
    <BottomModal visible={visible} setVisible={setVisible} title={TERMS_TYPE_TITLE[type]}>
      <StyledBody>
        <Flex.Vertical className='terms_bottom_modal__content'>{TERMS_TYPE_CONTENT[type]}</Flex.Vertical>
        <FooterContainer>
          <Button.Medium onClick={handleClickConfirm}>확인</Button.Medium>
        </FooterContainer>
      </StyledBody>
    </BottomModal>
  );
}

export default TermsBottomModal;
