import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from 'antd';

import { useUserStore } from '@/store';

import { CommonPath } from '@/router/Constant';

import { MainLayout } from '@/Layout';

const MainPage: FC = () => {
  const navigate = useNavigate();

  const user = useUserStore.use.user();
  const logout = useUserStore.use.logout();

  const handleLogout = async () => {
    await logout();

    navigate(CommonPath.Login);
  };

  const handleGoOtherPage = () => {
    navigate('/xx');
  };

  return (
    <>
      <div className="">MainPage</div>
      <div>
        {user && (
          <>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </>
        )}
      </div>
      <Button onClick={handleGoOtherPage}>随便去一个不存在的页面</Button>
      <Button onClick={handleLogout}>退出登录</Button>
      <MainLayout />
    </>
  );
};

export { MainPage };
