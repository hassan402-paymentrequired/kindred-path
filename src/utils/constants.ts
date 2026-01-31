/**
 * Application-wide constants
 */

export const APP_NAME = 'Bloom';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  ONBOARDING: '/onboarding',
  APP: '/app',
  FEED: '/app/feed',
  COMMUNITIES: '/app/communities',
  CHALLENGES: '/app/challenges',
  BROWSE_CHALLENGES: '/app/challenges/browse',
  CHALLENGE_DETAIL: '/app/challenges/:id',
  LEADERBOARD: '/app/leaderboard',
  NOTIFICATIONS: '/app/notifications',
  PROFILE: '/app/profile',
} as const;
