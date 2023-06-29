import { FC } from 'react';

import { createStyles } from 'antd-style';

import { useSettingsStore } from '@/store';

import { Content, FloatSidebar, Footer, Setting, Sidebar, Topbar } from '../LayoutComponent';
import { FloatSetting } from '../LayoutComponent/Setting/FloatSetting';

const useStyle = createStyles(({ token, css }) => ({
  mainLayout: css`
    color: ${token.colorText};
  `,
}));

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
  const { styles, cx } = useStyle();
  const layoutMode = useSettingsStore.use.layoutMode();

  return (
    <section className={cx('tw-h-full tw-w-full', styles.mainLayout)}>
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
      {layoutMode === 'topBarAndContent' && <FloatSidebar />}
    </section>
  );
};

export { MainLayout };
