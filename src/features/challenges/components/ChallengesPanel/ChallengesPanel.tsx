import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Flame, Check, Trophy, Users, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/helpers';
import { ConfettiCelebration } from '@/components/celebrations/ConfettiCelebration';
import { ROUTES } from '@/utils/constants';

const MILESTONES = [7, 30, 90];

export function ChallengesPanel() {
  const { challenges, checkInChallenge, user } = useApp();
  const navigate = useNavigate();
  const [celebration, setCelebration] = useState({ visible: false, milestone: 0 });

  if (!user) return null;

  const handleCheckIn = (challengeId: number, currentStreak: number) => {
    const newStreak = currentStreak + 1;
    checkInChallenge(challengeId);
    if (MILESTONES.includes(newStreak)) {
      setCelebration({ visible: true, milestone: newStreak });
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Your Challenges</h2>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate(ROUTES.BROWSE_CHALLENGES)}
        >
          Browse All <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {/* Empty State */}
      {challenges.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
          <div className="text-6xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold mb-2">No active challenges yet</h3>
          <p className="text-muted-foreground max-w-sm mb-6">
            Browse available challenges and join one to start building your streak!
          </p>
          <Button 
            variant="glow" 
            size="lg"
            onClick={() => navigate(ROUTES.BROWSE_CHALLENGES)}
          >
            Browse Challenges
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {challenges.map((challenge) => {
            const progress = (challenge.currentStreak / challenge.targetDays) * 100;
            const isCompleted = challenge.status === 'completed';
            const nextMilestone = MILESTONES.find(m => m > challenge.currentStreak) || challenge.targetDays;
          return (
            <div 
              key={challenge.id} 
              className={cn(
                "p-4 rounded-2xl border transition-all cursor-pointer", 
                isCompleted ? "bg-success/10 border-success/30" : "bg-card border-border hover:border-primary/50"
              )}
              onClick={() => navigate(`/app/challenges/${challenge.id}`)}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-foreground flex items-center gap-2">{isCompleted && <Trophy className="w-4 h-4 text-success" />}{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground">{challenge.description}</p>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 text-accent">
                  <Users className="w-3 h-3" />
                  <span className="text-xs font-medium">{challenge.participants}</span>
                </div>
              </div>
              <div className="mb-3">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">{challenge.currentStreak}/{challenge.targetDays} days</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden relative">
                  <div className={cn("h-full rounded-full transition-all duration-500", isCompleted ? "bg-success" : "bg-primary")} style={{ width: `${Math.min(progress, 100)}%` }} />
                  {MILESTONES.map((milestone) => milestone <= challenge.targetDays && (
                    <div key={milestone} className={cn("absolute top-1/2 -translate-y-1/2 w-1 h-3 rounded-full", challenge.currentStreak >= milestone ? "bg-success" : "bg-muted-foreground/30")} style={{ left: `${(milestone / challenge.targetDays) * 100}%` }} />
                  ))}
                </div>
                {!isCompleted && <p className="text-xs text-muted-foreground mt-1">{nextMilestone - challenge.currentStreak} days until next milestone 🎯</p>}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn("flex items-center gap-1 px-2 py-1 rounded-full", isCompleted ? "bg-success/20 text-success" : "bg-streak/20 text-streak")}>
                    <Flame className="w-4 h-4" />
                    <span className="font-bold text-sm">{challenge.currentStreak}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">day streak</span>
                </div>
                {!isCompleted && <Button variant="glow" size="sm" onClick={(e) => { e.stopPropagation(); handleCheckIn(challenge.id, challenge.currentStreak); }} className="gap-1"><Check className="w-4 h-4" /> Check In</Button>}
                {isCompleted && <div className="flex items-center gap-1 text-success font-semibold text-sm"><Trophy className="w-4 h-4" /> Completed!</div>}
              </div>
            </div>
          );
          })}
        </div>
      )}

      {/* Encouragement */}
      {challenges.length > 0 && (
        <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 text-center">
          <p className="text-lg font-semibold mb-1">🌟 Keep going!</p>
          <p className="text-sm text-muted-foreground">Consistency beats intensity. Small daily wins lead to big transformations.</p>
        </div>
      )}

      <ConfettiCelebration isVisible={celebration.visible} milestone={celebration.milestone} onComplete={() => setCelebration({ visible: false, milestone: 0 })} />
    </div>
  );
}
