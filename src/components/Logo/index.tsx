import { FC } from 'react';

import { ReactComponent as CILogo } from '@/assets/svg/common-icon/ink-logo.svg';

import { useSettingsStore } from '@/store';

import { SvgIcon } from '../Icon';

const TitleText: FC = () => {
  const collapsed = useSettingsStore.use.collapsed();
  const layoutMode = useSettingsStore.use.layoutMode();

  if (layoutMode === 'topBarAndLeftSidebarAndContent') {
    return <span>Ink Nest Admin</span>;
  }
  if (layoutMode === 'topBarAndContent') {
    return <span>Ink Nest Admin</span>;
  }
  if (!collapsed) {
    return <span className="tw-text-xl">Ink Nest Admin</span>;
  }

  return '';
};

const Logo: FC = () => {
  const layoutMode = useSettingsStore.use.layoutMode();

  return (
    <div className="tw-flex">
      <div className="tw-font-semibol tw-min-w-[165px] tw-truncate tw-p-[14px] tw-text-2xl">
        <span className="tw-mr-1">
          <SvgIcon
            element={CILogo}
            size={
              layoutMode === 'topBarAndLeftSidebarAndContent' || layoutMode === 'topBarAndContent'
                ? 'xl'
                : 'large'
            }
          />
        </span>
        <TitleText />
      </div>
    </div>
  );
};

export { Logo };
