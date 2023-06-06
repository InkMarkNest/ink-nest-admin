import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { setItem, removeItem } from '@/utils';

import { createSelectors } from '../createSelectors';

/**
 * 用户数据类型定义
 */
type User = {
  id: string;
  name: string;
  email: string;
};

/**
 * 用户状态定义
 */
interface UserState {
  /**
   * 当前用户
   */
  user: User | null;
}

/**
 * 用户操作定义
 */
interface UserActions {
  /**
   * 设置当前用户
   * @param {User} user - 新的用户数据
   */
  setUser: (user: User | null) => void;

  /**
   * 清除当前用户数据
   */
  clearUser: () => void;
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
};

/**
 * 用户状态仓库
 */
const useUserStoreBase = create(
  immer<UserStore>((set) => ({
    ...initialState,
    setUser: async (user) => {
      await setItem<User>('userInfo', user);
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
  })),
);

const useUserStore = createSelectors(useUserStoreBase);

export { useUserStore, UserStore };
