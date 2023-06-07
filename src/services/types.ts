import { AxiosRequestConfig } from 'axios';

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
export type HttpMethod = <T = any>(
  url: string,
  config?: AxiosRequestConfig,
) => Promise<ResponseData<T>>;

/**
 * 自定义通用的 HTTP 方法接口定义
 */
export type HttpMethodWithData = <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
) => Promise<ResponseData<T>>;

/**
 * 自定义错误接口
 */
export interface CustomError extends Error {
  code?: number;
}
