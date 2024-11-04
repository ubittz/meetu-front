import BasicButton from '@@components/Button/BasicButton';
import { BUTTON_SIZE } from '@@components/Button/constants';

const Button = {
  [BUTTON_SIZE.TINY]: BasicButton(BUTTON_SIZE.TINY),
  [BUTTON_SIZE.SMALL]: BasicButton(BUTTON_SIZE.SMALL),
  [BUTTON_SIZE.MEDIUM]: BasicButton(BUTTON_SIZE.MEDIUM),
  [BUTTON_SIZE.LARGE]: BasicButton(BUTTON_SIZE.LARGE),
  [BUTTON_SIZE.EXTRALARGE]: BasicButton(BUTTON_SIZE.EXTRALARGE),
};

export default Button;
