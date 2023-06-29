import { FC } from 'react';
import { FloatButton } from 'antd';

import { ReactComponent as PISettings } from '@/assets/svg/pixel-icon/-settings.svg';

import { useSettingsStore } from '@/store';

import { SvgIcon } from '@/components';

const FloatSetting: FC = () => {
  const settingDrawerVisible = useSettingsStore.use.settingDrawerVisible();
  const setSettingDrawerVisible = useSettingsStore.use.setSettingDrawerVisible();
  const layoutMode = useSettingsStore.use.layoutMode();

  return (
    <>
      <FloatButton.Group shape="circle" style={{ right: 24 }}>
        {(layoutMode === 'leftSidebarAndContent' || layoutMode === 'contentAndRightSidebar') && (
          <FloatButton
            onClick={() => setSettingDrawerVisible(!settingDrawerVisible)}
            icon={<SvgIcon element={PISettings} />}
          />
        )}
        <FloatButton.BackTop />
      </FloatButton.Group>
    </>
  );
};

export { FloatSetting };
