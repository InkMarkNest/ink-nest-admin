import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { NotificationState, NotificationStore } from '@/types/notification';

import { createSelectors } from '../createSelectors';

/**
 * 定义初始状态
 */
const initialState: NotificationState = {
  notifications: [],
};

/**
 * 消息状态仓库
 */
const useNotificationStoreBase = create(
  immer<NotificationStore>((set) => ({
    ...initialState,
    addNotification: (notification) =>
      set((state) => {
        state.notifications.push(notification);
      }),
    removeNotification: (id) =>
      set((state) => {
        state.notifications = state.notifications.filter((notification) => notification.id !== id);
      }),
  })),
);

const useNotificationStore = createSelectors(useNotificationStoreBase);

export { useNotificationStore };
