import { Class } from '@@components/ClassBox/types';
import { FlexProps } from '@@components/Flex/types';

export interface ClassBoxListProps extends FlexProps {
  title: string;
  onClickShowAll?: () => void;
  classList: Class[];
}
