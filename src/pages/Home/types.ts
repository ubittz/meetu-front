import { Class } from '@@components/ClassBox/types';
import { FlexProps } from '@@components/Flex/types';
import { CATEGORY } from '@@pages/Home/constants';
import { asType } from '@@types/common';

export interface ClassBoxListProps extends FlexProps {
  title: string;
  onClickShowAll?: () => void;
  classList: Class[];
}

export type Category = asType<typeof CATEGORY>;
