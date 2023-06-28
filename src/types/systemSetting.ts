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
  themeMode: 'defaultAlgorithm' | 'darkAlgorithm' | 'compactAlgorithm';

  /**
   * 当前应用语言
   */
  language: string;
  /**
   * 侧边栏伸缩
   */
  collapsed: boolean;
  /**
   * 顶栏固定
   */
  topbarSticky: boolean;
  /**
   * 侧边栏固定
   */
  siderbarSticky: boolean;
  /**
   * 系统设置抽屉
   */
  drawerVisible: boolean;
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
   * 设置系统主题
   * @param {string} language - 新的语言标识
   */
  setTheme: (themeConfig: ThemeConfig) => void;
  /**
   * 设置应用语言
   * @param {string} language - 新的语言标识
   */
  setLanguage: (language: string) => void;
  /**
   * 设置侧边栏伸缩
   * @param {boolean} collapsed - 是否伸缩
   */
  setCollapsed: (collapsed: boolean) => void;
  /**
   * 设置侧边栏固定
   * @param {boolean} siderbarSticky - 是否固定
   */
  setSiderbarSticky: (siderbarSticky: boolean) => void;
  /**
   * 设置顶栏固定
   * @param {boolean} topbarSticky - 是否固定
   */
  setTopbarSticky: (topbarSticky: boolean) => void;
  /**
   * 设置系统设置显隐
   * @param {boolean} drawerVisible - 是否显示
   */
  setDrawerVisible: (drawerVisible: boolean) => void;
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
