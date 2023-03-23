import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import queryString from 'query-string';

import { API_CONFIG } from './apiConfig';

export const axiosClient = axios.create({
  baseURL: API_CONFIG.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: {
    serialize: (config: Record<string, never>): string =>
      queryString.stringify({ ...config, api_key: API_CONFIG.apiKey }),
  },
} as AxiosRequestConfig);

axiosClient.interceptors.request.use((config) => config);
axiosClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { data, status } = error.response!;
    switch (status) {
      case 400:
        // eslint-disable-next-line no-console
        console.error(data);
        break;

      case 401:
        // eslint-disable-next-line no-console
        console.error('unauthorised');
        break;

      case 404:
        // eslint-disable-next-line no-console
        console.error('/not-found');
        break;

      case 500:
        // eslint-disable-next-line no-console
        console.error('/server-error');
        break;
    }
    return Promise.reject(error);
  },
);
