import { Navigate } from 'react-router-dom';

import { NotAuthorized, NotFound } from '@/pages/Exceptions';
import { Login } from '@/pages/Login';

import { MainLayout } from '@/Layout';

import { AuthGuard } from '@/permission/AuthGuard';

import { ExtendedRouteObject } from '@/types/route';

import { dashboardRoutes, postsRoutes, studyRoutes } from './modules';
import { usersRoutes } from './modules/users';

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
      ...usersRoutes,
      ...postsRoutes,
    ],
  },
  {
    path: '/login',
    props: {
      isMenu: false,
    },
    element: <AuthGuard element={<Login />} />,
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
