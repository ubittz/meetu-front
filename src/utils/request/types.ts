import { AxiosError, AxiosResponse } from 'axios';
import { SWRConfiguration } from 'swr';

import { asType } from '@@types/common';

import { ERROR_CODE } from './constants';

// eslint-disable-next-line
export interface SWRListConfig<D, Q = Record<string, any>> {
  query?: PageQuery & Q;
  config?: SWRConfig<D>;
}

export type SWRConfig<D> = SWRConfiguration<UbittzResponse<D>>;

export interface UbittzResponse<Data> extends AxiosResponse<Data> {
  ok: boolean;
}

export interface UbittzErrorResponse extends AxiosError {
  ok: boolean;
}

export interface PageQuery {
  // 1부터 시작.
  page: number;
  take?: number;
}

export interface UbittzPageResponse<Data> {
  meta: PageMetaResponse;
  data: Data[];
}

export interface PageMetaResponse {
  total: number;
  page: number;
  take: number;
  lastPage: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface UseQueryParamsConfig<TQuery extends object> {
  initialSearch?: (query: TQuery) => boolean;
  queryKey?: string | string[];
}

export type MeetuErrorCode = asType<typeof ERROR_CODE>;

export interface MeetuErrorResponse {
  errorCode: MeetuErrorCode;
  message: string;
}
