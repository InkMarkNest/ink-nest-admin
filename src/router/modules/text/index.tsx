import { Navigate } from 'react-router-dom';

import { ContentLayout } from '@/Layout/ContentLayout';

import { ExtendedRouteObject } from '@/types/route';

import { Game } from '@/pages/Text';

const textRoutes: ExtendedRouteObject[] = [
  {
    path: 'text',
    element: <ContentLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/text/game" />,
      },
      {
        path: 'game',
        element: <Game />,
      },
    ],
  },
];

export { textRoutes };
