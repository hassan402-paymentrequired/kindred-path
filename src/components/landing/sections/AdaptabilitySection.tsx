import { Button } from '@/components/ui/button';
import { Download, Globe, ArrowRight } from 'lucide-react';

interface AdaptabilitySectionProps {
  onGetStarted: () => void;
}

export function AdaptabilitySection({ onGetStarted }: AdaptabilitySectionProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Purple/Blue Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/30 via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Adaptability<br />
              Just in a few<br />
              <span className="gradient-text-primary">Clicks</span>
            </h2>
            
            <p className="text-muted-foreground max-w-md">
              Track your activity and get insights on how it works for your happiness. Reduce stress and make your life happier with Bloom app.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button variant="glow" size="lg" onClick={onGetStarted}>
                <Download className="w-4 h-4 mr-2" />
                Download app
              </Button>
              <Button variant="outline" size="lg">
                <Globe className="w-4 h-4 mr-2" />
                Access from web
              </Button>
            </div>
          </div>

          {/* Right - Dashboard Mockup */}
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className="bg-card rounded-2xl border border-border p-6 shadow-elevated">
              <div className="bg-muted rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-5xl mb-4">📊</div>
                  <div className="text-lg font-semibold mb-2">Analytics Dashboard</div>
                  <div className="text-sm text-muted-foreground">Image placeholder for dashboard screenshot</div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="float-element absolute -top-6 -right-6 bg-card rounded-2xl p-4 border border-border shadow-elevated">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-success to-primary rounded-xl flex items-center justify-center text-2xl">
                  📈
                </div>
                <div>
                  <div className="text-xl font-bold text-success">+45%</div>
                  <div className="text-xs text-muted-foreground">This month</div>
                </div>
              </div>
            </div>

            <div className="float-element absolute -bottom-4 -left-4 bg-card rounded-2xl p-3 border border-border shadow-elevated">
              <div className="flex gap-2">
                {['😊', '😌', '🤗', '💪'].map((emoji, i) => (
                  <div key={i} className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-xl">
                    {emoji}
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Avatar */}
            <div className="absolute -bottom-8 right-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-3xl border-4 border-background shadow-elevated">
                🧘
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
