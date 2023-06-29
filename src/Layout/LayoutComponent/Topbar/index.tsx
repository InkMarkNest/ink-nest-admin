import { FC } from 'react';

import { createStyles } from 'antd-style';

import { TopbarProps } from '@/types/layout';
import { Logo, UserControl } from '@/components';

const useStyle = createStyles(({ token, css }) => ({
  sidebar: css`
    background: ${token.colorPrimaryBg};
    border-color: ${token.colorBgLayout};
  `,
}));

const Topbar: FC<TopbarProps> = () => {
  const { styles, cx } = useStyle();

  return (
    <div
      className={cx(
        'tw-flex tw-h-20 tw-w-full tw-items-center tw-justify-between tw-border-0 tw-border-b-2 tw-border-solid tw-px-4 tw-font-semibold',
        styles.sidebar,
      )}
    >
      <Logo />

      <UserControl />
    </div>
  );
};

export { Topbar };
