import { FC } from 'react';

import { useUserStore } from '@/store';

const TestComponentA: FC = () => {
  const [user] = useUserStore((state) => [state.user, state.setUser]);

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
