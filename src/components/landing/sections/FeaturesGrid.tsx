import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users } from 'lucide-react';

interface FeaturesGridProps {
  onGetStarted: () => void;
}

export function FeaturesGrid({ onGetStarted }: FeaturesGridProps) {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large Card - Become Self-aware */}
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary/30 via-card to-primary/20 border border-border p-6 group hover:border-primary/50 transition-all">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            
            <div className="relative z-10 h-full flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Our Product</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Become<br />
                <span className="gradient-text-primary">Self-aware</span>
              </h3>
              
              {/* Illustration Placeholder */}
              <div className="flex-1 flex items-center justify-center my-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-5xl float-element">
                    🧠
                  </div>
                  <div className="absolute -top-2 -right-4 px-3 py-1 bg-success rounded-full text-xs font-medium text-success-foreground">
                    MOOD TRACKER
                  </div>
                  <div className="absolute -bottom-2 -left-4 px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground">
                    SELF-DEVELOPMENT
                  </div>
                </div>
              </div>
              
              <Button variant="glow" className="w-full group" onClick={onGetStarted}>
                How it works
                <Play className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Features Card */}
          <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-6 group hover:border-success/50 transition-all">
            <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Adaptability</span>
            <h3 className="text-2xl font-bold mb-4">Features</h3>
            
            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {['📊', '🎯', '📈', '🧘', '💪', '🌙'].map((emoji, i) => (
                <div key={i} className="aspect-square bg-muted rounded-xl flex items-center justify-center text-2xl hover:bg-success/20 transition-colors cursor-pointer">
                  {emoji}
                </div>
              ))}
            </div>
            
            <Button variant="outline" size="sm" className="w-full">
              Explore App
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* SaaS Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-card border border-border p-6 group hover:border-primary/50 transition-all">
            <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Our Product</span>
            <h3 className="text-4xl font-bold gradient-text-primary mb-4">SaaS</h3>
            
            {/* Abstract Shape */}
            <div className="flex justify-center">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl" />
                <div className="relative w-full h-full bg-gradient-to-br from-primary to-secondary rounded-[2rem] rotate-12 flex items-center justify-center text-4xl">
                  ☁️
                </div>
              </div>
            </div>
          </div>

          {/* Join Us Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-success/30 to-card border border-border p-6 group hover:border-success/50 transition-all">
            <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Community & Support</span>
            <h3 className="text-3xl font-bold mb-4">
              Join <span className="text-success">us</span>
            </h3>
            
            {/* User Avatars */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex -space-x-2">
                {['🦊', '🐼', '🦁', '🐯', '🐸'].map((emoji, i) => (
                  <div key={i} className="w-10 h-10 bg-muted rounded-full border-2 border-card flex items-center justify-center text-lg">
                    {emoji}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">+50K members</span>
            </div>
            
            <Button variant="success" size="sm" className="w-full" onClick={onGetStarted}>
              <Users className="w-4 h-4 mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
