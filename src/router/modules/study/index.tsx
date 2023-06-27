import { Navigate } from 'react-router-dom';

import { ContentLayout } from '@/Layout/ContentLayout';

import { ExtendedRouteObject } from '@/types/route';

import { Game } from '@/pages/Study';

const studyRoutes: ExtendedRouteObject[] = [
  {
    path: 'study',
    element: <ContentLayout />,
    props: {
      isMenu: true,
    },
    children: [
      {
        index: true,
        path: '',
        element: <Navigate to="/study/game" />,
      },
      {
        path: 'game',
        props: {
          isMenu: true,
        },
        element: <Game />,
      },
    ],
  },
];

export { studyRoutes };
