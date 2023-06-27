import { FC } from 'react';
import { SmileOutlined, FireOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';

import { useSettingsStore } from '@/store';

import { ThemeMode, SettingsState } from '@/types/systemSetting';

const items: MenuProps['items'] = [
  {
    key: ThemeMode.defaultAlgorithm,
    label: <>默认模式</>,
  },
  {
    key: ThemeMode.darkAlgorithm,
    label: <>暗黑模式</>,
    icon: <SmileOutlined />,
  },
  {
    key: ThemeMode.compactAlgorithm,
    label: <>紧凑模式</>,
  },
  {
    key: ThemeMode.system,
    label: <>跟随系统</>,
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
          <Button type="primary" shape="circle" ghost icon={<FireOutlined />} />
        </Space>
      </a>
    </Dropdown>
  );
};

export { ThemeModeControl };
