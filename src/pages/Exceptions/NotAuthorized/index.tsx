import { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Button } from 'antd';

import { CommonPath } from '@/router/Constant';

const NotAuthorized: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackPre = () => {
    navigate(CommonPath.MainLayout);
  };
  return (
    <>
      <div>{location.state.from.pathname}</div>
      <div className="">403 Not Authorized</div>
      <Button onClick={handleBackPre}>返回上一页</Button>
    </>
  );
};

export { NotAuthorized };
