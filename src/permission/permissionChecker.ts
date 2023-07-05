import { Role } from '../types/user';

/**
 * 检查用户是否具有访问指定路由的权限
 * @param roles 用户的角色列表
 * @param route 当前路由
 */
const hasRoutePermission = (roles: Role[], route: string): boolean => {
  const routePath = route.replace(/^\//, '');
  // 检查用户角色列表中的所有权限
  for (const role of roles) {
    for (const userPermission of role.permissions) {
      if (userPermission.resource === routePath) {
        return false;
      }
    }
  }

  return true;
};

export { hasRoutePermission };
