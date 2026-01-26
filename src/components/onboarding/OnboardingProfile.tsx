import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { generateUsername, generateAvatar, avatarStyles } from '@/data/mockData';
import { RefreshCw, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OnboardingProfileProps {
  onComplete: (username: string, avatar: string) => void;
  onBack: () => void;
}

export function OnboardingProfile({ onComplete, onBack }: OnboardingProfileProps) {
  const [username, setUsername] = useState(generateUsername());
  const [avatar, setAvatar] = useState(generateAvatar());
  const [isGenerating, setIsGenerating] = useState(false);

  const regenerateUsername = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setUsername(generateUsername());
      setIsGenerating(false);
    }, 300);
  };

  return (
    <div className="flex flex-col min-h-screen px-6 py-12 animate-slide-up">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-4">🎭</div>
        <h1 className="text-3xl font-bold mb-2">Your anonymous identity</h1>
        <p className="text-muted-foreground">
          Pick an avatar and we'll give you a unique name
        </p>
      </div>

      {/* Avatar Selection */}
      <div className="mb-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-card border-2 border-primary shadow-glow-primary text-5xl animate-pop">
            {avatar}
          </div>
        </div>
        
        <div className="grid grid-cols-5 gap-3">
          {avatarStyles.map((style) => (
            <button
              key={style}
              onClick={() => setAvatar(style)}
              className={cn(
                "flex items-center justify-center w-14 h-14 rounded-2xl text-2xl transition-all duration-200",
                avatar === style
                  ? "bg-primary/20 border-2 border-primary scale-110"
                  : "bg-card border border-border hover:border-primary/50 hover:scale-105"
              )}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      {/* Username */}
      <div className="mb-8 flex-1">
        <label className="text-sm text-muted-foreground mb-2 block text-center">
          Your anonymous name
        </label>
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border">
          <span className={cn(
            "flex-1 text-xl font-semibold text-center gradient-text-primary transition-opacity",
            isGenerating && "opacity-50"
          )}>
            {username}
          </span>
          <Button
            onClick={regenerateUsername}
            variant="ghost"
            size="icon"
            disabled={isGenerating}
            className="shrink-0"
          >
            <RefreshCw className={cn("w-5 h-5", isGenerating && "animate-spin")} />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-2">
          This keeps you completely anonymous
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button onClick={onBack} variant="ghost" size="lg" className="flex-1">
          Back
        </Button>
        <Button 
          onClick={() => onComplete(username, avatar)} 
          variant="glow" 
          size="lg" 
          className="flex-1"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Let's Go!
        </Button>
      </div>
    </div>
  );
}
