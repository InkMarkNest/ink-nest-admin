import { SetupWorker, setupWorker } from 'msw';

import { userHandler } from './modules/user';
import { dashBoardHandler } from './modules/dashboard';

const worker: SetupWorker = setupWorker(...[...userHandler, ...dashBoardHandler]);

export { worker };
