import { theme, Button } from 'antd';
import { FC } from 'react';

const { useToken } = theme;

const Footer: FC = () => {
  const { token } = useToken();

  return (
    <footer
      className="tw-flex tw-h-14 tw-w-full tw-items-center tw-justify-center tw-p-8"
      style={{ backgroundColor: token.colorPrimaryBgHover }}
    >
      <p>&copy; 2023 Ink Nest Admin. All Rights Reserved. </p>
      <p>
        <Button type="link" href="https://github.com/InkMarkNest/ink-nest-admin">
          Github
        </Button>
      </p>
    </footer>
  );
};

export { Footer };
