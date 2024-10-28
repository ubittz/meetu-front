import { ROUTE_PREFIX } from '@@router/constants';

export const pathGenerator = (path: string) => `${ROUTE_PREFIX}${path}`;
