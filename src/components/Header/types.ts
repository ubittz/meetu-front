import { HTMLAttributes, MouseEventHandler, PropsWithChildren } from 'react';

import { HEADER_ALIGNMENT } from '@@components/Header/constants';
import { asType } from '@@types/common';

interface WithoutChildrenHeaderProps extends HTMLAttributes<HTMLDivElement> {
  hiddenBack?: boolean;
  titleAlign?: HeaderAlignment;
  onBack?: MouseEventHandler<HTMLDivElement>;
}

export type HeaderProps = PropsWithChildren<WithoutChildrenHeaderProps>;

export type HeaderAlignment = asType<typeof HEADER_ALIGNMENT>;
