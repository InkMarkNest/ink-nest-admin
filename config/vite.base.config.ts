import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'

const baseConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src')
    }
  },
  server: {
    host: true,
    port: 2333
  }
}

export default baseConfig;
