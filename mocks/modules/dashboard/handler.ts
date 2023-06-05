import { rest } from 'msw';

/**
 * 仪表盘 Mock API
 */
export const dashBoardHandler = [
  /**
   * 处理 "/welcome" GET 请求
   *
   * @param {Object} req - 请求对象
   * @param {Function} res - 响应构造函数
   * @param {Object} ctx - 响应上下文对象
   * @returns {Function} 响应函数
   */
  rest.get('/welcome', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      );
    }

    // If authenticated, return a welcome message
    return res(
      ctx.status(200),
      ctx.json({
        code: '200',
        message: 'Success',
        data: {
          message: '欢迎访问 墨迹小窝 后台管理系统',
        },
      }),
    );
  }),
];
