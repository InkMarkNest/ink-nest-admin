import { MenuProps } from 'antd';
import { ReactNode, Key } from 'react';

import { User } from '@/types/user';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: ReactNode,
  key: Key,
  route: string,
  icon?: ReactNode,
  children?: MenuItem[],
  type?: 'group',
  disabled?: boolean,
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    route,
    type,
    disabled,
  } as MenuItem;
}

function isDisabled(user: User, path: string): boolean | undefined {
  for (const permission of user.permissions) {
    for (const route of permission.routes) {
      if (path === route.id) {
        return !route.granted;
      }
    }
  }
  return undefined;
}

function convertRoutesToMenu(routes: any, user: User, parentPath = ''): MenuItem[] {
  let menuItems: MenuItem[] = [];

  for (const route of routes) {
    let children: MenuItem[] | undefined;

    // 检查子路径是否以 '/' 开头，如果是，则去掉 '/'
    const childPath = route.path.startsWith('/') ? route.path.slice(1) : route.path;

    // 拼接父级路径和当前路径，如果父路径不为空，则在父路径后加上 '/'
    const fullPath = parentPath ? `${parentPath}/${childPath}` : childPath;

    if (route.children) {
      children = convertRoutesToMenu(route.children, user, fullPath);
    }

    if (route.props && route.props.isMenu) {
      const disabled = isDisabled(user, route.path);
      menuItems.push(getItem(route.path, route.id, fullPath, null, children, undefined, disabled));
    } else if (children) {
      menuItems = [...menuItems, ...children];
    }
  }

  return menuItems;
}

function findItemByKey(key: string, items: any[]): any {
  for (const item of items) {
    if (item?.key === key) {
      return item;
    }

    if (item?.children) {
      const found = findItemByKey(key, item.children);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

export { convertRoutesToMenu, findItemByKey };
