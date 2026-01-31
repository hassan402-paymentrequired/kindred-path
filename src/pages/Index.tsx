import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { LandingPage } from '@/features/landing/components';

const Index = () => {
  const { isOnboarded } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOnboarded) {
      navigate('/app/feed');
    }
  }, [isOnboarded, navigate]);

  return <LandingPage onGetStarted={() => navigate('/signup')} />;
};

export default Index;
