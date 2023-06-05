import localforage from 'localforage';

/**
 * 创建本地存储实例
 * @param {Object} options - 配置选项
 * @param {string} options.driver - 存储驱动，默认为 localforage.INDEXEDDB
 * @param {string} options.name - 存储名称
 * @param {number} options.version - 存储版本号
 * @param {string} options.storeName - 存储的键值对集合名称
 * @param {string} options.description - 存储描述信息
 * @returns {Object} - 本地存储实例
 */
const storage = localforage.createInstance({
  driver: localforage.INDEXEDDB,
  name: 'ink-admin',
  version: 1.0,
  storeName: 'keyvaluepairs',
  description: 'ink admin local state',
});

/**
 * 获取指定键的存储值
 *
 * @returns {Promise<T | null>} - 存储值的 Promise 对象
 */
export const getItem = async <T>(key) => {
  const value = await storage.getItem<T>(key);
  return value || null;
};

/**
 * 设置指定键的存储值
 *
 * @returns {Promise<void>} - Promise 对象
 */
export const setItem = async <T>(key, value) => {
  await storage.setItem<T>(key, value);
};

/**
 * 移除指定键的存储值
 *
 * @returns {Promise<void>} - Promise 对象
 */
export const removeItem = async (key) => {
  await storage.removeItem(key);
};

/**
 * 清空存储
 *
 * @returns {Promise<void>} - Promise 对象
 */
export const clear = async () => {
  await storage.clear();
};
