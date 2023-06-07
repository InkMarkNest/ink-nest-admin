// @ts-nocheck
import { worker } from '../../mocks/browser';

/**
 * Initializes and starts the msw mock server
 */
function useMock() {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

export { useMock };
