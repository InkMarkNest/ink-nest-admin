import { resolve } from 'node:path';

import react from '@vitejs/plugin-react-swc';

const baseConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
    },
  },
  server: {
    host: true,
    port: 2333,
  },
};

export default baseConfig;
