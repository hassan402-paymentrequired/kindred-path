import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { allChallenges, mockChallengeParticipants, topics } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Calendar, Target, Flame, Trophy, TrendingUp, Award } from 'lucide-react';
import { cn } from '@/utils/helpers';
import { toast } from 'sonner';
import type { ChallengeParticipant } from '@/data/mockData';

type SortBy = 'streak' | 'checkIns' | 'recent';

export function ChallengeDetail() {
  const { id } = useParams<{ id: string }>();
  const { user, challenges: userChallenges, joinChallenge } = useApp();
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<SortBy>('streak');

  if (!user) return null;

  const challengeId = parseInt(id || '0');
  const challenge = allChallenges.find(c => c.id === challengeId);
  
  if (!challenge) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <div className="text-6xl mb-4">🤔</div>
        <h2 className="text-2xl font-bold mb-2">Challenge not found</h2>
        <p className="text-muted-foreground mb-6">This challenge doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/app/challenges/browse')}>
          Browse Challenges
        </Button>
      </div>
    );
  }

  const isJoined = userChallenges.some(c => c.id === challengeId);
  const topicInfo = topics.find(t => t.id === challenge.topic);
  const difficulty = challenge.targetDays >= 60 ? 'Hard' : challenge.targetDays >= 30 ? 'Medium' : 'Easy';
  const difficultyColor = difficulty === 'Hard' ? 'text-love' : difficulty === 'Medium' ? 'text-accent' : 'text-success';

  // Get participants for this challenge
  const participants = mockChallengeParticipants.filter(p => p.challengeId === challengeId);

  // Sort participants
  const sortedParticipants = [...participants].sort((a, b) => {
    if (sortBy === 'streak') return b.currentStreak - a.currentStreak;
    if (sortBy === 'checkIns') return b.checkIns - a.checkIns;
    // recent: parse time strings (simplified)
    return 0;
  });

  // Stats
  const activeCount = participants.filter(p => p.status === 'active').length;
  const completedCount = participants.filter(p => p.status === 'completed').length;
  const avgStreak = participants.length > 0 
    ? Math.round(participants.reduce((sum, p) => sum + p.currentStreak, 0) / participants.length)
    : 0;

  const handleJoin = () => {
    joinChallenge(challenge.id);
    toast.success(`Joined ${challenge.title}! 🎉`, {
      description: 'Check it in your Challenges page',
    });
  };

  return (
    <div className="p-4 pb-24 lg:pb-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Button variant="ghost" size="icon-sm" onClick={() => navigate('/app/challenges/browse')}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-2xl font-bold">Challenge Details</h1>
      </div>

      {/* Challenge Info Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-card border border-primary/30 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{challenge.title}</h2>
            <p className="text-muted-foreground mb-3">{challenge.description}</p>
            
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary">
                <span>{topicInfo?.icon}</span>
                <span>#{challenge.topic}</span>
              </span>
              <span className={cn("px-3 py-1 rounded-full text-sm font-medium bg-card", difficultyColor)}>
                {difficulty}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-card/50 border border-border">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <Users className="w-4 h-4" />
              <span>Total</span>
            </div>
            <p className="text-2xl font-bold">{challenge.participants}</p>
          </div>
          <div className="p-3 rounded-xl bg-card/50 border border-border">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <Calendar className="w-4 h-4" />
              <span>Duration</span>
            </div>
            <p className="text-2xl font-bold">{challenge.targetDays}d</p>
          </div>
          <div className="p-3 rounded-xl bg-card/50 border border-border">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <Flame className="w-4 h-4" />
              <span>Avg Streak</span>
            </div>
            <p className="text-2xl font-bold">{avgStreak}</p>
          </div>
          <div className="p-3 rounded-xl bg-card/50 border border-border">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <Trophy className="w-4 h-4" />
              <span>Completed</span>
            </div>
            <p className="text-2xl font-bold">{completedCount}</p>
          </div>
        </div>

        {/* Action Button */}
        {!isJoined ? (
          <Button variant="glow" size="lg" onClick={handleJoin} className="w-full gap-2">
            <Target className="w-5 h-5" />
            Join Challenge
          </Button>
        ) : (
          <Button variant="outline" size="lg" onClick={() => navigate('/app/challenges')} className="w-full">
            View My Progress
          </Button>
        )}
      </div>

      {/* Participants Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Participants ({participants.length})</h3>
          
          {/* Sort Options */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSortBy('streak')}
              className={cn(
                "px-3 py-1 rounded-lg text-sm font-medium transition-colors",
                sortBy === 'streak' 
                  ? "bg-primary/20 text-primary" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              Streak
            </button>
            <button
              onClick={() => setSortBy('checkIns')}
              className={cn(
                "px-3 py-1 rounded-lg text-sm font-medium transition-colors",
                sortBy === 'checkIns' 
                  ? "bg-primary/20 text-primary" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              Check-ins
            </button>
          </div>
        </div>

        {/* Participants List */}
        <div className="space-y-2">
          {sortedParticipants.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-6 text-center bg-card rounded-2xl border border-border">
              <div className="text-5xl mb-3">👥</div>
              <h4 className="text-lg font-semibold mb-1">No participants yet</h4>
              <p className="text-sm text-muted-foreground">
                Be the first to join this challenge!
              </p>
            </div>
          ) : (
            sortedParticipants.map((participant, index) => {
              const isCompleted = participant.status === 'completed';
              const progress = (participant.currentStreak / challenge.targetDays) * 100;
              
              return (
                <div
                  key={participant.id}
                  className={cn(
                    "p-4 rounded-xl border transition-all animate-slide-up",
                    isCompleted
                      ? "bg-success/5 border-success/30"
                      : "bg-card border-border hover:border-primary/50"
                  )}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center justify-between">
                    {/* User Info */}
                    <div className="flex items-center gap-3 flex-1">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                          {participant.avatar}
                        </div>
                        {isCompleted && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-success flex items-center justify-center">
                            <Trophy className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-foreground truncate">
                            {participant.username}
                          </p>
                          {index === 0 && sortBy === 'streak' && participant.currentStreak > 0 && (
                            <Award className="w-4 h-4 text-accent flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {isCompleted ? 'Completed!' : `Last check-in: ${participant.lastCheckIn}`}
                        </p>
                        
                        {/* Progress Bar */}
                        <div className="mt-2">
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <div 
                              className={cn(
                                "h-full rounded-full transition-all",
                                isCompleted ? "bg-success" : "bg-primary"
                              )}
                              style={{ width: `${Math.min(progress, 100)}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 ml-4">
                      <div className="text-center">
                        <div className="flex items-center gap-1 text-streak font-bold">
                          <Flame className="w-4 h-4" />
                          <span>{participant.currentStreak}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">streak</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-foreground">{participant.checkIns}</p>
                        <p className="text-xs text-muted-foreground">checks</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Motivation Card */}
      <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 text-center">
        <p className="text-lg font-semibold mb-1">💪 Join the community!</p>
        <p className="text-sm text-muted-foreground">
          {activeCount} active members working toward the same goal. You're not alone!
        </p>
      </div>
    </div>
  );
}
