import { FC, useState } from 'react';

import { Button } from 'antd';

import { createStyles } from 'antd-style';

import { ReactComponent as NoticeSvg } from '@/assets/svg/common-icon/notice.svg';

import { SvgIcon } from '../../Icon';

const useStyles = createStyles(({ token, css }) => ({
  panel: css`
    background: ${token.colorPrimaryBg};
    border: 1px solid ${token.colorPrimaryBorder};
    color: ${token.colorPrimaryText};
  `,
  bottomLine: css`
    border-bottom: 1px solid ${token.colorPrimaryBorder};
  `,
  title: css`
    &:hover {
      background: ${token.colorBgTextHover};
      color: ${token.colorPrimaryTextHover};
    }
    &:focus {
      background: ${token.colorBgTextActive};
      color: ${token.colorPrimaryTextActive};
    }
  `,
}));

const ContentPanel: FC = () => {
  const contentList = {
    Msg: [],
    Notice: [],
    Todo: [],
  };
  const typeList = Object.keys(contentList);
  const { styles, cx } = useStyles();
  return (
    <div className="tw-flex tw-flex-col">
      <div className={cx('tw-flex tw-gap-4 tw-p-2', styles.bottomLine)}>
        {typeList.map((key: string, index: number) => {
          return (
            <div
              className={cx(
                'tw-cursor-pointer tw-px-4 tw-py-2 tw-font-standard  hover:tw-rounded-3xl  focus:tw-rounded-3xl  ',
                styles.title,
              )}
              tabIndex={index}
              key={key}
            >
              {key}
            </div>
          );
        })}
      </div>
      <div className={cx('tw-p-2', styles.bottomLine)}>todo:消息列表</div>
      <div className={cx('tw-p-2')}>todo:底部按钮</div>
    </div>
  );
};
const Notice: FC = () => {
  const [isShowList, setShoState] = useState(false);
  const { styles, cx } = useStyles();
  return (
    <div className="tw-relative">
      <Button
        type="text"
        shape="circle"
        onClick={() => {
          setShoState(!isShowList);
        }}
        icon={<SvgIcon element={NoticeSvg} size="large" />}
      />
      {isShowList && (
        <div
          className={cx('tw-absolute tw-right-0 tw-z-10  tw-rounded-lg tw-shadow-lg', styles.panel)}
        >
          <ContentPanel />
        </div>
      )}
    </div>
  );
};

export { Notice };
