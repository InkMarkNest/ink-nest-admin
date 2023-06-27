import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from 'antd';

import { useUserStore } from '@/store';
import { CommonPath } from '@/router/Constant';

const Logout: FC = () => {
  const navigate = useNavigate();
  const logout = useUserStore.use.logout();

  const handleLogout = async () => {
    await logout();

    navigate(CommonPath.Login);
  };
  return (
    <>
      <Button type="text" onClick={handleLogout}>
        退出登录
      </Button>
    </>
  );
};

export { Logout };
