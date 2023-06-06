import { FC } from 'react';

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
  const [user] = useUserStore((state) => [state.user, state.setUser]);

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
    </div>
  );
};

export default TestComponentA;
