import { ThemeConfig } from 'antd';

/**
 * 设置状态定义
 */
export interface SettingsState {
  /**
   * 主题配置
   */
  themeConfig: ThemeConfig;
  /**
   * 主题模式
   */
  themeMode: 'defaultAlgorithm' | 'darkAlgorithm' | 'compactAlgorithm' | 'system';

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
  toggleThemeMode: (themeMode: SettingsState['themeMode']) => void;

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

/**
 * 主题算法
 */
export enum ThemeMode {
  defaultAlgorithm = 'defaultAlgorithm',
  darkAlgorithm = 'darkAlgorithm',
  compactAlgorithm = 'compactAlgorithm',
  system = 'system',
}
