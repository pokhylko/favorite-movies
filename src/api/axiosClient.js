import axios from 'axios';
import queryString from 'query-string';

import { API_CONFIG } from './apiConfig';

export const axiosClient = axios.create({
  baseURL: API_CONFIG.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify({ ...params, api_key: API_CONFIG.apiKey }),
});

axiosClient.interceptors.request.use(async (config) => config);
axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }

  return response;
}, (error) => {
  throw error;
});
