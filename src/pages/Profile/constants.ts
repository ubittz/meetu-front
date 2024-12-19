export const ACCOUNT_TYPE = {
  HOST: 'host',
  NORMAL: 'normal',
} as const;

export const PROFILE_TAB_LIST_BY_ACCOUNT_TYPE = {
  [ACCOUNT_TYPE.NORMAL]: ['모임'],
  [ACCOUNT_TYPE.HOST]: ['모임', '리뷰'],
};
