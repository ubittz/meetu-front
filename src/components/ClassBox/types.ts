import { BadgeTheme } from '@@components/Badge/types';
import { FlexProps } from '@@components/Flex/types';

export interface Class {
  title: string;
  description: string;
  price: number;
  image: string;
  badgeList?: {
    theme: BadgeTheme;
    title: string;
  }[];
}

export interface ClassBoxProps extends FlexProps {
  classItem: Class;
}
