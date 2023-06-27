import { theme } from 'antd';
import { FC } from 'react';
import { clsx } from 'clsx';

import { SiderbarProps } from '@/types/layout';
import { RouteMenu } from '@/components';

const { useToken } = theme;

const Siderbar: FC<SiderbarProps> = ({ isSticky }) => {
  const { token } = useToken();

  const stickySider = 'tw-sticky tw-h-screen tw-z-10 tw-left-0 tw-top-0 tw-bottom-0';

  return (
    <aside
      className={clsx('tw-h-auto tw-w-56', isSticky && stickySider)}
      style={{ backgroundColor: token.colorPrimaryBg }}
    >
      <RouteMenu />
    </aside>
  );
};

export { Siderbar };
