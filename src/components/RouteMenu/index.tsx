import { FC } from 'react';

import type { MenuProps } from 'antd';
import { Menu } from 'antd';

import { useNavigate } from 'react-router-dom';

import { router } from '@/router';

import { useUserStore } from '@/store';

import { convertRoutesToMenu, findItemByKey } from './convertRoutesToMenu';

const RouteMenu: FC = () => {
  const navigate = useNavigate();
  const user = useUserStore.use.user();

  let items: any;
  if (user) {
    items = convertRoutesToMenu(router.routes, user);
  }
  console.log('items', items);
  const onClick: MenuProps['onClick'] = (e) => {
    const menu = findItemByKey(e.key, items);

    menu && navigate(menu.route);
  };

  return <Menu className="tw-h-full tw-w-full" onClick={onClick} mode="inline" items={items} />;
};

export { RouteMenu };
