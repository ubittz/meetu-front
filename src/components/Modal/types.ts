import { PropsWithChildren, ReactNode } from 'react';

export type ModalProps = PropsWithChildren<{
  visible: boolean;
  setVisible: (visible: boolean) => void;
  confirmContent?: ReactNode;
  onConfirm: () => void;
}>;
