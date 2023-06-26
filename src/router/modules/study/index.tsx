import { Navigate } from 'react-router-dom';

import { ContentLayout } from '@/Layout/ContentLayout';

import { ExtendedRouteObject } from '@/types/route';

import { Game } from '@/pages/Study';

const studyRoutes: ExtendedRouteObject[] = [
  {
    path: 'study',
    element: <ContentLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/study/game" />,
      },
      {
        path: 'game',
        element: <Game />,
      },
    ],
  },
];

export { studyRoutes };
