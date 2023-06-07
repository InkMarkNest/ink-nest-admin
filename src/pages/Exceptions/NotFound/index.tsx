import { FC } from 'react';

import style from './index.module.scss';

const NotFound: FC = () => {
  return (
    <>
      <div className={style['not-found']}>404 Not Found</div>
    </>
  );
};

export { NotFound };
