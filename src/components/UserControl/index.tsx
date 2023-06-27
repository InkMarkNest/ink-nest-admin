import { FC } from 'react';

import { Space } from 'antd';

import { ThemeModeControl } from './ThemeMode';
import { Logout } from './Logout';

const UserControl: FC = () => {
  return (
    <Space>
      <ThemeModeControl />
      <Logout />
    </Space>
  );
};

export { UserControl };
