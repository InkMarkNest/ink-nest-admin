import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@/pages/Home';
import { NotFound } from '@/pages/Exceptions';
import { Login } from '@/pages/Login';

import { ProtectedRoute } from './useProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute requiredRole="admin">
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export { router };
