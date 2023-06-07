import { FC } from 'react';

import style from './index.module.scss';

const NotAuthorized: FC = () => {
  return (
    <>
      <div className={style['not-authorized']}>403 Not Authorized</div>
    </>
  );
};

export { NotAuthorized };
