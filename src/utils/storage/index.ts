import localforage from 'localforage';

const driverMapping = {
  INDEXEDDB: localforage.INDEXEDDB,
  WEBSQL: localforage.WEBSQL,
  LOCALSTORAGE: localforage.LOCALSTORAGE,
};

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
  driver: driverMapping[import.meta.env.VITE_LOCAL_DRIVER as unknown as keyof typeof driverMapping],
  name: import.meta.env.VITE_LOCAL_NAME,
  version: import.meta.env.VITE_LOCAL_VERSION,
  storeName: import.meta.env.VITE_LOCAL_STORENAME,
  description: import.meta.env.VITE_LOCAL_DESCRIPTION,
};

const storage = localforage.createInstance(localStorageConfig);

const handleError = (error: any, message: string) => {
  console.error(message, error);
  throw error;
};

/**
 * 获取指定键的存储值
 *
 * @returns {Promise<T | null>} - 存储值的 Promise 对象
 */
const getItem = async <T>(key: string): Promise<T | null> => {
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
const setItem = async <T>(key: string, value: T): Promise<void> => {
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
const removeItem = async (key: string): Promise<void> => {
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
const clear = async (): Promise<void> => {
  try {
    await storage.clear();
  } catch (error) {
    handleError(error, `Failed to clear local storage.`);
  }
};

export { setItem, getItem, removeItem, clear };
