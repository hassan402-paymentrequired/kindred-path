import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { topics } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface OnboardingTopicsProps {
  onNext: (selectedTopics: string[]) => void;
  onBack: () => void;
}

export function OnboardingTopics({ onNext, onBack }: OnboardingTopicsProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleTopic = (id: string) => {
    setSelected(prev => 
      prev.includes(id) 
        ? prev.filter(t => t !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col min-h-screen px-6 py-12 animate-slide-up">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-4">🎯</div>
        <h1 className="text-3xl font-bold mb-2">What resonates with you?</h1>
        <p className="text-muted-foreground">
          Select the topics you'd like support with
        </p>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-2 gap-3 flex-1 mb-8">
        {topics.map((topic) => {
          const isSelected = selected.includes(topic.id);
          return (
            <button
              key={topic.id}
              onClick={() => toggleTopic(topic.id)}
              className={cn(
                "relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-200",
                isSelected
                  ? "border-primary bg-primary/10 shadow-glow-primary"
                  : "border-border bg-card hover:border-primary/50 hover:bg-card-hover"
              )}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center animate-pop">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
              )}
              <span className="text-3xl mb-2">{topic.icon}</span>
              <span className={cn(
                "text-sm font-medium",
                isSelected ? "text-primary" : "text-foreground"
              )}>
                {topic.name}
              </span>
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
          Continue ({selected.length})
        </Button>
      </div>
    </div>
  );
}
