import { FC } from 'react';
import Icon from '@ant-design/icons';

const SvgIcon: FC<{ element: FC; size?: 'small' | 'middle' | 'large' | 'xl' }> = ({
  element,
  size = 'middle',
}) => {
  const sizeMap = {
    small: '16px',
    middle: '20px',
    large: '24px',
    xl: '28px',
  };

  return <Icon component={element} style={{ fontSize: sizeMap[size] }} />;
};

export { SvgIcon };
