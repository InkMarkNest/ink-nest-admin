import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';

import { App } from './App';

import './styles/index.scss';

import { executeFunctions, useMock } from './utils';

if (import.meta.env.MODE === 'development') executeFunctions([useMock]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
