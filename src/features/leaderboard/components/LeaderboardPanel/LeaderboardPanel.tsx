import { useState, useMemo } from 'react';
import { useApp } from '@/contexts/AppContext';
import { mockLeaderboard, type LeaderboardEntry } from '@/data/mockData';
import type { LeaderboardSortBy } from '../../types';
import { cn } from '@/utils/helpers';
import { Flame, Trophy, Heart, Medal } from 'lucide-react';

const SORT_OPTIONS: { id: LeaderboardSortBy; label: string; icon: typeof Flame; description: string }[] = [
  { id: 'currentStreak', label: 'Current Streak', icon: Flame, description: 'Who\'s on fire this week' },
  { id: 'longestStreak', label: 'Best Streak', icon: Trophy, description: 'All-time personal bests' },
  { id: 'supportGiven', label: 'Top Supporters', icon: Heart, description: 'Community heroes' },
];

function getRankDisplay(rank: number): string {
  if (rank === 1) return '1st';
  if (rank === 2) return '2nd';
  if (rank === 3) return '3rd';
  return `${rank}th`;
}

export function LeaderboardPanel() {
  const { user } = useApp();
  const [sortBy, setSortBy] = useState<LeaderboardSortBy>('currentStreak');

  const mergedList = useMemo(() => {
    const others = mockLeaderboard.filter((e) => e.id !== user?.id);
    const currentUserEntry: LeaderboardEntry | null = user
      ? {
          id: user.id,
          username: user.username,
          avatar: user.avatar,
          currentStreak: user.currentStreak,
          longestStreak: user.longestStreak,
          supportGiven: user.supportGiven,
        }
      : null;
    const combined = currentUserEntry ? [currentUserEntry, ...others] : [...others];
    return [...combined].sort((a, b) => (b[sortBy] as number) - (a[sortBy] as number));
  }, [user, sortBy]);

  const rankedList = useMemo(() => {
    return mergedList.map((entry, index) => ({ ...entry, rank: index + 1 }));
  }, [mergedList]);

  const currentUserRank = user ? rankedList.findIndex((e) => e.id === user.id) + 1 : 0;

  if (!user) return null;

  return (
    <div className="p-4">
      {/* Motivational header */}
      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 text-center">
        <h2 className="text-xl font-bold gradient-text-primary mb-1">Community Leaderboard</h2>
        <p className="text-sm text-muted-foreground">
          See how others are doing. You're not competing — you're growing together. 🌱
        </p>
      </div>

      {/* Sort tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {SORT_OPTIONS.map((opt) => {
          const Icon = opt.icon;
          const isActive = sortBy === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setSortBy(opt.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-glow-primary'
                  : 'bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
              )}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="font-medium text-sm">{opt.label}</span>
            </button>
          );
        })}
      </div>

      {/* Your rank highlight */}
      {currentUserRank > 0 && (
        <div className="mb-4 p-3 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center text-xl">
              {user.avatar}
            </div>
            <div>
              <p className="font-semibold text-foreground">You</p>
              <p className="text-sm text-muted-foreground">
                Ranked <span className="text-primary font-bold">{getRankDisplay(currentUserRank)}</span>
                {sortBy === 'currentStreak' && ` · ${user.currentStreak} day streak`}
                {sortBy === 'longestStreak' && ` · Best: ${user.longestStreak} days`}
                {sortBy === 'supportGiven' && ` · ${user.supportGiven} supports given`}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-primary">
            <Medal className="w-5 h-5" />
            <span className="font-bold">{currentUserRank}</span>
          </div>
        </div>
      )}

      {/* Leaderboard list */}
      <div className="space-y-2">
        {rankedList.map((entry) => {
          const isCurrentUser = entry.id === user.id;
          const isTopThree = entry.rank <= 3;
          const stat =
            sortBy === 'currentStreak'
              ? `${entry.currentStreak} days`
              : sortBy === 'longestStreak'
                ? `${entry.longestStreak} days`
                : `${entry.supportGiven} supports`;

          return (
            <div
              key={entry.id}
              className={cn(
                'flex items-center gap-3 p-3 rounded-xl transition-colors',
                isCurrentUser
                  ? 'bg-primary/10 border-2 border-primary'
                  : 'bg-card border border-border hover:bg-card-hover',
                isTopThree && !isCurrentUser && 'border-primary/30'
              )}
            >
              <div
                className={cn(
                  'w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0',
                  entry.rank === 1 && 'bg-amber-500/20 text-amber-400',
                  entry.rank === 2 && 'bg-slate-400/20 text-slate-300',
                  entry.rank === 3 && 'bg-amber-700/20 text-amber-600',
                  entry.rank > 3 && 'bg-muted text-muted-foreground'
                )}
              >
                {entry.rank <= 3 ? ['🥇', '🥈', '🥉'][entry.rank - 1] : entry.rank}
              </div>
              <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center text-2xl shrink-0">
                {entry.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className={cn('font-semibold truncate', isCurrentUser && 'text-primary')}>
                  {entry.username}
                  {isCurrentUser && ' (you)'}
                </p>
                <p className="text-sm text-muted-foreground">{stat}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Encouragement footer */}
      <div className="mt-6 p-4 rounded-2xl bg-card border border-border text-center">
        <p className="text-sm text-muted-foreground">
          Every day you show up counts. Keep going — the leaderboard updates as you and others progress! 💪
        </p>
      </div>
    </div>
  );
}
