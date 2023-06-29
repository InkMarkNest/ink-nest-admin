import { Breadcrumb } from 'antd';
import { FC } from 'react';

import { Link, Outlet, useLocation } from 'react-router-dom';

import { createStyles } from 'antd-style';

import { ReactComponent as PIHome } from '@/assets/svg/pixel-icon/-home.svg';
import { SvgIcon } from '@/components';

const useStyle = createStyles(({ token, css }) => ({
  main: css`
    background: ${token.colorPrimaryBgHover};
  `,
  content: css`
    background: ${token.colorBgContainer};
  `,
}));

const Content: FC = () => {
  const { styles, cx } = useStyle();

  const location = useLocation();

  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;

    return {
      key: url,
      title: <Link to={url}>{pathSnippets[index]}</Link>,
    };
  });

  breadcrumbItems.unshift({ key: '', title: <SvgIcon element={PIHome} size="small" /> });

  return (
    <main className={cx('tw-relative tw-h-full tw-w-full tw-p-8 tw-pt-12', styles.main)}>
      <div className={cx('tw-h-full tw-w-full', styles.content)}>
        <Breadcrumb
          className="tw-absolute tw-left-8 tw-top-4 tw-border-b-2"
          items={breadcrumbItems}
        />
        <Outlet />
      </div>
    </main>
  );
};

export { Content };
