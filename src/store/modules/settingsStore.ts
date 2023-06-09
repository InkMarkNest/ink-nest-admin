import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { theme } from 'antd';

import { SettingsState, SettingsStore } from '@/types/systemSetting';

import { baseThemeConfig } from '@/theme';

import { createSelectors } from '../createSelectors';

/**
 * 定义初始状态
 */
const initialState: SettingsState = {
  themeConfig: baseThemeConfig,
  themeMode: 'defaultAlgorithm',
  language: 'en',
  collapsed: false,
  topbarSticky: false,
  siderbarSticky: false,
  settingDrawerVisible: false,
  layoutMode: 'topBarAndLeftSidebarAndContent',
  sidebarDrawerVisible: false,
};

/**
 * 系统设置状态仓库
 */
const useSettingsStoreBase = create(
  immer<SettingsStore>((set) => ({
    ...initialState,
    toggleThemeMode: (themeMode: SettingsState['themeMode']) =>
      set((state) => {
        state.themeMode = themeMode;
        state.themeConfig.algorithm = theme[themeMode];
      }),
    setTheme: (themeConfig) =>
      set((state) => {
        state.themeConfig = themeConfig;
      }),
    setLanguage: (language) =>
      set((state) => {
        state.language = language;
      }),
    setCollapsed: (collapsed) =>
      set((state) => {
        state.collapsed = collapsed;
      }),
    setSiderbarSticky: (siderbarSticky) =>
      set((state) => {
        state.siderbarSticky = siderbarSticky;
      }),
    setTopbarSticky: (topbarSticky) =>
      set((state) => {
        state.topbarSticky = topbarSticky;
      }),
    setSettingDrawerVisible: (settingDrawerVisible) => {
      set((state) => {
        state.settingDrawerVisible = settingDrawerVisible;
      });
    },
    setLayoutMode: (layoutMode) => {
      set((state) => {
        state.layoutMode = layoutMode;
      });
    },
    setSidebarDrawerVisible: (sidebarDrawerVisible) => {
      set((state) => {
        state.sidebarDrawerVisible = sidebarDrawerVisible;
      });
    },
  })),
);

const useSettingsStore = createSelectors(useSettingsStoreBase);

export { useSettingsStore };
