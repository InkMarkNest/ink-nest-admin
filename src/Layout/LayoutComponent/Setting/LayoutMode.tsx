import { Button, Space } from 'antd';
import { FC } from 'react';

import { ReactComponent as CILayoutA } from '@/assets/svg/common-icon/layout-a.svg';
import { ReactComponent as CILayoutB } from '@/assets/svg/common-icon/layout-b.svg';
import { ReactComponent as CILayoutC } from '@/assets/svg/common-icon/layout-c.svg';
import { ReactComponent as CILayoutD } from '@/assets/svg/common-icon/layout-d.svg';

import { SvgIcon } from '@/components';
import { useSettingsStore } from '@/store';

const LayoutMode: FC = () => {
  const setLayoutMode = useSettingsStore.use.setLayoutMode();

  return (
    <div className="tw-h-12 tw-w-full">
      <Space direction="vertical">
        <span>布局模式</span>
        <Space>
          {/* 布局 按钮 */}
          <Button
            type="text"
            icon={<SvgIcon size="large" element={CILayoutA} />}
            onClick={() => setLayoutMode('topBarAndLeftSidebarAndContent')}
          />
          <Button
            type="text"
            icon={<SvgIcon size="large" element={CILayoutB} />}
            onClick={() => setLayoutMode('topBarAndContent')}
          />
          <Button
            type="text"
            icon={<SvgIcon size="large" element={CILayoutC} />}
            onClick={() => setLayoutMode('contentAndRightSidebar')}
          />
          <Button
            type="text"
            icon={<SvgIcon size="large" element={CILayoutD} />}
            onClick={() => setLayoutMode('leftSidebarAndContent')}
          />
        </Space>
      </Space>
    </div>
  );
};

export { LayoutMode };
