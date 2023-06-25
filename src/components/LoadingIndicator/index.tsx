import { Spin } from 'antd';

const LoadingIndicator: React.FC = () => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <Spin size="large" />
    </div>
  );
};

export { LoadingIndicator };
