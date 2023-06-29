import { FC } from 'react';

import { createStyles } from 'antd-style';

import { Button } from 'antd';

import { TopbarProps } from '@/types/layout';
import { Logo, UserControl, SvgIcon } from '@/components';

import { ReactComponent as CIMenu } from '@/assets/svg/common-icon/menu.svg';
import { useSettingsStore } from '@/store';

const useStyle = createStyles(({ token, css }) => ({
  sidebar: css`
    background: ${token.colorPrimaryBg};
    border-color: ${token.colorBgLayout};
  `,
}));

const Topbar: FC<TopbarProps> = () => {
  const { styles, cx } = useStyle();
  const layoutMode = useSettingsStore.use.layoutMode();
  const setSidebarDrawerVisible = useSettingsStore.use.setSidebarDrawerVisible();

  return (
    <div
      className={cx(
        'tw-flex tw-h-20 tw-w-full tw-items-center tw-justify-between tw-border-0 tw-border-b-2 tw-border-solid tw-px-4 tw-font-semibold',
        styles.sidebar,
      )}
    >
      <Logo />
      {layoutMode === 'topBarAndContent' && (
        <Button
          className="tw-ml-4"
          type="text"
          icon={<SvgIcon element={CIMenu} />}
          onClick={() => setSidebarDrawerVisible(true)}
        />
      )}

      <div className="tw-flex-1" />
      <UserControl />
    </div>
  );
};

export { Topbar };
