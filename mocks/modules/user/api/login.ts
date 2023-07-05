import { DefaultBodyType, MockedRequest, RestHandler, rest } from 'msw';

import { mockAdminUser, mockUser, mockTokenAdmin, mockTokenUser } from '../../../data';

/**
 * 处理登录 POST 请求
 */
export const login: RestHandler<MockedRequest<DefaultBodyType>> = rest.post(
  '/api/login',
  async (req, res, ctx) => {
    const body = await req.json();
    const { username, password } = body as { username: string; password: string };

    if (username === mockAdminUser.username && password === mockAdminUser.password) {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({
          code: 200,
          message: `${username} 登录成功，欢迎访问`,
          data: { token: mockTokenAdmin },
        }),
      );
    }

    if (username === mockUser.username && password === mockUser.password) {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({
          code: 200,
          message: `${username} 登录成功，欢迎访问`,
          data: { token: mockTokenUser },
        }),
      );
    }

    return res(
      ctx.status(401),
      ctx.json({
        code: 401,
        errorMessage: '用户名或密码错误',
      }),
    );
  },
);
