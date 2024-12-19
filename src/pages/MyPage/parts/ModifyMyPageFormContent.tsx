import { ChangeEventHandler } from 'react';

import { Form, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Modal from '@@components/Modal';
import { useModal } from '@@components/Modal/hooks';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { DefaultUserIcon, PlusIcon } from '@@pages/MyPage/icons';
import ModifyFormInputContent from '@@pages/MyPage/parts/ModifyFormInputContent';
import { ModifyMyInfoForm } from '@@pages/MyPage/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useAppState } from '@@store/hooks';
import { getImageURL } from '@@utils/file';

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

          & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

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

  const me = useAppState((state) => state.auth.me);

  const { values, handleSubmit, setFieldValue, isValid } = useFormikContext<ModifyMyInfoForm>();
  const { visible, setVisible } = useModal();

  const imageURL = getImageURL(values.image);

  const handleChangeProfileImage: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (file && file.size > 1024 * 1024) {
      setVisible(true);
    } else {
      setFieldValue('image', file);
    }
  };

  const handleClickCancel = () => {
    navigate(pathGenerator(PAGES.MY_PAGE));
  };

  const handleConfirm = () => {
    setVisible(false);
  };

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Modal visible={visible} setVisible={setVisible} onConfirm={handleConfirm}>
        1MB 이하의 이미지만 업로드해주세요.
      </Modal>
      <StyledModifyMyPageFormContent>
        <Header onBack={handleClickBack}>
          <Typography.Main fontWeight={600}>회원정보 수정</Typography.Main>
        </Header>
        <Flex.Vertical className='body'>
          <Flex.Horizontal className='modif__profile_info' alignItems='center' gap={12}>
            <label className='modify__image'>
              <input type='file' hidden accept='image/*' onChange={handleChangeProfileImage} size={1024 * 1024} />
              <div className='modify__image__wrap'>{imageURL ? <img src={imageURL} /> : <DefaultUserIcon />}</div>
              <Flex.Horizontal className='modify__image__plus' justifyContent='center' alignItems='center'>
                <PlusIcon />
              </Flex.Horizontal>
            </label>
            <Typography.Main fontSize='20px' fontWeight={700}>
              {me?.name}
            </Typography.Main>
          </Flex.Horizontal>
          <ModifyFormInputContent />
        </Flex.Vertical>
        <FooterContainer gap={12}>
          <Button.Medium theme='outline' onClick={handleClickCancel}>
            취소
          </Button.Medium>
          <Button.Medium type='submit' disabled={!isValid}>
            저장
          </Button.Medium>
        </FooterContainer>
      </StyledModifyMyPageFormContent>
    </Form>
  );
}

export default ModifyMyPageFormContent;
