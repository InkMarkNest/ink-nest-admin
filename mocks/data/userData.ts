/**
 * 管理员用户 (有编辑权限)
 */
const mockAdminUser = {
  username: 'admin',
  password: 'Ink123456@',
};

/**
 * 普通用户 (无编辑权限)
 */
const mockUser = {
  username: 'user',
  password: 'Ink123456@',
};

/**
 * 模拟 Token 管理员
 */
const mockTokenAdmin = 'ink-admin-mock-token';

/**
 * 模拟 Token 普通用户
 */
const mockTokenUser = 'ink-user-mock-token';

/**
 * 权限ID列表
 */
export enum PermissionIds {
  DASHBOARD_WORKPLACE = 'dashboard/workplace',
  DASHBOARD_MONITOR = 'dashboard/monitor',
  POSTS_LIST = 'posts/list',
  POSTS_CREATE = 'posts/create',
  POSTS_EDIT = 'posts/edit',
  USERS_LIST = 'users/list',
  USERS_CREATE = 'users/create',
  USERS_EDIT = 'users/edit',
  ROLES_LIST = 'roles/list',
  ROLES_CREATE = 'roles/create',
  ROLES_EDIT = 'roles/edit',
}

/**
 * 操作符
 */
export enum Actions {
  /**
   * 查看
   */
  VIEW = 'view',
  /**
   * 创建
   */
  CREATE = 'create',
  /**
   * 编辑
   */
  EDIT = 'edit',
  /**
   * 删除
   */
  DELETE = 'delete',
  /**
   * 执行
   */
  EXECUTE = 'execute',
}

/**
 * 控制台权限
 */
const dashboard = [
  {
    id: `d1-${PermissionIds.DASHBOARD_WORKPLACE}`,
    resource: PermissionIds.DASHBOARD_WORKPLACE,
    action: Actions.VIEW,
    description: 'View a workplace',
  },
  {
    id: `d1-${PermissionIds.DASHBOARD_MONITOR}`,
    resource: PermissionIds.DASHBOARD_MONITOR,
    action: Actions.VIEW,
    description: 'View a monitor',
  },
];

/**
 * 文章权限
 */
const posts = [
  {
    id: `p1-${PermissionIds.POSTS_LIST}`,
    resource: PermissionIds.POSTS_LIST,
    action: Actions.VIEW,
    description: 'View posts',
  },
  {
    id: `p2-${PermissionIds.POSTS_CREATE}`,
    resource: PermissionIds.POSTS_CREATE,
    action: Actions.CREATE,
    description: 'Create a post',
  },
  {
    id: `p3-${PermissionIds.POSTS_EDIT}`,
    resource: PermissionIds.POSTS_EDIT,
    action: Actions.EDIT,
    description: 'Edit a post',
  },
  {
    id: `p3-${PermissionIds.POSTS_LIST}`,
    resource: PermissionIds.POSTS_LIST,
    action: Actions.DELETE,
    description: 'Delete a post',
  },
];

/**
 * 用户权限
 */
const users = [
  {
    id: `u1-${PermissionIds.USERS_LIST}`,
    resource: PermissionIds.USERS_LIST,
    action: Actions.VIEW,
    description: 'View users',
  },
  {
    id: `u2-${PermissionIds.USERS_CREATE}`,
    resource: PermissionIds.USERS_CREATE,
    action: Actions.CREATE,
    description: 'Create a user',
  },
  {
    id: `u3-${PermissionIds.USERS_EDIT}`,
    resource: PermissionIds.USERS_EDIT,
    action: Actions.EDIT,
    description: 'Edit a user',
  },
  {
    id: `u4-${PermissionIds.USERS_LIST}`,
    resource: PermissionIds.USERS_LIST,
    action: Actions.DELETE,
    description: 'Delete a user',
  },
];

/**
 * 角色权限
 */
const roles = [
  {
    id: `r1-${PermissionIds.ROLES_LIST}`,
    resource: PermissionIds.ROLES_LIST,
    action: Actions.VIEW,
    description: 'View roles',
  },
  {
    id: `r2-${PermissionIds.ROLES_CREATE}`,
    resource: PermissionIds.ROLES_CREATE,
    action: Actions.CREATE,
    description: 'Create a role',
  },
  {
    id: `r3-${PermissionIds.ROLES_EDIT}`,
    resource: PermissionIds.ROLES_EDIT,
    action: Actions.EDIT,
    description: 'Edit a role',
  },
  {
    id: `r3-${PermissionIds.ROLES_LIST}`,
    resource: PermissionIds.ROLES_LIST,
    action: Actions.DELETE,
    description: 'Delete a role',
  },
];

/**
 * 所有权限
 */
const permissions = [...dashboard, ...users, ...posts, ...roles];

// 普通用户可以访问的权限
const viewerPermissions = [
  ...dashboard,
  ...posts.filter(
    (p) => p.action === Actions.VIEW || p.action === Actions.CREATE || p.action === Actions.EDIT,
  ),
];

/**
 * 管理员用户
 */
const adminUserInfoNew = {
  id: '123',
  username: 'alice',
  email: 'alice@example.com',
  roles: [
    {
      id: '1',
      name: 'admin',
      permissions,
    },
  ],
};

/**
 * 普通用户
 */
const viewerUserInfo = {
  id: '456',
  username: 'bob',
  email: 'bob@example.com',
  roles: [
    {
      id: '2',
      name: 'viewer',
      permissions: viewerPermissions,
    },
  ],
};

export { mockAdminUser, mockUser, mockTokenAdmin, mockTokenUser, adminUserInfoNew, viewerUserInfo };
