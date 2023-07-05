import { DefaultBodyType, MockedRequest, RestHandler, rest } from 'msw';

import { adminUserInfoNew, mockTokenAdmin, mockTokenUser, viewerUserInfo } from '../../../data';

/**
 * 处理获取用户 GET 请求
 */
export const userInfo: RestHandler<MockedRequest<DefaultBodyType>> = rest.get(
  '/api/user/info',
  (req, res, ctx) => {
    const authorization = req.headers.get('authorization');

    if (!authorization || !authorization.startsWith('Bearer ')) {
      return res(
        ctx.status(403),
        ctx.json({
          code: 403,
          errorMessage: 'Not authorized',
        }),
      );
    }

    const token = authorization.split(' ')[1];

    try {
      if (token !== mockTokenAdmin && token !== mockTokenUser) throw new Error('error');
    } catch (error) {
      return res(
        ctx.status(403),
        ctx.json({
          code: 403,
          errorMessage: 'Not authorized',
        }),
      );
    }

    if (token === mockTokenAdmin) {
      return res(
        ctx.status(200),
        ctx.json({
          code: 200,
          message: 'Success',
          data: {
            userInfo: adminUserInfoNew,
          },
        }),
      );
    }

    if (token === mockTokenUser) {
      return res(
        ctx.status(200),
        ctx.json({
          code: 200,
          message: 'Success',
          data: {
            userInfo: viewerUserInfo,
          },
        }),
      );
    }

    return res(
      ctx.status(403),
      ctx.json({
        code: 403,
        errorMessage: 'Not authorized',
      }),
    );
  },
);
