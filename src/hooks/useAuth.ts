import { useApp } from '@/contexts/AppContext';

/**
 * Global auth hook - wraps app context for authentication state.
 */
export function useAuth() {
  const { user, isOnboarded } = useApp();
  return {
    user,
    isOnboarded,
    isAuthenticated: !!user,
  };
}
