import { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Button } from 'antd';

import { CommonPath } from '@/router/Constant';

import style from './index.module.scss';

const NotAuthorized: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log('location', location.state.from);

  const handleBackPre = () => {
    navigate(CommonPath.MainLayout);
  };
  return (
    <>
      <div>{location.state.from.pathname}</div>
      <div className={style['not-authorized']}>403 Not Authorized</div>
      <Button onClick={handleBackPre}>返回上一页</Button>
    </>
  );
};

export { NotAuthorized };
