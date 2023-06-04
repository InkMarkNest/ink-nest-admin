import { FC, useEffect } from 'react';
import axios from 'axios';

const TestComponent: FC = () => {
  useEffect(() => {
    axios
      .post('/login', {
        // 如果你需要发送一些数据，可以在这里添加
        username: 'test',
        password: 'test',
      })
      .then(() => {
        console.log('登录成功');
      })
      .catch(() => {
        console.log('登录失败');
      });

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
  });

  return <>测试模块</>;
};

export default TestComponent;
