import { Form, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import FullScreen from '@@components/FullScreen';
import InputFormGroup from '@@components/InputFormGroup';
import SignTitle from '@@components/SignTitle';
import { ResetPasswordForm } from '@@pages/FindAccount/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledFindIdFormContent = styled(FullScreen)`
  .body {
    padding: 40px 20px;
  }
`;

function ResetPasswordFormContent() {
  const navigate = useNavigate();

  const { getFieldProps, handleSubmit, errors, isValid } = useFormikContext<ResetPasswordForm>();

  const handleClickSkip = () => {
    navigate(pathGenerator(PAGES.LOGIN));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledFindIdFormContent>
        <Flex.Vertical className='body'>
          <SignTitle title='비밀번호 재설정'>
            비밀번호 재설정을 통해 새로운 비밀번호를
            <br />
            설정해주세요.
          </SignTitle>
          <Flex.Vertical gap={8}>
            <InputFormGroup
              label='비밀번호'
              inputProps={{
                ...getFieldProps('password'),
                placeholder: '비밀번호를 입력해주세요',
                type: 'password',
              }}
              errorMessage={errors.password}
            />
            <InputFormGroup
              inputProps={{
                ...getFieldProps('passwordCheck'),
                placeholder: '비밀번호를 한번 더 입력해주세요.',
                type: 'password',
              }}
              errorMessage={errors.passwordCheck}
            />
          </Flex.Vertical>
        </Flex.Vertical>
        <FooterContainer gap={12}>
          <Button.Medium theme='outline' type='button' onClick={handleClickSkip}>
            다음에 변경
          </Button.Medium>
          <Button.Medium type='submit' disabled={!isValid}>
            비밀번호 재설정
          </Button.Medium>
        </FooterContainer>
      </StyledFindIdFormContent>
    </Form>
  );
}

export default ResetPasswordFormContent;
