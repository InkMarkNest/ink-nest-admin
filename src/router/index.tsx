import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

import { NotFound } from '@/pages/Exceptions';
import { Login } from '@/pages/Login';

import { MainLayout } from '@/Layout';

import { dashboardRoutes } from './modules';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" />,
      },
      ...dashboardRoutes,
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

export { router };
