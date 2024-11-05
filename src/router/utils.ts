import { ROUTE_PREFIX } from '@@router/constants';

export const pathGenerator = (path: string, subPath: string = '') => `${ROUTE_PREFIX}${path}${subPath}`;
