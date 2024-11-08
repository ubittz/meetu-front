import { Form, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { DefaultUserIcon, PlusIcon } from '@@pages/MyPage/icons';
import ModifyFormInputContent from '@@pages/MyPage/parts/ModifyFormInputContent';
import { ModifyMyInfoForm } from '@@pages/MyPage/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledModifyMyPageFormContent = styled(FullScreen)`
  .body {
    padding-bottom: 60px;

    .modif__profile_info {
      padding: 30px 20px;
      border-bottom: 6px solid ${COLORS.LINE_100};

      .modify__image {
        position: relative;
        width: 60px;
        height: 60px;

        .modify__image__wrap {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1px solid ${COLORS.LINE_100};
          overflow: hidden;

          & > svg {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        }

        .modify__image__plus {
          position: absolute;
          bottom: 0;
          right: 0;

          width: 20px;
          height: 20px;
          background: #d9d9d9;
          border-radius: 50%;
        }
      }
    }
  }
`;

function ModifyMyPageFormContent() {
  const navigate = useNavigate();

  const { handleSubmit } = useFormikContext<ModifyMyInfoForm>();

  const handleClickCancel = () => {
    navigate(pathGenerator(PAGES.MY_PAGE));
  };

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledModifyMyPageFormContent>
        <Header onBack={handleClickBack}>
          <Typography.Main fontWeight={600}>회원정보 수정</Typography.Main>
        </Header>
        <Flex.Vertical className='body'>
          <Flex.Horizontal className='modif__profile_info' alignItems='center' gap={12}>
            <div className='modify__image'>
              <div className='modify__image__wrap'>
                <DefaultUserIcon />
              </div>
              <Flex.Horizontal className='modify__image__plus' justifyContent='center' alignItems='center'>
                <PlusIcon />
              </Flex.Horizontal>
            </div>
            <Typography.Main fontSize='20px' fontWeight={700}>
              사용자명
            </Typography.Main>
          </Flex.Horizontal>
          <ModifyFormInputContent />
        </Flex.Vertical>
        <FooterContainer gap={12}>
          <Button.Medium theme='outline' onClick={handleClickCancel}>
            취소
          </Button.Medium>
          <Button.Medium type='submit'>저장</Button.Medium>
        </FooterContainer>
      </StyledModifyMyPageFormContent>
    </Form>
  );
}

export default ModifyMyPageFormContent;
