import { rest } from 'msw';

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
  rest.post('/api/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true');

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        code: 200,
        message: '登录成功 欢迎访问',
        data: {},
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
  rest.get('/api/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
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
        data: { userInfo: { id: 1, name: 'xidongdong', email: 'youzegehq@gmail.com' } },
      }),
    );
  }),
];
