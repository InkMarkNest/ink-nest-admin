import { Navigate } from 'react-router-dom';

import { NotAuthorized, NotFound } from '@/pages/Exceptions';
import { Login } from '@/pages/Login';

import { MainLayout } from '@/Layout';

import { AuthGuard } from '@/permission/AuthGuard';

import { ExtendedRouteObject } from '@/types/route';

import { dashboardRoutes, studyRoutes } from './modules';

const routesConfig: ExtendedRouteObject[] = [
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
    element: <AuthGuard element={<Login />} moduleId="" routeId="" />,
  },
  {
    path: '/not-authorized',
    element: <NotAuthorized />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  ...studyRoutes,
];

export { routesConfig };
