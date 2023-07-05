import { ReactNode, Key } from 'react';

import { MenuItemGroupType, MenuItemType, SubMenuType } from 'antd/es/menu/hooks/useItems';

import { User } from '@/types/user';
import { MenuItem } from '@/types/route';

/**
 * 创建菜单项
 * @param {ReactNode} label 菜单标签
 * @param {Key} key 菜单键值
 * @param {string} route 路由
 * @param {ReactNode} [icon] 菜单图标
 * @param {MenuItem[]} [children] 子菜单
 * @param {'group'} [type] 类型
 * @param {boolean} [disabled] 是否禁用
 * @returns {MenuItem} 菜单项
 */
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

/**
 * 判断用户是否有访问指定路径的权限
 * @param {User} user 用户
 * @param {string} path 路径
 * @returns {boolean | undefined} 用户是否有访问路径的权限，如果没有找到指定路径，返回 undefined
 */
function isDisabled(user: User, path: string): boolean | undefined {
  const routePath = path.replace(/^\//, '');
  // 检查用户角色列表中的所有权限
  for (const role of user.roles) {
    for (const userPermission of role.permissions) {
      if (userPermission.resource === routePath) {
        return false;
      }
    }
  }

  return true;
}

/**
 * 将路由转换为菜单项
 * @param {any} routes 路由
 * @param {User} user 用户
 * @param {string} [parentPath=''] 父路径
 * @returns {MenuItem[]} 菜单项
 */
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
      let disabled = isDisabled(user, fullPath);
      disabled = route.props.public ? false : disabled;
      menuItems.push(getItem(route.path, route.id, fullPath, null, children, undefined, disabled));
    } else if (children) {
      menuItems = [...menuItems, ...children];
    }
  }

  return menuItems;
}

/**
 * 判断菜单项是否有子菜单
 * @param {MenuItem} menu 菜单项
 * @returns {boolean} 菜单项是否有子菜单
 */
function isMenuWithChildren(
  menu: MenuItem,
): menu is SubMenuType<MenuItemType> | MenuItemGroupType<MenuItemType> {
  return 'children' in menu!;
}

/**
 * 创建菜单映射
 * @param {MenuItem[]} items 菜单项
 * @returns {Map<string, MenuItem>} 菜单映射
 */
function createMenuMap(items: MenuItem[]): Map<string, MenuItem> {
  const map = new Map();
  for (const item of items) {
    map.set(item?.key, item);
    if (isMenuWithChildren(item) && item.children) {
      const childrenMap = createMenuMap(item.children);
      for (const [key, value] of childrenMap) {
        map.set(key, value);
      }
    }
  }
  return map;
}

export { convertRoutesToMenu, createMenuMap, isMenuWithChildren };
