import BasicButton from '@@components/Button/BasicButton';
import { BUTTON_SIZE } from '@@components/Button/constants';
import { ButtonProps } from '@@components/Button/types';

function SmallButton(props: ButtonProps) {
  return <BasicButton size={BUTTON_SIZE.SMALL} {...props} />;
}

export default SmallButton;
