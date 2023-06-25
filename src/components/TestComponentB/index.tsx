import { FC, useCallback } from 'react';
import { produce } from 'immer';

import { Button } from 'antd';

import { cloneDeep } from 'lodash-es';

import { useUserStore } from '@/store';

import { ButtonExample } from '../ComponentExample/Button';

const person = {
  id: 2,
  name: 'John',
  email: 'john@example.com',
  address: {
    url: 'xxx',
  },
};

const TestComponentB: FC = () => {
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser]);

  // 测试 immer
  const updateUser = useCallback(() => {
    if (!user) return;
    // 使用immer函数创建新的用户状态
    const newUser = produce(user, (draft) => {
      // 在这里可以直接修改draft的属性
      draft.name = 'New Name';
      draft.email = 'newemail@example.com';
    });
    setUser(newUser); // 更新状态
  }, [user, setUser]);

  // 测试 lodash-es
  const clonedPerson = cloneDeep(person);
  console.log('深拷贝 1 ->', clonedPerson === person);
  console.log('深拷贝 2 ->', clonedPerson.address === person.address);

  return (
    <div>
      测试组件 B
      <div>
        {user && (
          <div>
            <div>ID: {user.id}</div>
            <div>姓名: {user.name}</div>
            <div>邮箱: {user.email}</div>
          </div>
        )}
      </div>
      {/* 添加一个按钮来触发用户状态的更新 */}
      <Button onClick={updateUser}>更新用户状态</Button>
      <ButtonExample
        onClick={() => {
          console.log('哈喽');
        }}
        disabled={false}
      >
        测试
      </ButtonExample>
    </div>
  );
};

export { TestComponentB };
