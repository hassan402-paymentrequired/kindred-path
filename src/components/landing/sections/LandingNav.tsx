import { Button } from '@/components/ui/button';

interface LandingNavProps {
  onGetStarted: () => void;
}

export function LandingNav({ onGetStarted }: LandingNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-success flex items-center justify-center">
            <span className="text-lg">🌱</span>
          </div>
          <span className="font-bold text-lg text-foreground">Bloom</span>
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</a>
          <a href="#community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Community</a>
          <a href="#download" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Download</a>
        </div>

        {/* CTA */}
        <Button onClick={onGetStarted} variant="glow" size="sm">
          Get Started
        </Button>
      </div>
    </nav>
  );
}
