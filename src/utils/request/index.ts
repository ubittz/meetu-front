import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios';

import { dispatch } from '@@store';
import { logoutRequest, setTokens } from '@@stores/auth/reducer';
import { LoginResponse } from '@@stores/auth/types';
import { getAccessToken, getRefreshToken, saveToken } from '@@utils/localStorage';
import { API_ENDPOINT } from '@@utils/request/constants';

import { UbittzErrorResponse, UbittzResponse } from './types';

axios.defaults.baseURL = API_ENDPOINT;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const responseInterceptor = (axiosRes: AxiosResponse) => {
  // eslint-disable-next-line
  const response: UbittzResponse<any> = {
    ...axiosRes,
    ok: true,
  };

  return response;
};

const errorInterceptor = async (axiosError: AxiosError) => {
  const refreshToken = getRefreshToken();

  const error: UbittzErrorResponse = {
    ...axiosError,
    ok: false,
  };

  if (error.status === 401 && !error.config?.url?.includes('/auth/refresh')) {
    try {
      const refreshResponse: AxiosResponse<LoginResponse> = await authenticatedRequest.post('/auth/refresh', {
        data: {
          refreshToken,
        },
      });

      if (refreshResponse.status === 200) {
        const { data } = refreshResponse;
        dispatch(setTokens(data));
        saveToken(data.token, data.refreshToken);

        return authenticatedRequest[(error.config?.method ?? 'get') as 'get' | 'post' | 'put' | 'delete'](error.config?.url ?? '', error.config);
      } else {
        dispatch(logoutRequest());
        return error;
      }
    } catch {
      return error;
    }
  }

  return error;
};

const generatorRequest = () => {
  axios.interceptors.response.use(responseInterceptor, errorInterceptor);

  const generator =
    (method: Method) =>
    // eslint-disable-next-line
    async <Data = any>(path: string, config?: AxiosRequestConfig): Promise<UbittzResponse<Data>> => {
      const accessToken = getAccessToken();

      const newConfig: AxiosRequestConfig = {
        ...config,
        headers: {
          ...config?.headers,
          Authorization: accessToken && `Bearer ${accessToken}`,
        },
        method,
      };

      return axios(path, newConfig);
    };

  return {
    get: generator('get'),
    post: generator('post'),
    put: generator('put'),
    delete: generator('delete'),
  };
};

export const authenticatedRequest = generatorRequest();
