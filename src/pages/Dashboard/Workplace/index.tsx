import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from 'antd';

import { useUserStore } from '@/store';

import { CommonPath, DashboardPath, StudyPath } from '@/router/Constant';

const Workplace: FC = () => {
  const navigate = useNavigate();

  const user = useUserStore.use.user();
  const logout = useUserStore.use.logout();

  const handleLogout = async () => {
    await logout();

    navigate(CommonPath.Login);
  };

  const handleGoOtherPage = () => {
    navigate(DashboardPath.Monitor);
  };

  const handleGoTextPage = () => {
    navigate(StudyPath.Game);
  };

  return (
    <>
      <div className="">工作台</div>
      <div>
        {user && (
          <>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </>
        )}
      </div>
      <Button onClick={handleGoOtherPage}>去 Monitor</Button>
      <Button onClick={handleGoTextPage}>去 Text</Button>
      <Button onClick={handleLogout}>退出登录</Button>
    </>
  );
};

export { Workplace };
