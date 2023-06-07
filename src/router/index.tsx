import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@/pages/Home';
import { NotFound } from '@/pages/Exceptions';
import { Login } from '@/pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export { router };
