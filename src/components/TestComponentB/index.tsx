import { FC, useCallback } from 'react';
import { produce } from 'immer';

import { Button } from 'antd';

import { cloneDeep } from 'lodash-es';

import { useUserStore } from '@/store';

const person = {
  id: 2,
  name: 'John',
  email: 'john@example.com',
  address: {
    url: 'xxx',
  },
};

const TestComponentA: FC = () => {
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser]);

  // 测试 immer
  const updateUser = useCallback(() => {
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
        {user &&
          Object.entries(user).map((info) => (
            <div key={info[1]}>
              {info[0]}: {info[1]}
            </div>
          ))}
      </div>
      {/* 添加一个按钮来触发用户状态的更新 */}
      <Button onClick={updateUser}>更新用户状态</Button>
    </div>
  );
};

export default TestComponentA;
