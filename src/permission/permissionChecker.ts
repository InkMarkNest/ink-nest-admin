import { ModulePermission } from '@/types/route';

const hasRoutePermission = (
  moduleId: string,
  routeId: string,
  permissions: ModulePermission[] | undefined,
) => {
  const module = permissions?.find((p) => p.moduleId === moduleId);

  return module?.routes.some((route) => route.id === routeId && route.granted) ?? false;
};

export { hasRoutePermission };
