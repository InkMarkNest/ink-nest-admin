import { theme, Button } from 'antd';
import { FC } from 'react';
import { clsx } from 'clsx';

import { SiderbarProps } from '@/types/layout';
import { RouteMenu, SvgIcon } from '@/components';

import { ReactComponent as CIStar } from '@/assets/svg/common-icon/star.svg';
import { ReactComponent as CIStarHalf } from '@/assets/svg/common-icon/star-half.svg';
import { useSettingsStore } from '@/store';

const { useToken } = theme;

const Siderbar: FC<SiderbarProps> = ({ isSticky }) => {
  const collapsed = useSettingsStore.use.collapsed();
  const setCollapsed = useSettingsStore.use.setCollapsed();
  const { token } = useToken();

  const stickySider = 'tw-sticky tw-h-screen tw-z-10 tw-left-0 tw-top-0 tw-bottom-0';

  return (
    <aside
      className={clsx(
        'tw-relative tw-h-full tw-w-56 tw-transition-all',
        isSticky && stickySider,
        collapsed && 'tw-w-14',
      )}
      style={{ backgroundColor: token.colorPrimaryBg }}
    >
      <div className="tw-flex tw-h-12 tw-w-full tw-items-center tw-justify-center">
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

export { Siderbar };
