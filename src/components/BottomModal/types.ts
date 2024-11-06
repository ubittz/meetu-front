import { PropsWithChildren } from 'react';

export type BottomModalProps = PropsWithChildren<{
  title?: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}>;
