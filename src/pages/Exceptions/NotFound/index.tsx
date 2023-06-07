import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'antd';

import style from './index.module.scss';

const NotFound: FC = () => {
  const navigate = useNavigate();

  const handleBackPre = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={style['not-found']}>404 Not Found</div>
      <Button onClick={handleBackPre}>返回上一页</Button>
    </>
  );
};

export { NotFound };
