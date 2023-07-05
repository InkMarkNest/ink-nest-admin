export interface LoginFormFinishedParams {
  username: string;
  password: string;
  rememberMe: boolean;
}

/**
 * 用户登录参数
 */
export interface LoginParams {
  username: string;
  password: string;
}

/**
 * 登录响应 Token
 */
export interface LoginResponse {
  token: string;
}
