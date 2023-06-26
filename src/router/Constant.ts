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

enum StudyPath {
  Game = '/study/game',
}

export { CommonPath, DashboardPath, UserPath, ArticlePath, StudyPath };
