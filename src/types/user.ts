export interface UserPermission {
  id: string;
  resource: string;
  action: string;
  description: string;
}

export interface Role {
  id: string;
  name: string;
  permissions: UserPermission[];
}

/**
 * 用户数据类型定义
 */
export type User = {
  id: number;
  name: string;
  email: string;
  /**
   * 用户 角色表
   */
  roles: Role[];
};

/**
 * 用户状态定义
 */
export interface UserState {
  /**
   * 当前用户
   */
  user: User | null;
  /**
   * 用户 token
   */
  token: string | null;
  /**
   * 加载完成
   */
  isLoaded: boolean;
  /**
   * 记住用户
   */
  rememberMe: boolean;
}

/**
 * 用户操作定义
 */
export interface UserActions {
  /**
   * 设置当前用户
   * @param {User} user - 新的用户数据
   */
  setUser: (user: User | null) => Promise<void>;

  /**
   * 清除当前用户数据
   */
  clearUser: () => Promise<void>;
  /**
   * 设置用户 token
   * @param {string} token - 新的 token
   */
  setToken: (token: string | null) => Promise<void>;
  /**
   * 清除用户 token
   */
  clearToken: () => Promise<void>;
  /**
   * 退出登录
   */
  logout: () => Promise<void>;
  /**
   * 检查用户是否有特定角色
   * @param {string} role - 需要检查的角色
   * @return {boolean} 是否具有该角色
   */
  hasRole: (role: string) => boolean;
  /**
   * 初始化加载
   */
  init: () => Promise<void>;
  /**
   * 设置记住我
   * @param {boolean} rememberMe - 是否记住用户
   */
  setRememberMe: (rememberMe: boolean) => Promise<void>;
}

/**
 * 用户store，包括状态和操作
 */
export type UserStore = UserState & UserActions;

/**
 * 用户信息
 */
export interface UserInfo {
  userInfo: User;
}
