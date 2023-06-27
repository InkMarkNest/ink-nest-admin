import { theme } from 'antd';
import { FC } from 'react';

import { Outlet } from 'react-router-dom';

const { useToken } = theme;

const Content: FC = () => {
  const { token } = useToken();

  return (
    <main
      className="tw-h-full tw-w-full tw-p-8"
      style={{
        backgroundColor: token.colorBgContainer,
      }}
    >
      <div className="tw-w-ful tw-h-full">
        <Outlet />
      </div>
    </main>
  );
};

export { Content };
