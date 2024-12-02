import { AxiosError } from 'axios';
import { SWRResponse } from 'swr';

import { authenticatedRequest } from '@@utils/request';
import { UbittzPageResponse, UbittzResponse } from '@@utils/request/types';

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

export const formatSWRListResponse = <Data>(response: SWRResponse<UbittzResponse<UbittzPageResponse<Data>>>) => {
  const { data: swrData, ...swrResponse } = response;

  const { data, meta } = swrData?.data ?? {};

  return {
    ...swrResponse,
    data,
    page: {
      total: meta?.total ?? 0,
      current: meta?.page ?? 0,
      lastPage: meta?.lastPage ?? 0,
      limit: meta?.take ?? 0,
    },
  } as const;
};
