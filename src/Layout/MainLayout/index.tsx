import { FC } from 'react';
import { theme } from 'antd';

import { useSettingsStore } from '@/store';

import { Content, Footer, Setting, Sidebar, Topbar } from '../LayoutComponent';
import { FloatSetting } from '../LayoutComponent/Setting/FloatSetting';

const { useToken } = theme;

const LayoutWithTopbarAndContent = () => (
  <>
    <Topbar />

    <section className="tw-flex tw-h-full tw-w-full">
      <section className="tw-flex tw-w-full tw-flex-col tw-transition-all">
        {/* 路由内容 */}
        <Content />
        <Footer />
      </section>
    </section>
  </>
);

const LayoutWithTopBarAndLeftSidebarAndContent = () => (
  <>
    {/* 顶栏 */}

    <Topbar />

    <section className="tw-flex tw-h-full tw-w-full">
      {/* 侧边栏 */}
      <Sidebar />
      <section className="tw-flex tw-w-full tw-flex-col tw-transition-all">
        {/* 路由内容 */}
        <Content />
        <Footer />
      </section>
    </section>
  </>
);

const LayoutWithSidebarAndContent: FC<{ sidebarPosition: 'left' | 'right' }> = ({
  sidebarPosition,
}) => (
  <>
    <section className="tw-flex tw-h-full tw-w-full">
      {sidebarPosition === 'left' && <Sidebar />}
      <section className="tw-flex tw-w-full tw-flex-col tw-transition-all">
        {/* 路由内容 */}
        <Content />
        <Footer />
      </section>
      {sidebarPosition === 'right' && <Sidebar />}
    </section>
  </>
);

const MainLayout: FC = () => {
  const { token } = useToken();
  const layoutMode = useSettingsStore.use.layoutMode();

  return (
    <section className="tw-h-full tw-w-full" style={{ color: token.colorText }}>
      {layoutMode === 'topBarAndContent' && <LayoutWithTopbarAndContent />}
      {layoutMode === 'topBarAndLeftSidebarAndContent' && (
        <LayoutWithTopBarAndLeftSidebarAndContent />
      )}
      {layoutMode === 'contentAndRightSidebar' && (
        <LayoutWithSidebarAndContent sidebarPosition="right" />
      )}
      {layoutMode === 'leftSidebarAndContent' && (
        <LayoutWithSidebarAndContent sidebarPosition="left" />
      )}
      <Setting />
      <FloatSetting />
    </section>
  );
};

export { MainLayout };
