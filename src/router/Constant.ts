enum CommonPath {
  MainLayout = '/',
  Login = '/login',
  NotAuthorized = '/not-authorized',
}

enum DashboardPath {
  Workplace = '/dashboard/workplace',
  Monitor = '/dashboard/monitor',
}

enum UserPath {
  Manager = '/user/manager',
  Setting = '/user/setting',
  Auth = '/user/auth',
}

enum ArticlePath {
  Manager = '/article/manager',
}

export { CommonPath, DashboardPath, UserPath, ArticlePath };
