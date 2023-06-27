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
        props: {
          isMenu: false,
        },
        element: <Navigate to="/dashboard" />,
      },
      ...dashboardRoutes,
    ],
  },
  {
    path: '/login',
    props: {
      isMenu: false,
    },
    element: <AuthGuard element={<Login />} moduleId="" routeId="" />,
  },
  {
    path: '/not-authorized',
    props: {
      isMenu: false,
    },
    element: <NotAuthorized />,
  },
  {
    path: '*',
    props: {
      isMenu: false,
    },
    element: <NotFound />,
  },
  ...studyRoutes,
];

export { routesConfig };
