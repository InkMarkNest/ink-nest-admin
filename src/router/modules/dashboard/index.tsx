import { Navigate } from 'react-router-dom';

import { Monitor, Workplace } from '@/pages/Dashboard';

import { ContentLayout } from '@/Layout/ContentLayout';

import { ExtendedRouteObject } from '@/types/route';

import { AuthGuard } from '@/permission/AuthGuard';

const dashboardRoutes: ExtendedRouteObject[] = [
  {
    path: 'dashboard',
    element: <ContentLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/workplace" />,
      },
      {
        path: 'workplace',
        element: <AuthGuard element={<Workplace />} moduleId="dashboard" routeId="workplace" />,
      },
      {
        path: 'monitor',
        element: <AuthGuard element={<Monitor />} moduleId="dashboard" routeId="monitor" />,
      },
    ],
  },
];

export { dashboardRoutes };
