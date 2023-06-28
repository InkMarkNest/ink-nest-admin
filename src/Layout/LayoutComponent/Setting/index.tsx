import { FC } from 'react';

import { Drawer } from 'antd';

import { useSettingsStore } from '@/store';

import { ReactComponent as CIClose } from '@/assets/svg/common-icon/close.svg';

import { SvgIcon } from '@/components';

const Setting: FC = () => {
  const drawerVisible = useSettingsStore.use.drawerVisible();
  const setDrawerVisible = useSettingsStore.use.setDrawerVisible();

  return (
    <Drawer
      title="系统设置"
      onClose={() => setDrawerVisible(false)}
      open={drawerVisible}
      closeIcon={<SvgIcon element={CIClose} size="large" />}
    />
  );
};

export { Setting };
