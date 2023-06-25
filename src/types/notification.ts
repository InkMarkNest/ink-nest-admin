export enum NotificationType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
}

/**
 * 通知实体
 */
export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
}

export interface NotificationState {
  /**
   * 当前的通知列表
   */
  notifications: Notification[];
}

export interface NotificationActions {
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
export type NotificationStore = NotificationState & NotificationActions;
