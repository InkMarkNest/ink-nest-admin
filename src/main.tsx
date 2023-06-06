import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';

import { App } from './App';

import './styles/index.scss';
import { baseThemeConfig } from './theme';
import { executeFunctions, useMock } from './utils';

if (import.meta.env.MODE === 'development') executeFunctions([useMock]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={baseThemeConfig}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
