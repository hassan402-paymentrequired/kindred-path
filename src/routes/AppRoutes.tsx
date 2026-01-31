import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import MainApp from '@/pages/MainApp';
import Feed from '@/pages/Feed';
import Communities from '@/pages/Communities';
import Challenges from '@/pages/Challenges';
import BrowseAllChallenges from '@/pages/BrowseAllChallenges';
import ChallengeDetail from '@/pages/ChallengeDetail';
import Leaderboard from '@/pages/Leaderboard';
import Notifications from '@/pages/Notifications';
import Profile from '@/pages/Profile';
import NotFound from '@/pages/NotFound';
import { OnboardingFlow } from '@/features/onboarding/components/OnboardingFlow';
import { ROUTES } from '@/utils/constants';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Index />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.SIGNUP} element={<Signup />} />
      <Route path={ROUTES.ONBOARDING} element={<OnboardingFlow />} />
      <Route
        path={`${ROUTES.APP}/*`}
        element={
          <ProtectedRoute>
            <MainApp />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to={ROUTES.FEED} replace />} />
        <Route path="feed" element={<Feed />} />
        <Route path="communities" element={<Communities />} />
        <Route path="challenges" element={<Challenges />} />
        <Route path="challenges/browse" element={<BrowseAllChallenges />} />
        <Route path="challenges/:id" element={<ChallengeDetail />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
