import { useNavigate } from 'react-router-dom';

import { FC, ReactNode, useEffect } from 'react';

import { useUserStore } from '@/store';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole: string;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const hasRole = useUserStore.use.hasRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasRole(requiredRole)) {
      navigate('/login');
    }
  }, []);

  return children;
};

export { ProtectedRoute };
