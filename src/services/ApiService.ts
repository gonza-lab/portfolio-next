import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import qs from 'qs';

export default class ApiService {
  protected axios: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.axios = Axios.create({
      ...config,
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      paramsSerializer: (params) =>
        qs.stringify(params, { encodeValuesOnly: true }),
    });
  }
}
