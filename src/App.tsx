import { Button } from 'antd';

import { TestComponent } from '@/components';

const App = () => {
  console.log(import.meta.env);

  return (
    <>
      <h1 className="tw-text-emerald-400">Vite + React</h1>
      <Button type="primary">Button</Button>
      <TestComponent />
    </>
  );
};

export default App;
