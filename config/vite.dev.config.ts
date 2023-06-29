import baseConfig from './vite.base.config';

export default {
  ...baseConfig,
  base: '/',
  server: {
    open: true,
    // 其他开发服务器选项...
  },
};
