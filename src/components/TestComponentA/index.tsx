import { FC, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';

import { useUserStore, UserStore } from '@/store';

const selector = (state: UserStore) => [state.user, state.setUser];

const TestComponentA: FC = () => {
  const [user, setUser] = useUserStore(selector);

  useEffect(() => {
    axios
      .post('/login', {
        // 如果你需要发送一些数据，可以在这里添加
        username: 'test',
        password: 'test',
      })
      .then(() => {
        console.log('登录成功');

        // 登录成功后获取用户信息
        axios
          .get('/user')
          .then((response) => {
            if (response.data.errorMessage) {
              console.log('获取用户信息失败:', response.data.errorMessage);
            } else {
              console.log('获取用户信息成功:', response.data);
            }
          })
          .catch((error) => console.error('发生错误:', error));
      })
      .catch(() => {
        console.log('登录失败');
      });
  });

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
