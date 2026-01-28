import { Button } from '@/components/ui/button';
import { Apple, Smartphone } from 'lucide-react';

export function HabitsSection() {
  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Build Good <br />
              <span className="gradient-text-primary">Habits</span>
            </h2>
            
            <p className="text-muted-foreground max-w-md">
              Analyze your activities and focus on things that make you happier. Track your progress and build lasting positive habits.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-3 px-5 py-3 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] opacity-80">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 px-5 py-3 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity">
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] opacity-80">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="relative">
            {/* Main Stats Card */}
            <div className="float-element relative bg-card rounded-3xl p-6 border border-border shadow-elevated max-w-sm ml-auto">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Your Activities</div>
                  <div className="text-4xl font-bold text-success">86%</div>
                </div>
                <div className="w-16 h-16 bg-success/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 36 36">
                    <circle
                      cx="18" cy="18" r="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-muted"
                    />
                    <circle
                      cx="18" cy="18" r="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="94.2"
                      strokeDashoffset="13.2"
                      strokeLinecap="round"
                      className="text-success"
                      transform="rotate(-90 18 18)"
                    />
                  </svg>
                </div>
              </div>

              {/* Weekly Chart */}
              <div className="space-y-3">
                <div className="flex items-end gap-1 h-20">
                  {[
                    { day: 'M', value: 40, active: true },
                    { day: 'T', value: 60, active: true },
                    { day: 'W', value: 30, active: true },
                    { day: 'T', value: 90, active: true },
                    { day: 'F', value: 50, active: true },
                    { day: 'S', value: 70, active: false },
                    { day: 'S', value: 20, active: false },
                  ].map((item, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div 
                        className={`w-full rounded-t-lg transition-all ${item.active ? 'bg-success' : 'bg-muted'}`}
                        style={{ height: `${item.value}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                    <span key={i} className="flex-1 text-center">{d}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Secondary Card - Watch */}
            <div className="float-element absolute -bottom-8 -left-4 bg-card rounded-2xl p-4 border border-border shadow-elevated">
              {/* Placeholder for smartwatch image */}
              <div className="w-32 h-32 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl flex items-center justify-center">
                <div className="text-4xl">⌚</div>
              </div>
              <div className="text-center mt-2">
                <div className="text-xs text-muted-foreground">Synced with</div>
                <div className="text-sm font-semibold">Smart Watch</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
