import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'antd';

import { useUserStore } from '@/store';
import { login, getUserInfo } from '@/services';

import { CommonPath } from '@/router/Constant';

import style from './index.module.scss';

const Login: FC = () => {
  const navigate = useNavigate();

  const setUser = useUserStore.use.setUser();
  const setToken = useUserStore.use.setToken();

  const loginUser = async () => {
    try {
      const loginRes = await login({
        username: 'admin',
        password: '123456',
      });
      console.log('loginRes', loginRes);

      setToken(loginRes.data.token);

      // 登录成功后获取用户信息
      const userInfoRes = await getUserInfo();
      console.log('userInfoRes', userInfoRes);

      if (userInfoRes.code !== 200) {
        console.log('获取用户信息失败:', userInfoRes);
      } else {
        console.log('获取用户信息成功:', userInfoRes);
        await setUser(userInfoRes.data.userInfo); // 如果获取用户信息成功，就更新用户状态

        navigate(CommonPath.MainLayout);
      }
    } catch (error) {
      console.log('登录失败，错误详情:', error);
    }
  };

  // useEffect(() => {
  //   loginUser();
  // }, [setUser]); // setUser变化时重新运行该副作用函数

  return (
    <>
      <div className={style.login}>Login</div>
      <Button onClick={loginUser}>登录</Button>
    </>
  );
};

export { Login };
