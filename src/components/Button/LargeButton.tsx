import BasicButton from '@@components/Button/BasicButton';
import { BUTTON_SIZE } from '@@components/Button/constants';
import { ButtonProps } from '@@components/Button/types';

function LargeButton(props: ButtonProps) {
  return <BasicButton size={BUTTON_SIZE.LARGE} {...props} />;
}

export default LargeButton;
