import { Field, FieldProps, Form, useFormikContext } from 'formik';
import styled from 'styled-components';

import CheckBox from '@@components/CheckBox';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { createContactSuccess } from '@@stores/meeting/reducer';
import { ContactAddDTO } from '@@stores/meeting/types';

const StyledAskInput = styled(Form)`
  display: flex;
  align-items: center;
  gap: 2px;

  border: 1px solid ${COLORS.LINE_100};
  border-radius: 4px;
  height: 42px;

  padding: 0 10px;

  & > input {
    flex: 1;
    outline: none;
    border: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3em;
    color: ${COLORS.TEXT_100};

    &::placeholder {
      color: ${COLORS.TEXT_400};
    }
  }

  & > button {
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    color: ${COLORS.TEXT_200};
    line-height: 1.3em;
  }
`;

function AskInput({ setSuccessVisible }: { setSuccessVisible: (visible: boolean) => void }) {
  const { handleSubmit, getFieldProps, isValid, resetForm } = useFormikContext<ContactAddDTO>();

  useActionSubscribe({
    type: createContactSuccess.type,
    callback: () => {
      resetForm();
      setSuccessVisible(true);
    },
  });

  return (
    <Flex.Vertical gap={12}>
      <StyledAskInput onSubmit={handleSubmit}>
        <input {...getFieldProps('description')} placeholder='문의글을 작성해보세요!' />
        <button type='submit' disabled={!isValid}>
          입력
        </button>
      </StyledAskInput>
      <Flex.Horizontal>
        <Field
          type='checkbox'
          name='secretStatus'
          as={(props: FieldProps['field']) => (
            <CheckBox {...props} size={18}>
              <Typography.Sub as='span' fontSize='14px'>
                비밀글
              </Typography.Sub>
            </CheckBox>
          )}
        />
      </Flex.Horizontal>
    </Flex.Vertical>
  );
}

export default AskInput;
