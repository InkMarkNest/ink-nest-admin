import { FC } from 'react';

import { Outlet } from 'react-router-dom';

import style from './index.module.scss';

const ContentLayout: FC = () => {
  return (
    <>
      <div className={style['content-layout']}>Content Layout</div>
      <Outlet />
    </>
  );
};

export { ContentLayout };
