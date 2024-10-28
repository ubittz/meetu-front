import BasicButton from '@@components/Button/BasicButton';
import { BUTTON_SIZE } from '@@components/Button/constants';
import { ButtonProps } from '@@components/Button/types';

function MediumButton(props: ButtonProps) {
  return <BasicButton size={BUTTON_SIZE.MEDIUM} {...props} />;
}

export default MediumButton;
