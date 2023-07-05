import { RequestHandler } from 'msw';

import { login, userInfo } from './api';

/**
 * 用户模块 Mock API
 */
export const userHandler: RequestHandler[] = [login, userInfo];
