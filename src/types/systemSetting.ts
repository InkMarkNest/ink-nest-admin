/**
 * 设置状态定义
 */
export interface SettingsState {
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
export interface SettingsActions {
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
export type SettingsStore = SettingsState & SettingsActions;
