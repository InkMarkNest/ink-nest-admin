import { FC } from 'react';
import { FloatButton } from 'antd';

import { ReactComponent as PISettings } from '@/assets/svg/pixel-icon/-settings.svg';

import { useSettingsStore } from '@/store';

import { SvgIcon } from '@/components';

const FloatSetting: FC = () => {
  const drawerVisible = useSettingsStore.use.drawerVisible();
  const setDrawerVisible = useSettingsStore.use.setDrawerVisible();
  const layoutMode = useSettingsStore.use.layoutMode();

  return (
    <>
      <FloatButton.Group shape="circle" style={{ right: 24 }}>
        {(layoutMode === 'leftSidebarAndContent' || layoutMode === 'contentAndRightSidebar') && (
          <FloatButton
            onClick={() => setDrawerVisible(!drawerVisible)}
            icon={<SvgIcon element={PISettings} />}
          />
        )}
        <FloatButton.BackTop />
      </FloatButton.Group>
    </>
  );
};

export { FloatSetting };
