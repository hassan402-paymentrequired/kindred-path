import { useApp } from '@/contexts/AppContext';
import { AppProvider } from '@/contexts/AppContext';
import { LandingPage } from '@/components/landing/LandingPage';
import { OnboardingFlow } from '@/components/onboarding/OnboardingFlow';
import { MainFeed } from '@/components/feed/MainFeed';

function AppContent() {
  const { isOnboarded, showLanding, setShowLanding } = useApp();

  if (showLanding) {
    return <LandingPage onGetStarted={() => setShowLanding(false)} />;
  }

  if (!isOnboarded) {
    return <OnboardingFlow />;
  }

  return <MainFeed />;
}

const Index = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default Index;
