import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from 'antd';

import { useUserStore } from '@/store';
import { CommonPath } from '@/router/Constant';

import { ReactComponent as CILogout } from '@/assets/svg/common-icon/logout.svg';

import { SvgIcon } from '../Icon';

const Logout: FC = () => {
  const navigate = useNavigate();
  const logout = useUserStore.use.logout();

  const handleLogout = async () => {
    await logout();

    navigate(CommonPath.Login);
  };
  return (
    <>
      <Button
        type="text"
        shape="circle"
        ghost
        icon={<SvgIcon element={CILogout} />}
        onClick={handleLogout}
      />
    </>
  );
};

export { Logout };
