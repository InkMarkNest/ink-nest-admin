import { FC, useMemo } from 'react';

import type { MenuProps } from 'antd';
import { Menu, theme } from 'antd';

import { useNavigate } from 'react-router-dom';

import { router } from '@/router';

import { useUserStore } from '@/store';

import { convertRoutesToMenu, createMenuMap, isMenuWithChildren } from './convertRoutesToMenu';

const { useToken } = theme;

// 路由菜单组件
const RouteMenu: FC = () => {
  const { token } = useToken();
  const navigate = useNavigate();
  const user = useUserStore.use.user();

  // 使用 useMemo 创建一个菜单映射以优化性能，并获取默认打开的 key 和默认选中的 key
  const menuData = useMemo(() => {
    let map = new Map();
    let defaultOpenKey = '';
    let defaultSelectedKey = '';
    if (user) {
      const items = convertRoutesToMenu(router.routes, user);
      map = createMenuMap(items);
      // 遍历菜单项，找到第一个有子菜单的菜单项，并将其 key 和其第一个子菜单的 key 分别作为默认打开的 key 和默认选中的 key
      for (const item of items) {
        if (isMenuWithChildren(item) && item.children && item.children.length > 0) {
          defaultOpenKey = item.key as string;
          defaultSelectedKey = item.children[0]?.key as string;
          break;
        }
      }
    }
    return { map, defaultOpenKey, defaultSelectedKey };
  }, [user]);

  // 菜单项点击事件处理函数，用于导航到点击的菜单项的路由
  const onClick: MenuProps['onClick'] = (e) => {
    const menu = menuData.map.get(e.key);
    menu && navigate(menu.route);
  };

  // 使用 useMemo 计算菜单项以优化性能
  const items = useMemo(() => {
    if (user) {
      return convertRoutesToMenu(router.routes, user);
    }
    return [];
  }, [user]);

  return (
    <Menu
      className="tw-h-full tw-w-full"
      onClick={onClick}
      mode="inline"
      items={items}
      defaultOpenKeys={[menuData.defaultOpenKey]}
      defaultSelectedKeys={[menuData.defaultSelectedKey]}
      style={{ backgroundColor: token.colorBgLayout }}
    />
  );
};

export { RouteMenu };
