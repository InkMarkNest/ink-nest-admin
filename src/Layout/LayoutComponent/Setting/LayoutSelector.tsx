import { FC } from 'react';
import { Space, Checkbox, Input } from 'antd';

const LayoutSelector: FC = () => {
  return (
    <div className="tw-h-28 tw-w-full">
      <Space className="tw-w-full" direction="vertical">
        <span>布局组件</span>
        <Space className="tw-w-full" direction="vertical">
          {/* 布局 按钮 */}
          <div className="tw-flex tw-items-center tw-justify-between tw-px-2">
            <span>顶栏</span>
            <Checkbox />
          </div>
          <div className="tw-flex tw-items-center tw-justify-between tw-px-2">
            <span>侧边栏</span>
            <Checkbox />
          </div>
          <div className="tw-flex tw-items-center tw-justify-between tw-px-2">
            <span>页脚</span>
            <Checkbox />
          </div>
          <div className="tw-flex tw-items-center tw-justify-between tw-px-2">
            <span>菜单宽度</span>
            <Input className="tw-w-24" placeholder="输入宽度" />
          </div>
        </Space>
      </Space>
    </div>
  );
};

export { LayoutSelector };
