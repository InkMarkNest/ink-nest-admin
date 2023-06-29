import { FC } from 'react';

import { Divider, Drawer } from 'antd';

import { useSettingsStore } from '@/store';

import { ReactComponent as CIClose } from '@/assets/svg/common-icon/close.svg';

import { SvgIcon } from '@/components';

import { ThemeColor } from './ThemeColor';
import { LayoutMode } from './LayoutMode';
import { LayoutSelector } from './LayoutSelector';

const Setting: FC = () => {
  const settingDrawerVisible = useSettingsStore.use.settingDrawerVisible();
  const setSettingDrawerVisible = useSettingsStore.use.setSettingDrawerVisible();

  return (
    <Drawer
      title="系统设置"
      onClose={() => setSettingDrawerVisible(false)}
      open={settingDrawerVisible}
      closeIcon={<SvgIcon element={CIClose} size="large" />}
    >
      {/* 主题 */}
      <ThemeColor />
      <Divider />
      {/* 布局 */}
      <LayoutMode />
      <Divider />
      {/* 选择布局组件 */}
      <LayoutSelector />
    </Drawer>
  );
};

export { Setting };
