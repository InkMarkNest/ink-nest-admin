// index.tsx
import React from 'react';

import { ButtonProps } from './types';
import style from './index.module.scss';

/**
 * 按钮组件 示例
 *
 * @param {ButtonProps} props - 组件 Props
 */
const ButtonExample: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <button className={style.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export { ButtonExample };
