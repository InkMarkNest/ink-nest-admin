import { FC } from 'react';

import { Space } from 'antd';

import { ThemeModeControl } from './ThemeMode';
import { Logout } from './Logout';
import { Setting } from './Setting';

const UserControl: FC = () => {
  return (
    <Space>
      <Setting />
      <ThemeModeControl />
      <Logout />
    </Space>
  );
};

export { UserControl };
