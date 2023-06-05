import create from 'zustand';

/**
 * 设置状态定义
 */
interface SettingsState {
  /**
   * 是否启用暗黑模式
   */
  darkMode: boolean;

  /**
   * 当前应用语言
   */
  language: string;
}

/**
 * 设置操作定义
 */
interface SettingsActions {
  /**
   * 切换暗黑模式状态
   */
  toggleDarkMode: () => void;

  /**
   * 设置应用语言
   * @param {string} language - 新的语言标识
   */
  setLanguage: (language: string) => void;
}

/**
 * 设置系统配置store，包括状态和操作
 */
type SettingsStore = SettingsState & SettingsActions;

/**
 * 系统设置状态仓库
 */
const useSettingsStore = create<SettingsStore>((set) => ({
  darkMode: false,
  language: 'en',
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  setLanguage: (language) => set({ language }),
}));

export { useSettingsStore, SettingsStore };
