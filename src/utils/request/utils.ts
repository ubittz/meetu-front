import { AxiosError } from 'axios';
import { SWRResponse } from 'swr';

import { authenticatedRequest } from '@@utils/request';
import { MeetuPageResponse, MeetuResponse } from '@@utils/request/types';

export const fetcher = async (url: string) => {
  const res = await authenticatedRequest.get(url);

  if ([4, 5].includes(Math.floor(res.status / 100))) {
    const error = res as unknown as AxiosError;
    throw error;
  }

  return res;
};

export const base64Encoder = (str: string) => btoa(encodeURIComponent(str));

export const base64Decoder = (str: string) => decodeURIComponent(atob(str));

export const formatSWRListResponse = <Data>(response: SWRResponse<MeetuResponse<MeetuPageResponse<Data>>>) => {
  const { data: swrData, ...swrResponse } = response;

  const { content, totalElements, number, size, totalPages } = swrData?.data ?? {};

  return {
    ...swrResponse,
    content,
    page: {
      total: totalElements,
      current: number,
      lastPage: totalPages,
      limit: size,
    },
  } as const;
};
