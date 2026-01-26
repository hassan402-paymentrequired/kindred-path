import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Shield } from 'lucide-react';

interface OnboardingWelcomeProps {
  onNext: () => void;
}

export function OnboardingWelcome({ onNext }: OnboardingWelcomeProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 animate-slide-up">
      {/* Illustration */}
      <div className="relative mb-8">
        <div className="text-8xl animate-float">🌱</div>
        <div className="absolute -top-2 -right-2 text-3xl animate-pulse-soft">✨</div>
        <div className="absolute -bottom-1 -left-3 text-2xl animate-bounce-soft delay-100">💫</div>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        <span className="gradient-text-primary">You're not alone</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-muted-foreground text-center max-w-md mb-12">
        A safe, anonymous space where real people support each other through life's toughest struggles.
      </p>

      {/* Features */}
      <div className="grid gap-4 w-full max-w-sm mb-12">
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 border border-border/50">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">100% Anonymous</h3>
            <p className="text-sm text-muted-foreground">No real names, no judgment</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 border border-border/50">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-love/20 text-love">
            <Heart className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Real Support</h3>
            <p className="text-sm text-muted-foreground">From people who truly understand</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 border border-border/50">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 text-accent">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Daily Progress</h3>
            <p className="text-sm text-muted-foreground">Track streaks & celebrate wins</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <Button onClick={onNext} size="xl" variant="glow" className="w-full max-w-sm">
        Begin Your Journey
      </Button>

      <p className="mt-4 text-sm text-muted-foreground">
        Takes less than 1 minute to set up
      </p>
    </div>
  );
}
