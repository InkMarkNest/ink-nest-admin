# 组件开发基本开发流程

1. **创建组件目录和文件**：

在`src/components`目录下创建一个新的目录`Button`。在`Button`目录中创建以下文件：

- `index.tsx`：组件的主体文件
- `styles.ts`或`styles.module.css`：组件的样式文件
- `types.ts`：组件的TypeScript类型定义文件

你的目录结构应该像这样：

``` bash
src/
└── components/
    └── Button/
        ├── index.tsx
        ├── styles.ts
        └── types.ts
```

**2. 编写TypeScript类型定义**：

在`types.ts`文件中定义`ButtonProps`类型。这个类型应该包含所有的props，例如：

```ts
// types.ts
export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}
```

**3. 编写组件代码**：

在`index.tsx`文件中编写`Button`组件的代码，例如：

```tsx
// index.tsx
import React from 'react';
import { ButtonProps } from './types';
import style from './index.module.scss';

/**
 * 按钮组件 示例
 *
 * @param {ButtonProps} props - 组件 Props
 */
export const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <button className={style.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

```

使用了JSDoc来对组件进行注释。帮助其他开发者理解组件的用途和props。

**4. 编写样式文件**：

在`styles.ts`或`styles.module.css`文件中编写`Button`组件的样式，例如：

```css
/* styles.module.css */
.button {
  /* ... */
}
```
