import { RouterProvider } from 'react-router-dom';

import { useEffect } from 'react';

import { ConfigProvider } from 'antd';

import { router } from '@/router';
import { useSettingsStore, useUserStore } from '@/store';
import { LoadingIndicator } from '@/components';

const App = () => {
  const isLoaded = useUserStore.use.isLoaded();
  const init = useUserStore.use.init();
  const themeConfig = useSettingsStore.use.themeConfig();

  useEffect(() => {
    // 当应用启动时，执行 Zustand store 的 init 方法
    init();
  }, [init]);

  if (isLoaded) {
    // 用户信息还在加载中，显示加载指示器
    return <LoadingIndicator />;
  }
  // 用户信息已经加载完成，开始渲染路由
  return (
    <ConfigProvider theme={themeConfig}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export { App };
