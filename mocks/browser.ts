import { setupWorker } from 'msw';

import { userHandler } from './modules/user';
import { dashBoardHandler } from './modules/dashboard';

export const worker = setupWorker(...[...userHandler, ...dashBoardHandler]);
