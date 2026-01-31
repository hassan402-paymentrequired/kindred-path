import { UserPlus, Target, Users as UsersIcon, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HowItWorksSectionProps {
  onGetStarted: () => void;
}

export function HowItWorksSection({ onGetStarted }: HowItWorksSectionProps) {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Anonymous Profile",
      description: "Get a unique username and avatar. Your real identity stays completely private.",
      color: "primary",
    },
    {
      icon: Target,
      title: "Join Challenges & Set Goals",
      description: "Choose from recovery challenges, daily habits, or create your own path forward.",
      color: "accent",
    },
    {
      icon: UsersIcon,
      title: "Connect & Share Safely",
      description: "Post thoughts, celebrate wins, and get support from people who truly understand.",
      color: "secondary",
    },
    {
      icon: Trophy,
      title: "Track Your Progress",
      description: "Build streaks, earn milestones, and watch yourself grow stronger every day.",
      color: "success",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-card/20 to-background">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-section">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="text-accent font-semibold text-sm">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your journey to recovery and growth starts in just a few simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="animate-section relative group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Connecting Line (desktop only) */}
                  {index < steps.length - 1 && index % 2 === 0 && (
                    <div className="hidden md:block absolute top-24 left-[calc(100%+2rem)] w-16 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}

                  <div className="relative p-8 rounded-3xl bg-card/50 border border-border hover:border-primary/50 transition-all hover:scale-105 hover:shadow-elevated">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold text-primary text-xl">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl bg-${step.color}/10 mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-8 h-8 text-${step.color}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center animate-section">
            <Button 
              onClick={onGetStarted}
              variant="glow" 
              size="xl"
              className="text-lg px-12 py-6 rounded-2xl"
            >
              Start Your Journey Free
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Takes less than 2 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
