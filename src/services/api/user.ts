import { http } from '../http';

// 定义接口
interface LoginParams {
  username: string;
  password: string;
}

interface UserInfo {
  userInfo: {
    id: number;
    name: string;
    email: string;
  };
}

/**
 * 登录接口
 */
export const login = (params: LoginParams) => {
  return http.post('/api/login', params);
};

/**
 * 获取用户信息接口
 */
export const getUserInfo = () => {
  return http.get<UserInfo>('/api/user');
};
