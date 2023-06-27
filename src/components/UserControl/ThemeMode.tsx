import { FC } from 'react';

import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';

import { useSettingsStore } from '@/store';

import { ThemeMode, SettingsState } from '@/types/systemSetting';

import { ReactComponent as CIMoon } from '@/assets/svg/common-icon/moon.svg';
import { ReactComponent as CISun } from '@/assets/svg/common-icon/sun.svg';
import { ReactComponent as PIShy } from '@/assets/svg/pixel-icon/-shy.svg';
import { ReactComponent as PIBoard } from '@/assets/svg/pixel-icon/-bored.svg';
import { ReactComponent as PIHappy } from '@/assets/svg/pixel-icon/-happy.svg';

import { SvgIcon } from '../Icon';

const items: MenuProps['items'] = [
  {
    key: ThemeMode.defaultAlgorithm,
    label: <>默认模式</>,
    icon: <SvgIcon element={CISun} />,
  },
  {
    key: ThemeMode.darkAlgorithm,
    label: <>暗黑模式</>,
    icon: <SvgIcon element={CIMoon} />,
  },
  {
    key: ThemeMode.compactAlgorithm,
    label: <>紧凑模式</>,
    icon: <SvgIcon element={PIShy} />,
  },
  {
    key: ThemeMode.system,
    label: <>跟随系统</>,
    icon: <SvgIcon element={PIBoard} />,
  },
];

const ThemeModeControl: FC = () => {
  const toggleThemeMode = useSettingsStore.use.toggleThemeMode();
  const onClick: MenuProps['onClick'] = ({ key }) => {
    toggleThemeMode(key as SettingsState['themeMode']);
  };

  return (
    <Dropdown menu={{ items, onClick }} placement="bottom">
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <Button type="text" shape="circle" icon={<SvgIcon element={PIHappy} />} />
        </Space>
      </a>
    </Dropdown>
  );
};

export { ThemeModeControl };
