import { ReactNode } from 'react';

import { FlexProps } from '@@components/Flex/types';
import { CATEGORY, MEETING_ORDER_TYPE } from '@@pages/Home/constants';
import { Meeting } from '@@stores/meeting/types';
import { asType } from '@@types/common';
import { PageQuery } from '@@utils/request/types';

export interface ClassBoxListProps extends FlexProps {
  title: string;
  onClickShowAll?: () => void;
  meetingList: Meeting[];
  emptyContent?: ReactNode;
}

export type Category = asType<typeof CATEGORY>;

export type MeetingOrderType = asType<typeof MEETING_ORDER_TYPE>;

export interface MeetingListWithCategoryQuery extends PageQuery {
  category?: Category;
  orderType?: MeetingOrderType;
  isAsc?: boolean;
}
