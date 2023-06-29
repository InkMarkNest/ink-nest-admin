import { Button } from 'antd';
import { FC } from 'react';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ token, css }) => ({
  footer: css`
    background: ${token.colorPrimaryBgHover};
  `,
}));

const Footer: FC = () => {
  const { styles, cx } = useStyle();

  return (
    <footer
      className={cx(
        'tw-flex tw-h-14 tw-w-full tw-items-center tw-justify-center tw-p-8',
        styles.footer,
      )}
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
