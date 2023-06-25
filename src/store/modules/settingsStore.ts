import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { SettingsState, SettingsStore } from '@/types/systemSetting';

import { createSelectors } from '../createSelectors';

/**
 * 定义初始状态
 */
const initialState: SettingsState = {
  darkMode: false,
  language: 'en',
};

/**
 * 系统设置状态仓库
 */
const useSettingsStoreBase = create(
  immer<SettingsStore>((set) => ({
    ...initialState,
    toggleDarkMode: () =>
      set((state) => {
        state.darkMode = !state.darkMode;
      }),
    setLanguage: (language) =>
      set((state) => {
        state.language = language;
      }),
  })),
);

const useSettingsStore = createSelectors(useSettingsStoreBase);

export { useSettingsStore };
