import { createStyles } from 'antd-style';
import { FC } from 'react';

import { Outlet } from 'react-router-dom';

const useStyle = createStyles(({ token, css }) => ({
  contentLayout: css`
    background: ${token.colorBgContainer};
  `,
}));

const ContentLayout: FC = () => {
  const { styles, cx } = useStyle();

  return (
    <main className={cx('tw-h-full tw-w-full tw-p-8', styles.contentLayout)}>
      <div className="tw-w-ful tw-h-full">
        <Outlet />
      </div>
    </main>
  );
};

export { ContentLayout };
