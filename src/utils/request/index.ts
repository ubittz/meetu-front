import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios';

import { getAccessToken } from '@@utils/localStorage';
import { API_ENDPOINT } from '@@utils/request/constants';
import { MeetuAxiosError, MeetuResponse } from '@@utils/request/types';

axios.defaults.baseURL = API_ENDPOINT;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const responseInterceptor = (axiosRes: AxiosResponse) => {
  // eslint-disable-next-line
  const response: MeetuResponse<any> = {
    ...axiosRes,
    ok: true,
  };

  return response;
};

const errorInterceptor = async (axiosError: AxiosError) => {
  const error: MeetuAxiosError = {
    ...axiosError,
    ok: false,
  };

  return error;
};

const generatorRequest = () => {
  axios.interceptors.response.use(responseInterceptor, errorInterceptor);

  const generator =
    (method: Method) =>
    // eslint-disable-next-line
    async <Data = any>(path: string, config?: AxiosRequestConfig): Promise<MeetuResponse<Data>> => {
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
    patch: generator('patch'),
  };
};

export const authenticatedRequest = generatorRequest();
