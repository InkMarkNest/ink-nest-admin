import { ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';

// 定义一个额外的类型来包含所需的角色
export interface RouteWithRoles {
  roles?: string[];
}

// 使用交集类型来组合 RouteObject 和 RouteWithRoles
export type ExtendedRouteObject = RouteObject & RouteWithRoles;

export interface AuthGuardComponent {
  element: ReactNode;
  moduleId: string;
  routeId: string;
}

export interface RoutePermission {
  id: string;
  description: string;
  granted: boolean;
}

export interface ModulePermission {
  moduleId: string;
  description: string;
  routes: RoutePermission[];
}
