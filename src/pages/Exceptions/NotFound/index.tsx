import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'antd';

const NotFound: FC = () => {
  const navigate = useNavigate();

  const handleBackPre = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="">404 Not Found</div>
      <Button onClick={handleBackPre}>返回上一页</Button>
    </>
  );
};

export { NotFound };
