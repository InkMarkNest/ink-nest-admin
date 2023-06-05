import create from 'zustand';

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
 * 用户状态仓库
 */
const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export { useUserStore, UserStore };
