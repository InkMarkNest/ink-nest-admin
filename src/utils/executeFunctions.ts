type VoidFunction = () => void;

/**
 * 执行多个函数。
 * 如果有函数出现错误，则打印当前报错函数的索引和错误。
 * @param {VoidFunction[]} functions - 需要执行的函数数组
 */
function executeFunctions(functions: VoidFunction[]): void {
  for (let i = 0; i < functions.length; i++) {
    try {
      if (typeof functions[i] === 'function') {
        functions[i]();
      }
    } catch (error) {
      console.error(`Error executing function at index ${i}: `, error);
    }
  }
}

export default executeFunctions;
