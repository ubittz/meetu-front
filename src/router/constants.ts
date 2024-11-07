export const ROUTE_PREFIX = import.meta.env.VITE_APP_ROUTE_PREFIX;

export const PAGES = {
  LOGIN: '/',
  REGISTER: '/register',
  FIND_ACCOUNT: '/find',
  HOME: '/home',
  FIND_CLASS: '/find-class',
  CLASS: '/class',
  PAYMENT: '/payment',
  PROFILE: '/profile',
  MY_PAGE: '/my-page',
} as const;
