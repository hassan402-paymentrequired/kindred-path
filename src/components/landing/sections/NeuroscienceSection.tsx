import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';

interface NeuroscienceSectionProps {
  onGetStarted: () => void;
}

export function NeuroscienceSection({ onGetStarted }: NeuroscienceSectionProps) {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Video/Image Placeholder */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl aspect-video flex items-center justify-center overflow-hidden border border-border">
              {/* Play Button Overlay */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-20 h-20 bg-foreground/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-elevated">
                  <Play className="w-8 h-8 text-background ml-1" />
                </div>
              </button>
              
              {/* Placeholder Content */}
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🎬</div>
                <div className="text-muted-foreground">Video placeholder</div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-20 h-20 bg-success/30 rounded-full blur-xl" />
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-love/30 rounded-full blur-xl" />
            </div>

            {/* Floating Stat */}
            <div className="float-element absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 border border-border shadow-elevated">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center text-2xl">
                  🎯
                </div>
                <div>
                  <div className="text-2xl font-bold text-success">10K+</div>
                  <div className="text-xs text-muted-foreground">Success stories</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Learn the<br />
              <span className="gradient-text-primary">neuroscience</span>
            </h2>
            
            <p className="text-muted-foreground max-w-md">
              Daily activities will teach you about dopamine, serotonin, endorphins, and oxytocin. Understand your brain chemistry and optimize for happiness.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="lg" onClick={onGetStarted}>
                How it works
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-xs text-muted-foreground">Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">4.9★</div>
                <div className="text-xs text-muted-foreground">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100+</div>
                <div className="text-xs text-muted-foreground">Activities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
