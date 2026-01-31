import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[calc(100vh-6rem)]">
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
              <Link to="/signup">
                <Button variant="glow" size="lg" className="group">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div ref={phoneRef} className="relative flex justify-center lg:justify-end" >
            <img src='assets/illustrations/hero.png'  alt='hero'/>
          </div>
        </div>
      </div>
    </section>
  );
}
