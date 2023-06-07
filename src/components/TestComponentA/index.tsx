import { FC, useEffect } from 'react';
import { Button } from 'antd';

import { useUserStore } from '@/store';
import { login, getUserInfo } from '@/services';

const TestComponentA: FC = () => {
  const user = useUserStore.use.user();
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
        setUser(userInfoRes.data.userInfo); // 如果获取用户信息成功，就更新用户状态
      }
    } catch (error) {
      console.log('登录失败，错误详情:', error);
    }
  };

  useEffect(() => {
    loginUser();
  }, [setUser]); // setUser变化时重新运行该副作用函数

  const handleChangeUser = () => {
    setUser({ id: Math.random(), name: '用户 1', email: 'yyy@gmail.com', roles: [] });
  };

  return (
    <div>
      测试组件A
      <div>
        {user && (
          <>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </>
        )}
      </div>
      <Button type="primary" onClick={handleChangeUser}>
        更新zustand状态
      </Button>
    </div>
  );
};

export { TestComponentA };
