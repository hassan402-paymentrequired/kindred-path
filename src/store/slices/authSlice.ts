/**
 * Auth state slice.
 * App currently uses AppContext for auth; this slice can be used when migrating to Redux or for reference.
 */

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
};

export function authReducer(state = initialState): AuthState {
  return state;
}
