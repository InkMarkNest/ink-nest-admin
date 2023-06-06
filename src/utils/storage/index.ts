import localforage from 'localforage';

/**
 * 本地存储实例配置
 * @param {Object} options - 配置选项
 * @param {string} options.driver - 存储驱动，默认为 localforage.INDEXEDDB
 * @param {string} options.name - 存储名称
 * @param {number} options.version - 存储版本号
 * @param {string} options.storeName - 存储的键值对集合名称
 * @param {string} options.description - 存储描述信息
 */
const localStorageConfig = {
  driver: localforage[import.meta.env.VITE_LOCAL_DRIVER],
  name: import.meta.env.VITE_LOCAL_NAME,
  version: import.meta.env.VITE_LOCAL_VERSION,
  storeName: import.meta.env.VITE_LOCAL_STORENAME,
  description: import.meta.env.VITE_LOCAL_DESCRIPTION,
};

const storage = localforage.createInstance(localStorageConfig);

const handleError = (error, message) => {
  console.error(message, error);
  throw error;
};

/**
 * 获取指定键的存储值
 *
 * @returns {Promise<T | null>} - 存储值的 Promise 对象
 */
export const getItem = async <T>(key) => {
  try {
    const value = await storage.getItem<T>(key);
    return value || null;
  } catch (error) {
    handleError(error, `Failed to get item with key "${key}".`);
    return null;
  }
};

/**
 * 设置指定键的存储值
 *
 * @returns {Promise<void>} - Promise 对象
 */
export const setItem = async <T>(key, value) => {
  try {
    await storage.setItem<T>(key, value);
  } catch (error) {
    handleError(error, `Failed to set item with key "${key}".`);
  }
};

/**
 * 移除指定键的存储值
 *
 * @returns {Promise<void>} - Promise 对象
 */
export const removeItem = async (key) => {
  try {
    await storage.removeItem(key);
  } catch (error) {
    handleError(error, `Failed to remove item with key "${key}".`);
  }
};

/**
 * 清空存储
 *
 * @returns {Promise<void>} - Promise 对象
 */
export const clear = async () => {
  try {
    await storage.clear();
  } catch (error) {
    handleError(error, `Failed to clear local storage.`);
  }
};
