import create from 'zustand';

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

type NotificationStore = NotificationState & NotificationActions;

/**
 * 消息状态仓库
 */
const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [...state.notifications, notification],
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((notification) => notification.id !== id),
    })),
}));

export default useNotificationStore;
