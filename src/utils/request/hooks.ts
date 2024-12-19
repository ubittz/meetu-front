import { useEffect, useRef } from 'react';

import qs from 'qs';
import { useSearchParams } from 'react-router-dom';
import useSWR from 'swr';

import useSearch from '@@hooks/useSearch';
import { SWRConfig, SWRListConfig, MeetuResponse, UseQueryParamsConfig } from '@@utils/request/types';

// eslint-disable-next-line
export const useSWRList = <D = any, Q extends Record<string, any> = Record<string, any>>(path: string, config?: SWRListConfig<D, Q>) => {
  const prevResponse = useRef<MeetuResponse<D>>();

  const { query, config: swrConfig } = config ?? {};
  const response = useSWR<MeetuResponse<D>>(config?.skip ? null : `${path}?${qs.stringify(query)}`, swrConfig ?? {});

  if (!response.data && !response.error) {
    return { ...response, data: prevResponse.current };
  }

  prevResponse.current = response.data;

  return response;
};

export const useSWRDetail = <D>(path: string, config?: SWRConfig<D>) => {
  const response = useSWR<MeetuResponse<D>>(config?.skip ? null : path, config);
  return response;
};

export const useQueryParams = <TQuery extends object>(initialQuery: TQuery, { initialSearch, queryKey }: UseQueryParamsConfig<TQuery>) => {
  const query = useSearch<TQuery>();
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQuery = (key: keyof TQuery, value: TQuery[keyof TQuery]) => {
    const newQuery = { ...query };

    if (value === '' || value === null || value === undefined) {
      delete newQuery[key];
    } else {
      newQuery[key] = value;
      searchParams.set(String(key), String(value));
    }

    setSearchParams(qs.stringify(newQuery));
  };

  const currentQueryKey = Array.isArray(queryKey) ? [...queryKey, query] : [queryKey, query];

  useEffect(() => {
    if (initialSearch?.(query)) {
      const queryString = qs.stringify({ ...query, ...initialQuery });
      setSearchParams(queryString, { replace: true });
    }
  }, [query, initialSearch, setSearchParams, initialQuery]);

  return {
    query,
    updateQuery,
    queryKey: currentQueryKey,
  };
};
