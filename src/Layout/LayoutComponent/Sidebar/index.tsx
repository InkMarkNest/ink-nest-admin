import { Button } from 'antd';
import { FC } from 'react';

import { createStyles } from 'antd-style';

import { SiderbarProps } from '@/types/layout';
import { Logo, RouteMenu, SvgIcon } from '@/components';

import { ReactComponent as CIStar } from '@/assets/svg/common-icon/star.svg';
import { ReactComponent as CIStarHalf } from '@/assets/svg/common-icon/star-half.svg';
import { useSettingsStore } from '@/store';

const useStyle = createStyles(({ token, css }) => ({
  sidebar: css`
    background: ${token.colorPrimaryBg};
  `,
}));

const Sidebar: FC<SiderbarProps> = () => {
  const { styles, cx } = useStyle();
  const collapsed = useSettingsStore.use.collapsed();
  const setCollapsed = useSettingsStore.use.setCollapsed();
  const layoutMode = useSettingsStore.use.layoutMode();

  return (
    <aside
      className={cx(
        'tw-relative tw-h-full tw-transition-all',
        collapsed ? 'tw-w-14' : 'tw-w-64',
        styles.sidebar,
      )}
    >
      {(layoutMode === 'contentAndRightSidebar' || layoutMode === 'leftSidebarAndContent') && (
        <Logo />
      )}

      <div className="tw-flex tw-h-12 tw-w-full tw-items-center tw-justify-center tw-px-2">
        <Button
          type="text"
          style={{ width: '100%' }}
          icon={<SvgIcon element={collapsed ? CIStarHalf : CIStar} />}
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>
      <RouteMenu />
    </aside>
  );
};

export { Sidebar };
