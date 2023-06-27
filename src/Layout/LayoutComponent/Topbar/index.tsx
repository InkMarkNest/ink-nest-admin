import { theme } from 'antd';
import { FC } from 'react';
import { clsx } from 'clsx';

import { TopbarProps } from '@/types/layout';
import { Logo, UserControl } from '@/components';

const { useToken } = theme;

const Topbar: FC<TopbarProps> = ({ isSticky }) => {
  const { token } = useToken();

  const stickyTop = 'tw-sticky  tw-z-10 tw-top-0';

  const bgColor = `tw-bg-[${token.colorPrimaryBg}]`;

  return (
    <div
      className={clsx(
        'tw-flex tw-h-20 tw-w-full tw-items-center tw-justify-between tw-px-4 tw-text-2xl tw-font-semibold',
        isSticky && stickyTop,
        bgColor,
      )}
      style={{ backgroundColor: token.colorBgLayout }}
    >
      <Logo />
      <UserControl />
    </div>
  );
};

export { Topbar };
