import { ButtonHTMLAttributes } from 'react';

import { BUTTON_SIZE, BUTTON_THEME } from '@@components/Button/constants';
import { asType } from '@@types/common';

export interface BasicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  theme?: ButtonTheme;
}

export interface ButtonProps extends Omit<BasicButtonProps, 'size'> {}

export type ButtonSize = asType<typeof BUTTON_SIZE>;

export type ButtonTheme = asType<typeof BUTTON_THEME>;
