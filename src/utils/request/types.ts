import { AxiosError, AxiosResponse } from 'axios';
import { SWRConfiguration } from 'swr';

import { asType } from '@@types/common';
import { ERROR_CODE } from '@@utils/request/constants';

// eslint-disable-next-line
export interface SWRListConfig<D, Q = Record<string, any>> {
  query?: PageQuery & Q;
  config?: SWRConfig<D>;
}

export type SWRConfig<D> = SWRConfiguration<MeetuResponse<D>>;

export interface MeetuResponse<Data> extends AxiosResponse<Data> {
  ok: boolean;
}

export interface MeetuAxiosError extends AxiosError {
  ok: boolean;
}

export interface PageQuery {
  // 0부터 시작.
  page: number;
  size?: number;
}

export interface MeetuPageResponse<Data> {
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number; // 현재 페이지
  numberOfElements: number; // 현재 페이지에 있는 데이터 개수
  size: number; // Take 개수
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalElements: number; // 전체 데이터 개수
  totalPages: number; // 전체 페이지 수
  content: Data[];
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
