import baseConfig from './vite.base.config';

export default {
  ...baseConfig,
  base: '/ink-nest-admin/',
  build: {
    minify: true,
    // 其他生产构建选项...
  },
};
