import { FC } from 'react';

import { useUserStore } from '@/store';

const Workplace: FC = () => {
  const user = useUserStore.use.user();

  return (
    <>
      <div className="">工作台</div>
      <div>
        {user && (
          <>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </>
        )}
      </div>
    </>
  );
};

export { Workplace };
