import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Droplets } from 'lucide-react';

export function BalanceSection() {
  const [email, setEmail] = useState('');

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Find the balance<br />
            between <span className="gradient-text-primary">happy</span> and <span className="text-secondary">lifestyle</span>!
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Bloom app helps you learn how daily activities influence the levels of dopamine, serotonin, endorphins, and oxytocin.
          </p>
        </div>

        {/* Email Subscription */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-16">
          <Input
            type="email"
            placeholder="Your e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-12 bg-card border-border"
          />
          <Button variant="glow" size="lg" className="group hover-shine">
            Subscribe
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Visual Elements */}
        <div className="relative max-w-4xl mx-auto">
          {/* Laptop Mockup Placeholder */}
          <div className="relative bg-card rounded-2xl border border-border p-4 shadow-elevated">
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💻</div>
                <div className="text-muted-foreground">Dashboard Preview</div>
                <div className="text-sm text-muted-foreground/60">Image placeholder</div>
              </div>
            </div>
          </div>

          {/* Floating Activity Card */}
          <div className="float-element absolute -left-8 top-1/4 bg-card rounded-2xl p-4 border border-border shadow-elevated hover:scale-110 hover:border-primary/50 transition-all cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Droplets className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-semibold">1 Glass of water</div>
                <div className="text-xs text-muted-foreground">+5 hydration pts</div>
              </div>
            </div>
          </div>

          {/* Floating Session Card */}
          <div className="float-element absolute -right-4 bottom-1/4 bg-card rounded-2xl p-4 border border-success/30 shadow-elevated hover:scale-110 hover:border-success/60 transition-all cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-success/20 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                🧘
              </div>
              <div>
                <div className="text-sm font-semibold text-success">Art Therapy session</div>
                <div className="text-xs text-muted-foreground">In progress...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
