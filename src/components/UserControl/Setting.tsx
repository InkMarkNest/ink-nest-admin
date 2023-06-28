import { FC } from 'react';

import { Button } from 'antd';

import { ReactComponent as PISettings } from '@/assets/svg/pixel-icon/-settings.svg';

import { useSettingsStore } from '@/store';

import { SvgIcon } from '../Icon';

const Setting: FC = () => {
  const setDrawerVisible = useSettingsStore.use.setDrawerVisible();

  return (
    <Button
      type="text"
      shape="circle"
      onClick={() => setDrawerVisible(true)}
      icon={<SvgIcon element={PISettings} />}
    />
  );
};

export { Setting };
