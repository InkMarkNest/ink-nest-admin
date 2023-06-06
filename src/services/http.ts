import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { BusinessErrorCode, handleResponseError } from './errorHandler';

/**
 * 响应数据接口定义
 */
export interface ResponseData<T = any> {
  code: number;
  data: T;
  message: string;
}

/**
 * 自定义通用的 HTTP 方法接口定义
 */
interface HttpMethods {
  <T = any, R = ResponseData<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  <T = any, R = ResponseData<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
}

/**
 * 自定义 AxiosInstance 接口定义，增强TS类型提示
 */
interface CustomAxiosInstance extends AxiosInstance {
  get: HttpMethods;
  delete: HttpMethods;
  head: HttpMethods;
  options: HttpMethods;
  post: HttpMethods;
  put: HttpMethods;
  patch: HttpMethods;
}

/**
 * 创建axios实例，并转换为新的类型
 */
const http = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 10000,
}) as unknown as CustomAxiosInstance;

/**
 * 请求拦截器
 */
http.interceptors.request.use((config) => {
  const token = 'xxx';
  config.headers = config.headers || {};
  config.headers.Authorization = `Bearer ${token}`;
  return config;
}, handleResponseError);

/**
 * 响应拦截器
 */
http.interceptors.response.use((response) => {
  const { data }: { data: ResponseData } = response;

  // 判断 data.code 是否在业务错误码中
  const isError = Object.values(BusinessErrorCode).includes(data.code);
  if (isError) {
    // 如果是业务错误，创建一个新的 Error 对象，并添加业务错误码和错误信息
    const error = new Error(data.message || 'Error');
    error.code = data.code;
    return handleResponseError(error);
  }

  return data;
}, handleResponseError);

export { http };
