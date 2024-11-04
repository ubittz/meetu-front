import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

import { FormGroupProps } from '@@components/FormGroup/types';

export interface InputFormGroupProps extends FormGroupProps {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}
