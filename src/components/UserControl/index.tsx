import { FC } from 'react';

import { Space } from 'antd';

import { ThemeModeControl } from './ThemeMode';
import { Logout } from './Logout';
import { Setting } from './Setting';
import { Notice } from './Notice';

const UserControl: FC = () => {
  return (
    <Space>
      <Notice />
      <Setting />
      <ThemeModeControl />
      <Logout />
    </Space>
  );
};

export { UserControl };
