import { FlexProps } from '@@components/Flex/types';
import { Meeting } from '@@stores/meeting/types';

export interface ClassBoxProps extends FlexProps {
  meeting?: Meeting;
}
