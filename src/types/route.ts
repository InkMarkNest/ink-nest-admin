import { MenuProps } from 'antd';
import { ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';

// 定义一个额外的类型来包含所需的角色
export interface RouterOtherProps {
  props?: {
    isMenu: boolean;
    public?: boolean;
  };
  roles?: string[];
  children?: ExtendedRouteObject[];
}

// 使用交集类型来组合 RouteObject 和 RouterOtherProps
export type ExtendedRouteObject = RouteObject & RouterOtherProps;

export interface AuthGuardComponent {
  element: ReactNode;
}

export type MenuItem = Required<MenuProps>['items'][number];
