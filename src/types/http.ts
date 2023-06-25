import { AxiosError, AxiosRequestConfig } from 'axios';

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

/**
 * HTTP错误代码
 */
export enum HttpErrorCode {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

/**
 * 业务错误码
 */
export enum BusinessErrorCode {
  GENERAL_ERROR = 1000,
  DATABASE_ERROR = 1001,
  FILE_ERROR = 1002,
  VALIDATION_ERROR = 1003,
}

/**
 * 自定义HTTP错误接口
 */
export interface HttpError {
  httpErrorCode?: HttpErrorCode;
  businessErrorCode?: BusinessErrorCode;
  message?: string;
  originalError?: AxiosError;
}
