import { HTMLAttributes } from 'react';

import { Properties } from 'csstype';

import { FLEX_DIRECTION } from '@@components/Flex/constants';
import { asType } from '@@types/common';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number;
  alignItems?: Properties['alignItems'];
  justifyContent?: Properties['justifyContent'];
}

export type FlexDirection = asType<typeof FLEX_DIRECTION>;
