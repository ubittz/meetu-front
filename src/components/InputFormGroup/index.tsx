import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FormGroup from '@@components/FormGroup';
import TextField from '@@components/InputFormGroup/parts/TextField';
import { InputFormGroupProps } from '@@components/InputFormGroup/types';

const StyledInputFormGroup = styled(FormGroup)`
  position: relative;
  padding-bottom: 14px;

  .input_form_group__error {
    position: absolute;
    bottom: 0;
    left: 0;

    font-size: 12px;
    color: #d02828;
    line-height: 12px;
  }
  .input_form_group__input_wrap {
    & > input {
      flex: 1;
    }

    & > button {
      flex: 0 0 auto;
      padding: 0 19.5px;
    }
  }
`;

function InputFormGroup({ errorMessage, inputProps, buttonProps, ...props }: InputFormGroupProps) {
  return (
    <StyledInputFormGroup {...props}>
      <Flex.Horizontal className='input_form_group__input_wrap' gap={12}>
        <TextField {...inputProps} defaultValue='' />
        {buttonProps && <Button.Large {...buttonProps} />}
      </Flex.Horizontal>
      {errorMessage && <span className='input_form_group__error'>{errorMessage}</span>}
    </StyledInputFormGroup>
  );
}

export default InputFormGroup;
