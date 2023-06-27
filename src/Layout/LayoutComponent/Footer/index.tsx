import { theme } from 'antd';
import { FC } from 'react';

const { useToken } = theme;

const Footer: FC = () => {
  const { token } = useToken();

  return (
    <footer
      className="tw-flex tw-h-20 tw-w-full tw-items-center tw-justify-center tw-p-8"
      style={{ backgroundColor: token.colorBgLayout }}
    >
      Ink Nest Admin
    </footer>
  );
};

export { Footer };
