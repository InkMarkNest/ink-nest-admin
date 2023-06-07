import { Get, Post } from '../http';

// 定义接口
interface LoginParams {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

interface UserInfo {
  userInfo: {
    id: number;
    name: string;
    email: string;
    roles: string[];
  };
}

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
