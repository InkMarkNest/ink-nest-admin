import { rest } from 'msw';

const mockUser = {
  username: 'admin',
  password: '123456',
};

const mockToken = 'ink-admin-mock-token';

/**
 * 用户模块 Mock API
 */
export const userHandler = [
  /**
   * 处理登录 POST 请求
   *
   * @param {Object} req - 请求对象
   * @param {Function} res - 响应构造函数
   * @param {Object} ctx - 响应上下文对象
   * @returns {Function} 响应函数
   */
  rest.post('/api/login', async (req, res, ctx) => {
    const body = await req.json();
    const { username, password } = body as { username: string; password: string };

    if (username === mockUser.username && password === mockUser.password) {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({
          code: 200,
          message: '登录成功 欢迎访问',
          data: { token: mockToken },
        }),
      );
    }

    return res(
      ctx.status(401),
      ctx.json({
        code: 401,
        errorMessage: 'The user name or password is incorrect',
      }),
    );
  }),

  /**
   * 处理获取用户 GET 请求
   *
   * @param {Object} req - 请求对象
   * @param {Function} res - 响应构造函数
   * @param {Object} ctx - 响应上下文对象
   * @returns {Function} 响应函数
   */
  rest.get('/api/user/info', (req, res, ctx) => {
    const authorization = req.headers.get('authorization');

    if (!authorization || !authorization.startsWith('Bearer ')) {
      // If not authenticated, respond with a 403 error
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
      if (token !== mockToken) throw new Error('error');
    } catch (error) {
      return res(
        ctx.status(403),
        ctx.json({
          code: 403,
          errorMessage: 'Not authorized',
        }),
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        code: 200,
        message: 'Success',
        data: {
          userInfo: { id: 1, name: 'xidongdong', email: 'youzegehq@gmail.com', roles: ['admin'] },
        },
      }),
    );
  }),
];
