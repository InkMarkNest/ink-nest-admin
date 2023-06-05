import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// 定义响应接口
export interface ResponseData<T = any> {
  code: number;
  data: T;
  message: string;
}

// 自定义 AxiosInstance 类型 加强TS类型提示
interface CustomAxiosInstance extends AxiosInstance {
  get<T = any, R = ResponseData<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  delete<T = any, R = ResponseData<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  head<T = any, R = ResponseData<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  options<T = any, R = ResponseData<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  post<T = any, R = ResponseData<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R>;
  put<T = any, R = ResponseData<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R>;
  patch<T = any, R = ResponseData<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R>;
}

// 创建axios实例，并转换为新的类型
const http = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 10000,
}) as unknown as CustomAxiosInstance;

// 请求拦截器
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // TODO
    const token = 'xxx';
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse<ResponseData>) => {
    if (response.data.code !== 200) {
      return Promise.reject(new Error(response.data || 'Error'));
    }

    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { http };