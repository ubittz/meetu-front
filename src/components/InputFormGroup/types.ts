import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';

import { FormGroupProps } from '@@components/FormGroup/types';

export interface InputFormGroupProps extends FormGroupProps {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  errorMessage?: ReactNode;
}
