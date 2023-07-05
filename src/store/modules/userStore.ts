import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { setItem, removeItem, getItem } from '@/utils';

import { User, UserState, UserStore } from '@/types/user';

import { createSelectors } from '../createSelectors';

/**
 * 定义初始状态
 */
const initialState: UserState = (() => {
  const state: UserState = {
    user: null,
    token: null,
    isLoaded: true,
    rememberMe: false,
  };

  return state;
})();

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
        if (user && state.token) {
          state.isLoaded = false;
        }
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
        if (token && state.user) {
          state.isLoaded = false;
        }
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

      set((state) => {
        state.isLoaded = false;
      });
    },
    init: async () => {
      const user = await getItem<User | null>('userInfo');
      const token = await getItem<string | null>('inkToken');
      const rememberMe = await getItem<boolean>('inkRememberMe');

      set((state) => {
        state.user = user;
        state.token = token;
        state.rememberMe = rememberMe || false;
        state.isLoaded = false;
      });
    },
    setRememberMe: async (rememberMe) => {
      await setItem('inkRememberMe', rememberMe);

      set((state) => {
        state.rememberMe = rememberMe;
      });
    },
  })),
);

const useUserStore = createSelectors(useUserStoreBase);

export { useUserStore };
