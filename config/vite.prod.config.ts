import baseConfig from './vite.base.config'

export default {
  ...baseConfig,
  build: {
    minify: true,
    // 其他生产构建选项...
  }
}
