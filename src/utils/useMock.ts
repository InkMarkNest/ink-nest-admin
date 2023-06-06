// eslint-disable-next-line import/no-extraneous-dependencies
import { SetupWorkerApi } from 'msw';

import { worker } from '../../mocks/browser';

/**
 * Initializes and starts the msw mock server.
 * @return {SetupWorkerApi} The worker instance.
 */
function useMock(): SetupWorkerApi {
  worker.start({
    onUnhandledRequest: 'bypass',
  });

  return worker;
}

export { useMock };
