import { FC } from 'react';

import { Divider, Drawer } from 'antd';

import { useSettingsStore } from '@/store';

import { ReactComponent as CIClose } from '@/assets/svg/common-icon/close.svg';

import { SvgIcon } from '@/components';

import { ThemeColor } from './ThemeColor';
import { LayoutMode } from './LayoutMode';
import { LayoutSelector } from './LayoutSelector';

const Setting: FC = () => {
  const drawerVisible = useSettingsStore.use.drawerVisible();
  const setDrawerVisible = useSettingsStore.use.setDrawerVisible();

  return (
    <Drawer
      title="系统设置"
      onClose={() => setDrawerVisible(false)}
      open={drawerVisible}
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
