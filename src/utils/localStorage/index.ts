import { Meeting } from '@@stores/meeting/types';
import { STORAGE_KEYS } from '@@utils/localStorage/constants';

export const get = (name: string) => localStorage.getItem(name);

export const remove = (name: string) => localStorage.removeItem(name);

export const getAccessToken = () => get(STORAGE_KEYS.accessToken);

export const getRecentMeeting = () => {
  try {
    const string = get(STORAGE_KEYS.recentMeeting);
    return JSON.parse(string ?? '') as Meeting[];
  } catch {
    return [];
  }
};

export const set = (name: string, value: string) => {
  localStorage.setItem(name, value);
};

export const saveToken = (accessToken: string) => {
  set(STORAGE_KEYS.accessToken, accessToken);
};

export const saveRecentMeeting = (value: string) => {
  set(STORAGE_KEYS.recentMeeting, value);
};

export const clearToken = () => {
  remove(STORAGE_KEYS.accessToken);
};
