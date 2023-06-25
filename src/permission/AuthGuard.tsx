import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthGuardComponent } from '@/types/route';
import { useUserStore } from '@/store';

import { CommonPath } from '@/router/Constant';

import { hasRoutePermission } from './permissionChecker';

const AuthGuard: FC<AuthGuardComponent> = ({ element, moduleId, routeId }) => {
  const user = useUserStore.use.user();

  const location = useLocation();

  // 检查用户是否登录
  const isLoggedIn = !!user;

  // 用户正在访问登录页面
  const isVisitingLogin = location.pathname === CommonPath.Login;

  // 没有登录，则引导至登录页面
  if (!isLoggedIn && !isVisitingLogin) {
    return <Navigate to={CommonPath.Login} state={{ from: location }} />;
  }

  // 如果用户已登录但没有权限，引导至无权限页面
  // 注意：如果用户正在访问登录页面，我们不检查权限
  if (isLoggedIn && !isVisitingLogin && !hasRoutePermission(moduleId, routeId, user.permissions)) {
    return <Navigate to={CommonPath.NotAuthorized} state={{ from: location }} />;
  }

  // 如果用户已登录并且在登录页面，引导至首页（或其他页面）
  if (isLoggedIn && isVisitingLogin) {
    return <Navigate to={CommonPath.MainLayout} state={{ from: location }} />;
  }

  // 如果用户已登录且具有权限，则渲染子组件
  return element;
};

export { AuthGuard };
