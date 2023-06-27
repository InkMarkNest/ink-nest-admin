import { ThemeConfig, theme } from 'antd';

const baseThemeConfig: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#739e82',
    colorSuccess: '#31d843',
    colorWarning: '#fabc2a',
    colorError: '#f05365',
    colorInfo: '#739e82',
    fontSize: 14,
    sizeStep: 4,
    sizeUnit: 4,
    borderRadius: 7,
    wireframe: false,
  },
};

export { baseThemeConfig };
