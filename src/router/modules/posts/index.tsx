import { Navigate } from 'react-router-dom';

import { ExtendedRouteObject } from '@/types/route';

import { AuthGuard } from '@/permission/AuthGuard';
import { CreatePost, PostList, PostEdit } from '@/pages/Post';

const postsRoutes: ExtendedRouteObject[] = [
  {
    path: 'posts',
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
        element: <Navigate to="/posts/list" />,
      },
      {
        path: 'list',
        props: {
          isMenu: true,
        },
        element: <AuthGuard element={<PostList />} />,
      },
      {
        path: 'create',
        props: {
          isMenu: true,
        },
        element: <AuthGuard element={<CreatePost />} />,
      },
      {
        path: 'edit',
        props: {
          isMenu: true,
        },
        element: <AuthGuard element={<PostEdit />} />,
      },
    ],
  },
];

export { postsRoutes };
