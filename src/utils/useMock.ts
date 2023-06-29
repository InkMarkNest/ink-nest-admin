// @ts-nocheck
import { worker } from '../../mocks/browser';

/**
 * Initializes and starts the msw mock server
 */
function useMock() {
  worker.start({
    serviceWorker: {
      url: `${import.meta.env.VITE_MSW_PATH}mockServiceWorker.js`,
    },
    onUnhandledRequest: 'bypass',
  });
}

export { useMock };
