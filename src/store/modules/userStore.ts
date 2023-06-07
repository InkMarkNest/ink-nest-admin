import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { setItem, removeItem } from '@/utils';

import { createSelectors } from '../createSelectors';

/**
 * 用户数据类型定义
 */
type User = {
  id: number;
  name: string;
  email: string;
  /**
   * 用户 角色表
   */
  roles: string[];
};

/**
 * 用户状态定义
 */
interface UserState {
  /**
   * 当前用户
   */
  user: User | null;
  /**
   * 用户 token
   */
  token: string | null;
}

/**
 * 用户操作定义
 */
interface UserActions {
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
}

/**
 * 用户store，包括状态和操作
 */
type UserStore = UserState & UserActions;

/**
 * 定义初始状态
 */
const initialState: UserState = {
  user: null,
  token: null,
};

/**
 * 用户状态仓库
 */
const useUserStoreBase = create(
  immer<UserStore>((set, get) => ({
    ...initialState,
    setUser: async (user) => {
      await setItem<User | null>('userInfo', user);

      set((state) => {
        state.user = user;
      });
    },
    clearUser: async () => {
      await removeItem('userInfo');
      set((state) => {
        state.user = null;
      });
    },
    setToken: async (token) => {
      await setItem('inkToken', token);

      set((state) => {
        state.token = token;
      });
    },
    clearToken: async () => {
      await removeItem('token');

      set((state) => {
        state.token = null;
      });
    },
    logout: async () => {
      const { clearUser, clearToken } = get();
      await clearUser();
      await clearToken();
    },
    hasRole: (role) => {
      const { user } = get();
      return user !== null && user.roles.includes(role);
    },
  })),
);

const useUserStore = createSelectors(useUserStoreBase);

export { useUserStore };
export type { UserStore };
