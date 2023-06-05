import { create } from 'zustand';

import { createSelectors } from '../createSelectors';

enum NotificationType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
}

/**
 * 通知实体
 */
interface Notification {
  id: string;
  type: NotificationType;
  message: string;
}

interface NotificationState {
  /**
   * 当前的通知列表
   */
  notifications: Notification[];
}

interface NotificationActions {
  /**
   * 添加一条通知
   *
   * @param notification - 要添加的通知
   */
  addNotification: (notification: Notification) => void;

  /**
   * 移除指定 id 的通知
   *
   * @param id - 要移除的通知的 id
   */
  removeNotification: (id: string) => void;
}

/**
 * 设置消息状态store，包括状态和操作
 */
type NotificationStore = NotificationState & NotificationActions;

/**
 * 定义初始状态
 */
const initialState: NotificationState = {
  notifications: [],
};

/**
 * 消息状态仓库
 */
const useNotificationStoreBase = create<NotificationStore>((set) => ({
  ...initialState,
  addNotification: (notification) =>
    set((state) => ({
      notifications: [...state.notifications, notification],
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((notification) => notification.id !== id),
    })),
}));

const useNotificationStore = createSelectors(useNotificationStoreBase);

export { useNotificationStore };
