import axios from 'axios';
import queryString from 'query-string';

import { API_CONFIG } from './apiConfig';

export const axiosClient = axios.create({
  baseURL: API_CONFIG.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: {
    serialize: (params) => queryString.stringify({ ...params, api_key: API_CONFIG.apiKey }),
  },
});

axiosClient.interceptors.request.use(async (config) => config);
axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  }

  return response;
}, (error) => {
  throw error;
});
