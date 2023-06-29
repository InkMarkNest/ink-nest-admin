import { createBrowserRouter } from 'react-router-dom';

import { routesConfig } from './routesConfig';

const router = createBrowserRouter(routesConfig, {
  basename: import.meta.env.VITE_MSW_PATH,
});

export { router };
