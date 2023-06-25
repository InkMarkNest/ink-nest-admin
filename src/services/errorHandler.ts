import { AxiosError } from 'axios';

import { BusinessErrorCode, HttpError, HttpErrorCode } from '@/types/http';

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
): HttpError => {
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
 * 处理请求错误
 *
 * @param {AxiosError} error 原始错误对象
 * @returns {Promise<void>} 返回一个Promise错误对象
 */
const handleRequestError = (error: AxiosError): Promise<void> => {
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

/**
 * 处理响应错误
 *
 * @param {AxiosError} error 原始错误对象
 * @returns {Promise<void>} 返回一个Promise错误对象
 */
const handleResponseError = (error: AxiosError): Promise<void> => {
  if (error.response) {
    const status = error.response.status as HttpErrorCode;

    // 处理HTTP错误
    if (Object.values(HttpErrorCode).includes(status)) {
      return handleHTTPError(status, error);
    }

    // 处理业务错误
    const businessErrorCodeValues = Object.values(BusinessErrorCode);
    if (error.code && businessErrorCodeValues.includes(Number(error.code))) {
      return handleBusinessError(Number(error.code) as BusinessErrorCode, error);
    }
  }

  // 如果上面都没处理，则是未知错误
  return Promise.reject(
    createHttpError(HttpErrorCode.SERVER_ERROR, undefined, 'An unknown error occurred', error),
  );
};

export { handleRequestError, handleResponseError };
