import { PropsWithChildren } from 'react';

import { BADGE_THEME } from '@@components/Badge/constants';
import { asType } from '@@types/common';

export type BadgeTheme = asType<typeof BADGE_THEME>;

export type BadgeProps = PropsWithChildren<{
  theme?: BadgeTheme;
}>;
