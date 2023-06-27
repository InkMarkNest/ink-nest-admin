import { FC } from 'react';

import { theme } from 'antd';

import { Content, Footer, Siderbar, Topbar } from '../LayoutComponent';

const { useToken } = theme;

const MainLayout: FC = () => {
  const { token } = useToken();

  return (
    <section className="tw-h-full tw-w-full" style={{ color: token.colorText }}>
      {/* 顶栏 */}

      <Topbar />

      <section className="tw-flex tw-h-full tw-w-full">
        {/* 侧边栏 */}
        <Siderbar />
        <section className="tw-flex tw-w-full tw-flex-col tw-transition-all">
          {/* 路由内容 */}
          <Content />
          <Footer />
        </section>
      </section>
    </section>
  );
};

export { MainLayout };
