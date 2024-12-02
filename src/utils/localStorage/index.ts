import { STORAGE_KEYS } from '@@utils/localStorage/constants';

export const get = (name: string) => localStorage.getItem(name);

export const remove = (name: string) => localStorage.removeItem(name);

export const getAccessToken = () => get(STORAGE_KEYS.accessToken);

export const getRefreshToken = () => get(STORAGE_KEYS.refreshToken);

export const set = (name: string, value: string) => {
  localStorage.setItem(name, value);
};

export const saveToken = (accessToken: string, refreshToken: string) => {
  set(STORAGE_KEYS.accessToken, accessToken);
  set(STORAGE_KEYS.refreshToken, refreshToken);
};

export const clearToken = () => {
  remove(STORAGE_KEYS.accessToken);
  remove(STORAGE_KEYS.refreshToken);
};
