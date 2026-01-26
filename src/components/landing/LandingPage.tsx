import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Sparkles, Users, Flame, MessageCircle, ArrowRight, Star } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const ctx = gsap.context(() => {
      // Initial state - hide everything
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], { 
        opacity: 0, 
        y: 50 
      });
      gsap.set(featuresRef.current?.children || [], { 
        opacity: 0, 
        y: 30,
        scale: 0.9
      });
      gsap.set(floatingRef.current?.children || [], {
        opacity: 0,
        scale: 0
      });

      // Main timeline
      const tl = gsap.timeline({ delay: 0.3 });

      // Animate floating elements
      tl.to(floatingRef.current?.children || [], {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, 0);

      // Animate title
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, 0.2);

      // Animate subtitle
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, 0.5);

      // Animate CTA
      tl.to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, 0.7);

      // Animate features
      tl.to(featuresRef.current?.children || [], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, 0.9);

      // Continuous floating animation for decorative elements
      gsap.to(floatingRef.current?.children || [], {
        y: "random(-15, 15)",
        x: "random(-10, 10)",
        rotation: "random(-5, 5)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "random"
        }
      });

      // Pulse animation for glow effect
      gsap.to(".glow-pulse", {
        boxShadow: "0 0 60px hsl(var(--primary) / 0.4)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: Shield, title: "100% Anonymous", desc: "No real names, no judgment", color: "primary" },
    { icon: Heart, title: "Real Support", desc: "From people who understand", color: "love" },
    { icon: Users, title: "Community", desc: "You're never alone", color: "secondary" },
    { icon: Flame, title: "Daily Streaks", desc: "Track your progress", color: "accent" },
  ];

  const stats = [
    { value: "50K+", label: "Community Members" },
    { value: "1M+", label: "Support Messages" },
    { value: "100K+", label: "Days of Recovery" },
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-background overflow-hidden relative"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-soft delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Decorative Elements */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] text-5xl">🌱</div>
        <div className="absolute top-32 right-[15%] text-4xl">✨</div>
        <div className="absolute top-48 left-[20%] text-3xl">💫</div>
        <div className="absolute bottom-40 right-[10%] text-5xl">🌟</div>
        <div className="absolute bottom-32 left-[15%] text-4xl">💪</div>
        <div className="absolute top-1/3 right-[25%] text-3xl">🦋</div>
        <div className="absolute bottom-1/4 right-[30%] text-4xl">🌈</div>
        <div className="absolute top-1/4 left-[30%] text-3xl">🔥</div>
      </div>

      {/* Hero Section */}
      <div ref={heroRef} className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        {/* Logo/Brand */}
        <div className="mb-8 flex items-center gap-3">
          <div className="text-5xl animate-float">🌱</div>
          <span className="text-2xl font-bold gradient-text-primary">Bloom</span>
        </div>

        {/* Main Title */}
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-6 leading-tight"
        >
          <span className="gradient-text-primary">You're not</span>
          <br />
          <span className="text-foreground">alone anymore</span>
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-12"
        >
          A safe, anonymous community where real people support each other through 
          addiction, mental health, and life's toughest struggles.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button 
            onClick={onGetStarted}
            size="xl" 
            variant="glow"
            className="glow-pulse group"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="xl" 
            variant="outline"
            className="group"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Browse Community
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div 
          ref={featuresRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div 
                key={i}
                className="group p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonial Preview */}
        <div className="mt-16 max-w-2xl">
          <div className="p-6 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🐬</div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-foreground">BraveOcean42</span>
                  <div className="flex items-center gap-1 text-streak">
                    <Flame className="w-4 h-4" />
                    <span className="text-sm font-medium">30 days</span>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Day 30! 🎉 One month clean from gambling. Never thought I'd make it this far. 
                  Thank you all for the daily encouragement. This community saved me."
                </p>
                <div className="flex items-center gap-4 mt-3 text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-love" /> 156
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" /> 34
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex items-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm">Encrypted & Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-streak" />
            <span className="text-sm">4.9 Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
}
