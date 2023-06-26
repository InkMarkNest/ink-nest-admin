import { FC } from 'react';

import { Outlet } from 'react-router-dom';

const ContentLayout: FC = () => {
  return (
    <>
      <div className="">Content Layout</div>
      <Outlet />
    </>
  );
};

export { ContentLayout };
