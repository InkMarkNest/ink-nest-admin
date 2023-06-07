import { FC } from 'react';

import { Outlet } from 'react-router-dom';

import style from './index.module.scss';

const MainLayout: FC = () => {
  return (
    <>
      <div className={style['main-layout']}>MainLayout</div>
      <Outlet />
    </>
  );
};

export { MainLayout };
