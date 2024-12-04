import { TERMS_TYPE } from '@@components/TermsBottomModal/constants';
import { asType } from '@@types/common';

export type TermsType = asType<typeof TERMS_TYPE>;

export interface TermsBottomModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  type: TermsType;
}
