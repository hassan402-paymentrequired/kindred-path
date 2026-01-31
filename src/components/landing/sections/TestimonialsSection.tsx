export function TestimonialsSection() {
  const testimonials = [
    {
      avatar: '🦊',
      name: 'BravePhoenix',
      message: "Howdy, yeah! This feels to pretty cool today! And I'm happy! 🎉",
      time: '2m ago',
      color: 'primary'
    },
    {
      avatar: '🐼',
      name: 'GentleOcean',
      message: "Howdy, good! I'm feeling good. Today is really amazing... yay...",
      time: '5m ago',
      color: 'success'
    },
    {
      avatar: '🦁',
      name: 'WildSpirit',
      message: "Hello I'm Everybody! Let's be friends!",
      time: '8m ago',
      color: 'secondary'
    }
  ];

  return (
    <section id="community" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Chat Messages */}
          <div className="space-y-4">
            {testimonials.map((item, i) => (
              <div 
                key={i} 
                className="float-element flex items-start gap-3 p-4 bg-card rounded-2xl border border-border shadow-card card-hover-glow cursor-pointer"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className={`w-12 h-12 bg-${item.color}/20 rounded-full flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {item.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-foreground">{item.name}</span>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Learn the<br />
              <span className="gradient-text-primary">neuroscience</span>
            </h2>
            
            <p className="text-muted-foreground max-w-md">
              Daily activities will teach you about dopamine, serotonin, endorphins, and oxytocin.
            </p>

            {/* Brain Illustration Placeholder */}
            <div className="relative inline-block group cursor-pointer">
              <div className="w-48 h-48 bg-gradient-to-br from-secondary/30 via-primary/20 to-accent/30 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                <div className="text-7xl group-hover:scale-110 transition-transform">🧠</div>
              </div>
              
              {/* Floating Labels */}
              <div className="absolute -top-2 -right-4 px-3 py-1 bg-primary rounded-full text-xs font-medium text-primary-foreground hover:scale-110 transition-transform cursor-pointer">
                Dopamine
              </div>
              <div className="absolute top-1/2 -right-8 px-3 py-1 bg-success rounded-full text-xs font-medium text-success-foreground hover:scale-110 transition-transform cursor-pointer">
                Serotonin
              </div>
              <div className="absolute -bottom-2 right-0 px-3 py-1 bg-love rounded-full text-xs font-medium text-white hover:scale-110 transition-transform cursor-pointer">
                Oxytocin
              </div>
              <div className="absolute top-1/3 -left-8 px-3 py-1 bg-accent rounded-full text-xs font-medium text-accent-foreground hover:scale-110 transition-transform cursor-pointer">
                Endorphins
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
