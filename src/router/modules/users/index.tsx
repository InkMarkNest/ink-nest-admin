import { Navigate } from 'react-router-dom';

import { ExtendedRouteObject } from '@/types/route';

import { AuthGuard } from '@/permission/AuthGuard';
import { UserList, CreateUser, UserEdit } from '@/pages/User';

const usersRoutes: ExtendedRouteObject[] = [
  {
    path: 'users',
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
        element: <Navigate to="/users/list" />,
      },
      {
        path: 'list',
        props: {
          isMenu: true,
        },
        element: <AuthGuard element={<UserList />} />,
      },
      {
        path: 'create',
        props: {
          isMenu: true,
        },
        element: <AuthGuard element={<CreateUser />} />,
      },
      {
        path: 'edit',
        props: {
          isMenu: true,
        },
        element: <AuthGuard element={<UserEdit />} />,
      },
    ],
  },
];

export { usersRoutes };
