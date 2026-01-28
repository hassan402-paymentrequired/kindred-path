import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], { 
        opacity: 0, 
        y: 50 
      });
      gsap.set(phoneRef.current, { 
        opacity: 0, 
        x: 100,
        rotateY: -15
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .to(phoneRef.current, {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.8");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">The neuroscience</span>
              <br />
              <span className="text-foreground">of </span>
              <span className="gradient-text-primary">happiness</span>
              <br />
              <span className="text-foreground">in your pocket.</span>
            </h1>

            <p ref={subtitleRef} className="text-lg text-muted-foreground max-w-md">
              Track your activity and get insights on how it works for your happiness. Reduce stress and make your life happier with Bloom.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <Button onClick={onGetStarted} variant="glow" size="lg" className="group">
                Download app
                <Download className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Access from web
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div ref={phoneRef} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-72 h-[580px] bg-card rounded-[3rem] border-4 border-muted shadow-elevated overflow-hidden">
                {/* Phone Screen - Placeholder */}
                <div className="absolute inset-2 rounded-[2.5rem] bg-gradient-to-b from-muted to-card overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 text-xs text-muted-foreground">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-6 h-3 bg-success rounded-sm" />
                    </div>
                  </div>
                  
                  {/* App Content Placeholder */}
                  <div className="p-4 space-y-4">
                    <div className="text-lg font-semibold text-foreground">Howdy, Fellow! 👋</div>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 bg-primary/20 rounded-2xl">
                        <div className="text-2xl font-bold text-primary">86%</div>
                        <div className="text-xs text-muted-foreground">Mood Score</div>
                      </div>
                      <div className="p-3 bg-success/20 rounded-2xl">
                        <div className="text-2xl font-bold text-success">12</div>
                        <div className="text-xs text-muted-foreground">Day Streak</div>
                      </div>
                    </div>

                    {/* Activity Graph Placeholder */}
                    <div className="p-4 bg-muted/50 rounded-2xl">
                      <div className="text-sm font-medium mb-3">Weekly Activity</div>
                      <div className="flex items-end gap-2 h-20">
                        {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                          <div 
                            key={i} 
                            className="flex-1 bg-primary/60 rounded-t-lg transition-all hover:bg-primary"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                          <span key={i}>{d}</span>
                        ))}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex gap-2">
                      <div className="flex-1 p-3 bg-success/20 rounded-xl text-center">
                        <div className="text-2xl mb-1">🧘</div>
                        <div className="text-xs">Meditate</div>
                      </div>
                      <div className="flex-1 p-3 bg-accent/20 rounded-xl text-center">
                        <div className="text-2xl mb-1">📝</div>
                        <div className="text-xs">Journal</div>
                      </div>
                      <div className="flex-1 p-3 bg-secondary/20 rounded-xl text-center">
                        <div className="text-2xl mb-1">💪</div>
                        <div className="text-xs">Workout</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="float-element absolute -top-4 -right-8 p-3 bg-card rounded-2xl border border-border shadow-elevated">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center text-lg">🎯</div>
                  <div>
                    <div className="text-sm font-semibold">Goals Met</div>
                    <div className="text-xs text-muted-foreground">5/5 today</div>
                  </div>
                </div>
              </div>

              <div className="float-element absolute -bottom-6 -left-12 p-3 bg-card rounded-2xl border border-border shadow-elevated">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-love/20 rounded-full flex items-center justify-center text-lg">❤️</div>
                  <div>
                    <div className="text-sm font-semibold text-love">+23%</div>
                    <div className="text-xs text-muted-foreground">Happiness</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
