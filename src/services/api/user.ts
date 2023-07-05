import { UserInfo } from '@/types/user';
import { LoginParams, LoginResponse } from '@/types/login';

import { Get, Post } from '../http';

/**
 * 登录接口
 */
export const login = (params: LoginParams) => {
  return Post<LoginResponse>('/api/login', params);
};

/**
 * 获取用户信息接口
 */
export const getUserInfo = () => {
  return Get<UserInfo>('/api/user/info');
};
