import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HeroSection } from './sections/HeroSection';
import { HabitsSection } from './sections/HabitsSection';
import { FeaturesGrid } from './sections/FeaturesGrid';
import { BalanceSection } from './sections/BalanceSection';
import { AdaptabilitySection } from './sections/AdaptabilitySection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { NeuroscienceSection } from './sections/NeuroscienceSection';
import { FooterCTA } from './sections/FooterCTA';
import { LandingNav } from './sections/LandingNav';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate sections with intersection observer approach
      const sections = document.querySelectorAll('.animate-section');
      sections.forEach((section) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
            }
          }
        );
      });

      // Floating elements animation
      gsap.utils.toArray('.float-element').forEach((el: any, i) => {
        gsap.to(el, {
          y: "random(-15, 15)",
          x: "random(-8, 8)",
          duration: "random(3, 4)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.15
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <LandingNav onGetStarted={onGetStarted} />

      {/* Hero Section */}
      <HeroSection onGetStarted={onGetStarted} />

      {/* Build Good Habits Section */}
      <HabitsSection />

      {/* Features Grid */}
      <FeaturesGrid onGetStarted={onGetStarted} />

      {/* Find Balance Section */}
      <BalanceSection />

      {/* Adaptability Section */}
      <AdaptabilitySection onGetStarted={onGetStarted} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Neuroscience Section */}
      <NeuroscienceSection onGetStarted={onGetStarted} />

      {/* Footer CTA */}
      <FooterCTA />
    </div>
  );
}
