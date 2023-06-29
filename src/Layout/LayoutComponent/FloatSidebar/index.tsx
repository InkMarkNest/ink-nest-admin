import { FC } from 'react';

import { Drawer, theme } from 'antd';

import { ReactComponent as CIClose } from '@/assets/svg/common-icon/close.svg';

import { SvgIcon, RouteMenu } from '@/components';
import { useSettingsStore } from '@/store';

const FloatSidebar: FC = () => {
  const sidebarDrawerVisible = useSettingsStore.use.sidebarDrawerVisible();
  const setSidebarDrawerVisible = useSettingsStore.use.setSidebarDrawerVisible();
  const { token } = theme.useToken();

  return (
    <Drawer
      placement="left"
      width={200}
      headerStyle={{
        display: 'none',
      }}
      bodyStyle={{
        padding: '0',
        backgroundColor: token.colorPrimaryBg,
      }}
      onClose={() => setSidebarDrawerVisible(false)}
      open={sidebarDrawerVisible}
      closeIcon={<SvgIcon element={CIClose} size="large" />}
    >
      <RouteMenu />
    </Drawer>
  );
};

export { FloatSidebar };
