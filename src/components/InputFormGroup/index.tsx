import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FormGroup from '@@components/FormGroup';
import TextField from '@@components/InputFormGroup/parts/TextField';
import { InputFormGroupProps } from '@@components/InputFormGroup/types';

const StyledInputFormGroup = styled(FormGroup)`
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

function InputFormGroup({ inputProps, buttonProps, ...props }: InputFormGroupProps) {
  return (
    <StyledInputFormGroup {...props}>
      <Flex.Horizontal className='input_form_group__input_wrap' gap={12}>
        <TextField {...inputProps} />
        {buttonProps && <Button.Large {...buttonProps} />}
      </Flex.Horizontal>
    </StyledInputFormGroup>
  );
}

export default InputFormGroup;
