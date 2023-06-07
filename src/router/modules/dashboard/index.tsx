import { Navigate, RouteObject } from 'react-router-dom';

import { Monitor, Workplace } from '@/pages/Dashboard';

import { ContentLayout } from '@/Layout/ContentLayout';

import { ProtectedRoute } from '../../useProtectedRoute';

const dashboardRoutes: RouteObject[] = [
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
        element: (
          <ProtectedRoute requiredRole="admin">
            <Workplace />
          </ProtectedRoute>
        ),
      },
      {
        path: 'monitor',
        element: (
          <ProtectedRoute requiredRole="admin">
            <Monitor />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

export { dashboardRoutes };
