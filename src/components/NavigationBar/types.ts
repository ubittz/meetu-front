import { ReactNode } from 'react';

export interface NavigationItemType {
  title: string;
  path: string;
  activeIcon: ReactNode;
  inactiveIcon: ReactNode;
}
