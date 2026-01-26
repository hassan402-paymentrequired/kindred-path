import { useState } from 'react';
import { OnboardingWelcome } from './OnboardingWelcome';
import { OnboardingTopics } from './OnboardingTopics';
import { OnboardingGoals } from './OnboardingGoals';
import { OnboardingProfile } from './OnboardingProfile';
import { useApp } from '@/contexts/AppContext';

export function OnboardingFlow() {
  const [step, setStep] = useState(0);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const { completeOnboarding, setUser } = useApp();

  const handleTopicsNext = (topics: string[]) => {
    setSelectedTopics(topics);
    setStep(2);
  };

  const handleGoalsNext = (goals: string[]) => {
    setSelectedGoals(goals);
    setStep(3);
  };

  const handleComplete = (username: string, avatar: string) => {
    const newUser = {
      id: Date.now(),
      username,
      avatar,
      joinedTopics: selectedTopics,
      currentStreak: 0,
      longestStreak: 0,
      supportGiven: 0,
      joinedDate: new Date().toISOString().split('T')[0],
    };
    setUser(newUser);
    completeOnboarding(selectedTopics, selectedGoals);
  };

  // Progress indicator
  const totalSteps = 4;
  const progressWidth = ((step + 1) / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-background relative">
      {/* Progress Bar */}
      {step > 0 && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-muted">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progressWidth}%` }}
          />
        </div>
      )}

      {/* Steps */}
      {step === 0 && <OnboardingWelcome onNext={() => setStep(1)} />}
      {step === 1 && (
        <OnboardingTopics 
          onNext={handleTopicsNext} 
          onBack={() => setStep(0)} 
        />
      )}
      {step === 2 && (
        <OnboardingGoals 
          onNext={handleGoalsNext} 
          onBack={() => setStep(1)} 
        />
      )}
      {step === 3 && (
        <OnboardingProfile 
          onComplete={handleComplete} 
          onBack={() => setStep(2)} 
        />
      )}
    </div>
  );
}
