import { Navigate } from 'react-router-dom';

import { Monitor, Workplace } from '@/pages/Dashboard';

import { ExtendedRouteObject } from '@/types/route';

import { AuthGuard } from '@/permission/AuthGuard';

const dashboardRoutes: ExtendedRouteObject[] = [
  {
    path: 'dashboard',
    props: {
      isMenu: true,
      public: true,
    },
    children: [
      {
        index: true,
        path: '',
        props: {
          isMenu: false,
        },
        element: <Navigate to="/dashboard/workplace" />,
      },
      {
        path: 'workplace',
        props: {
          isMenu: true,
        },
        element: <AuthGuard element={<Workplace />} />,
      },
      {
        path: 'monitor',
        props: {
          isMenu: true,
        },
        element: <AuthGuard element={<Monitor />} />,
      },
    ],
  },
];

export { dashboardRoutes };
