import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { goals } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface OnboardingGoalsProps {
  onNext: (selectedGoals: string[]) => void;
  onBack: () => void;
}

export function OnboardingGoals({ onNext, onBack }: OnboardingGoalsProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleGoal = (id: string) => {
    setSelected(prev => 
      prev.includes(id) 
        ? prev.filter(g => g !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col min-h-screen px-6 py-12 animate-slide-up">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-4">💫</div>
        <h1 className="text-3xl font-bold mb-2">What brings you here?</h1>
        <p className="text-muted-foreground">
          Help us personalize your experience
        </p>
      </div>

      {/* Goals List */}
      <div className="flex flex-col gap-3 flex-1 mb-8">
        {goals.map((goal) => {
          const isSelected = selected.includes(goal.id);
          return (
            <button
              key={goal.id}
              onClick={() => toggleGoal(goal.id)}
              className={cn(
                "relative flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-200 text-left",
                isSelected
                  ? "border-primary bg-primary/10 shadow-glow-primary"
                  : "border-border bg-card hover:border-primary/50 hover:bg-card-hover"
              )}
            >
              <span className="text-3xl">{goal.icon}</span>
              <span className={cn(
                "font-medium flex-1",
                isSelected ? "text-primary" : "text-foreground"
              )}>
                {goal.name}
              </span>
              {isSelected && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center animate-pop">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button onClick={onBack} variant="ghost" size="lg" className="flex-1">
          Back
        </Button>
        <Button 
          onClick={() => onNext(selected)} 
          variant="glow" 
          size="lg" 
          className="flex-1"
          disabled={selected.length === 0}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
