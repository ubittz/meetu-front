import { PropsWithChildren } from 'react';

import { FlexProps } from '@@components/Flex/types';

export type FormGroupProps = PropsWithChildren<
  {
    label?: string;
  } & FlexProps
>;
