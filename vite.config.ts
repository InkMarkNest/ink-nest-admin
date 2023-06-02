import { defineConfig } from 'vite'
import devConfig from './config/vite.base.config'
import prodConfig from './config/vite.prod.config'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return devConfig;
  } else {
    return prodConfig;
  }
})
