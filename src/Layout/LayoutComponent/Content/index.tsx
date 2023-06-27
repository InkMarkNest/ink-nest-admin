import { Breadcrumb, theme } from 'antd';
import { FC } from 'react';

import { Link, Outlet, useLocation } from 'react-router-dom';

import { ReactComponent as PIHome } from '@/assets/svg/pixel-icon/-home.svg';
import { SvgIcon } from '@/components';

const { useToken } = theme;

const Content: FC = () => {
  const { token } = useToken();

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
    <main
      className="tw-relative tw-h-full tw-w-full tw-p-8"
      style={{
        backgroundColor: token.colorPrimaryBgHover,
      }}
    >
      <div
        className="tw-h-full tw-w-full"
        style={{
          backgroundColor: token.colorBgContainer,
        }}
      >
        <Breadcrumb
          className="tw-absolute tw-left-8 tw-top-1 tw-border-b-2"
          items={breadcrumbItems}
        />
        <Outlet />
      </div>
    </main>
  );
};

export { Content };
