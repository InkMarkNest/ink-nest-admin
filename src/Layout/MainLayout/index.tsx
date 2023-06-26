import { FC } from 'react';

import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
  return (
    <>
      <div className="">MainLayout</div>
      <Outlet />
    </>
  );
};

export { MainLayout };
