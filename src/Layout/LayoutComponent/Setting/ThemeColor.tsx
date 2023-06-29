import { ColorPicker, Space } from 'antd';
import { Color } from 'antd/es/color-picker';
import { FC } from 'react';

import { cloneDeep } from 'lodash-es';

import { createStyles } from 'antd-style';

import { useSettingsStore } from '@/store';

import { presets } from './presets';

const useStyle = createStyles(({ token, css }) => ({
  themeColor: css`
    color: ${token.colorText};
  `,
}));

const ThemeColor: FC = () => {
  const { styles, cx } = useStyle();

  const themeConfig = useSettingsStore.use.themeConfig();
  const setTheme = useSettingsStore.use.setTheme();

  const setPrimaryColor = (color: Color, hex: string) => {
    const copiedThemeConfig = cloneDeep(themeConfig); // 这是深拷贝
    if (copiedThemeConfig.token) {
      copiedThemeConfig.token.colorPrimary = hex as unknown as string; // 在拷贝的对象上做修改
    }

    setTheme(copiedThemeConfig);
  };

  return (
    <div className={cx('tw-h-20 tw-w-full', styles.themeColor)}>
      <Space>
        <span>主题色设置</span>
        <ColorPicker
          presets={presets}
          value={themeConfig.token?.colorPrimary}
          onChange={setPrimaryColor}
        />
      </Space>
    </div>
  );
};

export { ThemeColor };
