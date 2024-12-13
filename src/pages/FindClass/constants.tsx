import { MEETING_ORDER_TYPE } from '@@pages/Home/constants';

export const FIND_CLASS_ORDER = {
  RECENT: 'recent',
  RECOMMEND: 'recommend',
  PRICE_ASC: 'priceAsc',
  PRICE_DESC: 'priceDesc',
} as const;

export const ALL_FIND_CLASS_ORDER = Object.values(FIND_CLASS_ORDER);

export const FIND_CLASS_ORDER_STRING = {
  [FIND_CLASS_ORDER.RECENT]: '최신순으로 보기',
  [FIND_CLASS_ORDER.RECOMMEND]: '밋유 추천순',
  [FIND_CLASS_ORDER.PRICE_DESC]: '가격 높은순',
  [FIND_CLASS_ORDER.PRICE_ASC]: '가격 낮은순',
};

export const QUERY_BY_FIND_CLASS_ORDER = {
  [FIND_CLASS_ORDER.RECENT]: {
    orderType: MEETING_ORDER_TYPE.LATEST,
  },
  [FIND_CLASS_ORDER.RECOMMEND]: {
    orderType: MEETING_ORDER_TYPE.REQUEST_COUNT,
  },
  [FIND_CLASS_ORDER.PRICE_ASC]: {
    orderType: MEETING_ORDER_TYPE.PRICE,
    isAsc: true,
  },
  [FIND_CLASS_ORDER.PRICE_DESC]: {
    orderType: MEETING_ORDER_TYPE.PRICE,
    isAsc: false,
  },
} as const;
