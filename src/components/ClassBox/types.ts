import { BadgeTheme } from '@@components/Badge/types';
import { FlexProps } from '@@components/Flex/types';
import { Meeting } from '@@stores/meeting/types';

export interface Class {
  id: number;
  ownerId: number;
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
  classItem?: Class;
  meeting?: Meeting;
}
