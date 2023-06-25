import axios from 'axios';

import { getItem } from '@/utils';

import {
  BusinessErrorCode,
  CustomError,
  HttpMethod,
  HttpMethodWithData,
  ResponseData,
} from '@/types/http';

import { handleResponseError, handleRequestError } from './errorHandler';

/**
 * axios 配置对象
 */
const axiosConfigs = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
};

/**
 * 创建axios实例，并转换为新的类型
 */
const httpService = axios.create(axiosConfigs);

/**
 * 请求拦截器
 */
httpService.interceptors.request.use(async (config) => {
  const token = await getItem<string | null>('inkToken');
  config.headers = config.headers || {};

  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
}, handleRequestError);

/**
 * 响应拦截器
 */
httpService.interceptors.response.use((response) => {
  const { data }: { data: ResponseData<any> } = response;

  // 判断 data.code 是否在业务错误码中
  const isError = Object.values(BusinessErrorCode).includes(data.code);
  if (isError) {
    // 如果是业务错误，创建一个新的 Error 对象，并添加业务错误码和错误信息
    const error: CustomError = new Error(data.message || 'Error');
    error.code = data.code;
    throw error;
  }

  return response;
}, handleResponseError);

/**
 * Get 方法
 * @param url 请求的 URL
 * @param params 请求的参数
 * @returns 返回Promise，值为ResponseData中的data对象
 */
const Get: HttpMethod = async <T = any>(url: string, params?: object): Promise<ResponseData<T>> => {
  const response = await httpService.get(url, { params });
  return response.data;
};

/**
 * Post 方法
 * @param url 请求的 URL
 * @param data 请求的数据
 * @returns 返回Promise，值为ResponseData中的data对象
 */
const Post: HttpMethodWithData = async <T = any>(
  url: string,
  data?: any,
): Promise<ResponseData<T>> => {
  const response = await httpService.post(url, data);
  return response.data;
};

/**
 * Put 方法
 * @param url 请求的 URL
 * @param data 请求的数据
 * @returns 返回Promise，值为ResponseData中的data对象
 */
const Put: HttpMethodWithData = async <T = any>(
  url: string,
  data?: any,
): Promise<ResponseData<T>> => {
  const response = await httpService.put(url, data);
  return response.data;
};

/**
 * Delete 方法
 * @param url 请求的 URL
 * @param params 请求的参数
 * @returns 返回Promise，值为ResponseData中的data对象
 */
const Delete: HttpMethod = async <T = any>(
  url: string,
  params?: object,
): Promise<ResponseData<T>> => {
  const response = await httpService.delete(url, { params });
  return response.data;
};

/**
 * Patch 方法
 * @param url 请求的 URL
 * @param data 请求的数据
 * @returns 返回Promise，值为ResponseData中的data对象
 */
const Patch: HttpMethodWithData = async <T = any>(
  url: string,
  data?: any,
): Promise<ResponseData<T>> => {
  const response = await httpService.patch(url, data);
  return response.data;
};

// 方法导出
export { Get, Post, Put, Delete, Patch };
