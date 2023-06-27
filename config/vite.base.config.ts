import { resolve } from 'node:path';

import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react-swc';

const baseConfig = {
  base: './',
  plugins: [react(), svgr({ include: '**/*.svg' })],
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
