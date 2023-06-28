import { FC, useState } from 'react';

import { Button } from 'antd';

import { ReactComponent as NoticeSvg } from '@/assets/svg/common-icon/notice.svg';

import { SvgIcon } from '../../Icon';

const ContentPanel: FC = () => {
  const contentList = {
    Msg: [],
    Notice: [],
    Todo: [],
  };
  const typeList = Object.keys(contentList);
  return (
    <div className="tw-flex tw-flex-col">
      <div className="tw-flex tw-gap-4">
        {typeList.map((key: string, index: number) => {
          return (
            <div
              className="tw-cursor-pointer tw-px-4 tw-py-2 tw-font-standard  hover:tw-rounded-3xl hover:tw-bg-[#eee] focus:tw-rounded-3xl focus:tw-bg-[#eee] focus:tw-text-blue-600"
              tabIndex={index}
              key={key}
            >
              {key}
            </div>
            // <Button type="primary" ghost>
            //   {key}
            // </Button>
          );
        })}
      </div>
    </div>
  );
};
const Notice: FC = () => {
  const [isShowList, setShoState] = useState(false);
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
        <div className="tw-absolute tw-right-0 tw-z-10  tw-rounded-lg tw-bg-white tw-p-4 tw-shadow-lg">
          <ContentPanel />
        </div>
      )}
    </div>
  );
};

export { Notice };
