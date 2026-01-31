import { Navigate, useLocation } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { ROUTES } from '@/utils/constants';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * Protects routes that require the user to be onboarded (logged in + completed onboarding).
 */
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isOnboarded } = useApp();
  const location = useLocation();

  if (!isOnboarded) {
    return <Navigate to={ROUTES.HOME} state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
