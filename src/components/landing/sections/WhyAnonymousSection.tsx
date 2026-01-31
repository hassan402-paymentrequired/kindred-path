import { Shield, Heart, Users, Lock } from 'lucide-react';

export function WhyAnonymousSection() {
  const reasons = [
    {
      icon: Shield,
      title: "Judgment-Free Zone",
      description: "Share your struggles without fear. No one knows who you are, so you can be completely honest.",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Heart,
      title: "Genuine Connections",
      description: "When names don't matter, authenticity thrives. Connect over shared experiences, not social status.",
      gradient: "from-love/20 to-love/5",
    },
    {
      icon: Lock,
      title: "Complete Privacy",
      description: "Your personal information stays private. We'll never ask for your real name, email, or personal details.",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Users,
      title: "Focus on Recovery",
      description: "No followers, no likes chase. Just real support from people who understand what you're going through.",
      gradient: "from-accent/20 to-accent/5",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-section">
          <div className="inline-block px-4 py-2 rounded-full bg-love/10 border border-love/20 mb-4">
            <span className="text-love font-semibold text-sm">Why Anonymous?</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your Privacy. <br className="hidden md:inline" />
            <span className="gradient-text-primary">Your Safety.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Anonymity isn't just a feature—it's the foundation of honest, healing conversations.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="animate-section group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${reason.gradient} border border-border hover:border-primary/50 transition-all hover:scale-105`}>
                  {/* Floating Icon */}
                  <div className="float-element mb-6">
                    <div className="inline-flex p-4 rounded-2xl bg-background/80 backdrop-blur-sm shadow-lg group-hover:shadow-elevated transition-shadow">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16 animate-section">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border">
            <Shield className="w-5 h-5 text-success" />
            <span className="text-sm font-medium">
              We never track, sell, or share your data
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
