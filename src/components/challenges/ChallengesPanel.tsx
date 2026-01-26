import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Flame, Check, Trophy, Users, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ChallengesPanel() {
  const { challenges, checkInChallenge, user } = useApp();

  if (!user) return null;

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Your Challenges</h2>
        <Button variant="ghost" size="sm">
          Browse All
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      <div className="space-y-4">
        {challenges.map((challenge) => {
          const progress = (challenge.currentStreak / challenge.targetDays) * 100;
          const isCompleted = challenge.status === 'completed';

          return (
            <div
              key={challenge.id}
              className={cn(
                "p-4 rounded-2xl border transition-all",
                isCompleted
                  ? "bg-success/10 border-success/30"
                  : "bg-card border-border hover:border-primary/50"
              )}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    {isCompleted && <Trophy className="w-4 h-4 text-success" />}
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{challenge.description}</p>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 text-accent">
                  <Users className="w-3 h-3" />
                  <span className="text-xs font-medium">{challenge.participants}</span>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-3">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">
                    {challenge.currentStreak}/{challenge.targetDays} days
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-500",
                      isCompleted ? "bg-success" : "bg-primary"
                    )}
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
              </div>

              {/* Streak & Action */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "flex items-center gap-1 px-2 py-1 rounded-full",
                    isCompleted ? "bg-success/20 text-success" : "bg-streak/20 text-streak"
                  )}>
                    <Flame className="w-4 h-4" />
                    <span className="font-bold text-sm">{challenge.currentStreak}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">day streak</span>
                </div>

                {!isCompleted && (
                  <Button
                    variant="glow"
                    size="sm"
                    onClick={() => checkInChallenge(challenge.id)}
                    className="gap-1"
                  >
                    <Check className="w-4 h-4" />
                    Check In
                  </Button>
                )}

                {isCompleted && (
                  <div className="flex items-center gap-1 text-success font-semibold text-sm">
                    <Trophy className="w-4 h-4" />
                    Completed!
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Encouragement */}
      <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 text-center">
        <p className="text-lg font-semibold mb-1">🌟 Keep going!</p>
        <p className="text-sm text-muted-foreground">
          Consistency beats intensity. Small daily wins lead to big transformations.
        </p>
      </div>
    </div>
  );
}
