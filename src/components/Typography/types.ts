import { HTMLAttributes } from 'react';

import { SupportedHTMLElements } from 'styled-components';

import { TYPOGRAPHY_THEME } from '@@components/Typography/constants';
import { asType } from '@@types/common';

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: SupportedHTMLElements;
  color?: string;
}

export type TypographyTheme = asType<typeof TYPOGRAPHY_THEME>;
