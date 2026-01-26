import { useApp } from '@/contexts/AppContext';
import { AppProvider } from '@/contexts/AppContext';
import { OnboardingFlow } from '@/components/onboarding/OnboardingFlow';
import { MainFeed } from '@/components/feed/MainFeed';

function AppContent() {
  const { isOnboarded } = useApp();

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
