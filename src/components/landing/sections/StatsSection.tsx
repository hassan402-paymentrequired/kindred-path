import { Trophy, Users, Target, TrendingUp } from 'lucide-react';

export function StatsSection() {
  const stats = [
    { 
      icon: Users, 
      value: "50K+", 
      label: "Active Members",
      color: "text-primary"
    },
    { 
      icon: Trophy, 
      value: "1M+", 
      label: "Challenges Completed",
      color: "text-accent"
    },
    { 
      icon: Target, 
      value: "85%", 
      label: "Success Rate",
      color: "text-success"
    },
    { 
      icon: TrendingUp, 
      value: "45", 
      label: "Avg. Day Streak",
      color: "text-secondary"
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-section">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-primary font-semibold text-sm">Real Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join a Growing Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thousands are already transforming their lives. You're not alone in this journey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="animate-section p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-${stat.color.split('-')[1]}/10 mb-4`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
