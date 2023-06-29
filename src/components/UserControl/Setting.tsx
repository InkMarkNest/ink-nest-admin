import { FC } from 'react';

import { Button } from 'antd';

import { ReactComponent as PISettings } from '@/assets/svg/pixel-icon/-settings.svg';

import { useSettingsStore } from '@/store';

import { SvgIcon } from '../Icon';

const Setting: FC = () => {
  const setSettingDrawerVisible = useSettingsStore.use.setSettingDrawerVisible();

  return (
    <Button
      type="text"
      shape="circle"
      onClick={() => setSettingDrawerVisible(true)}
      icon={<SvgIcon element={PISettings} />}
    />
  );
};

export { Setting };
