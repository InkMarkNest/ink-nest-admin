import { FC, useEffect } from 'react';
import { Button } from 'antd';

import { useUserStore } from '@/store';
import { login, getUserInfo } from '@/services';

const TestComponentA: FC = () => {
  const user = useUserStore.use.user();
  const setUser = useUserStore.use.setUser();

  const loginUser = async () => {
    try {
      await login({
        username: 'test',
        password: 'test',
      });
      console.log('登录成功');

      // 登录成功后获取用户信息
      const response = await getUserInfo();

      if (response.code !== 200) {
        console.log('获取用户信息失败:', response);
      } else {
        console.log('获取用户信息成功:', response);
        setUser(response.data.userInfo); // 如果获取用户信息成功，就更新用户状态
      }
    } catch (error) {
      console.log('登录失败，错误详情:', error);
    }
  };

  useEffect(() => {
    loginUser();
  }, [setUser]); // setUser变化时重新运行该副作用函数

  const handleChangeUser = () => {
    setUser({ id: Math.random(), name: '用户 1', email: 'yyy@gmail.com' });
  };

  return (
    <div>
      测试组件A
      <div>
        {user &&
          Object.entries(user).map((info) => (
            <div key={info[1]}>
              {info[0]}: {info[1]}
            </div>
          ))}
      </div>
      <Button type="primary" onClick={handleChangeUser}>
        更新zustand状态
      </Button>
    </div>
  );
};

export default TestComponentA;
