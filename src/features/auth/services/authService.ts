/**
 * Auth service - mock implementation for prototype.
 * Replace with real API calls when backend is available.
 */

import type { User } from '../types';

export async function login(_email: string, _password: string): Promise<{ user: User }> {
  // Mock - would call API
  return new Promise((resolve) => {
    setTimeout(() => resolve({ user: {} as User }), 500);
  });
}

export async function signup(_email: string, _password: string): Promise<{ user: User }> {
  // Mock - would call API
  return new Promise((resolve) => {
    setTimeout(() => resolve({ user: {} as User }), 500);
  });
}

export function logout(): void {
  // Mock - would clear tokens/session
}
