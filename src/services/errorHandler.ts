import { AxiosError } from 'axios';

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

/**
 * 创建HTTP错误的工厂方法
 * @param errorCode 错误代码
 * @param message 错误信息
 * @param originalError 原始错误对象
 * @returns 自定义HTTP错误
 */
export const createHttpError = (
  httpErrorCode?: HttpErrorCode,
  businessErrorCode?: BusinessErrorCode,
  message?: string,
  originalError?: AxiosError,
): IHttpError => {
  return { httpErrorCode, businessErrorCode, message, originalError };
};

/**
 * 处理HTTP错误
 *
 * @param {HttpErrorCode} status HTTP错误码
 * @param {AxiosError} error 原始错误对象
 * @returns {Promise<void>} 返回一个Promise错误对象
 */
const handleHTTPError = (status: HttpErrorCode, error: AxiosError): Promise<void> => {
  let message: string;
  switch (status) {
    case HttpErrorCode.UNAUTHORIZED:
      message = 'Unauthorized error';
      break;
    case HttpErrorCode.FORBIDDEN:
      message = 'Forbidden error';
      break;
    case HttpErrorCode.NOT_FOUND:
      message = 'Resource not found';
      break;
    case HttpErrorCode.SERVER_ERROR:
      message = 'Server error';
      break;
    default:
      message = 'An unexpected error occurred';
      break;
  }
  return Promise.reject(createHttpError(status, undefined, message, error));
};

/**
 * 处理业务错误
 *
 * @param {BusinessErrorCode} code 业务错误码
 * @param {AxiosError} error 原始错误对象
 * @returns {Promise<void>} 返回一个Promise错误对象
 */
const handleBusinessError = (code: BusinessErrorCode, error: AxiosError): Promise<void> => {
  let message: string;
  console.log('code -', code);
  switch (code) {
    case BusinessErrorCode.GENERAL_ERROR:
      message = 'General error';
      break;
    case BusinessErrorCode.DATABASE_ERROR:
      message = 'Database operation error';
      break;
    case BusinessErrorCode.FILE_ERROR:
      message = 'File operation error';
      break;
    case BusinessErrorCode.VALIDATION_ERROR:
      message = 'Data validation error';
      break;
    default:
      message = 'An unexpected error occurred';
      break;
  }
  return Promise.reject(createHttpError(undefined, code, message, error));
};

/**
 * 处理响应错误
 *
 * @param {AxiosError} error 原始错误对象
 * @returns {Promise<void>} 返回一个Promise错误对象
 */
export const handleResponseError = (error: AxiosError): Promise<void> => {
  if (error.response) {
    const status = error.response.status as HttpErrorCode;

    // 处理HTTP错误
    if (Object.values(HttpErrorCode).includes(status)) {
      return handleHTTPError(status, error);
    }
  }

  // 处理业务错误
  if (error.code && Object.values(BusinessErrorCode).includes(error.code)) {
    return handleBusinessError(error.code, error);
  }

  if (error.request) {
    return Promise.reject(
      createHttpError(
        HttpErrorCode.NOT_FOUND,
        undefined,
        'No response received from the server',
        error,
      ),
    );
  }
  return Promise.reject(
    createHttpError(
      HttpErrorCode.SERVER_ERROR,
      undefined,
      'There was an error setting up the request',
      error,
    ),
  );
};
