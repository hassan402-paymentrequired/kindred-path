import { useApp } from '@/contexts/AppContext';
import { mockCommunities } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Users, TrendingUp, Flame, Trophy, Settings } from 'lucide-react';

export function Sidebar() {
  const { user, challenges, activeTopic, setActiveTopic } = useApp();

  if (!user) return null;

  const topCommunities = mockCommunities.slice(0, 5);
  const activeChallenge = challenges.find(c => c.status === 'active');

  return (
    <aside className="hidden lg:flex flex-col w-80 h-screen sticky top-0 border-r border-border bg-sidebar p-4 overflow-y-auto">
      {/* User Profile Summary */}
      <div className="p-4 rounded-2xl bg-card border border-border mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-2xl border-2 border-primary shadow-glow-primary">
            {user.avatar}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{user.username}</h3>
            <p className="text-sm text-muted-foreground">Member since {new Date(user.joinedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 rounded-xl bg-muted">
            <div className="flex items-center justify-center gap-1 text-streak mb-1">
              <Flame className="w-4 h-4" />
              <span className="font-bold">{user.currentStreak}</span>
            </div>
            <span className="text-xs text-muted-foreground">Streak</span>
          </div>
          <div className="p-2 rounded-xl bg-muted">
            <div className="flex items-center justify-center gap-1 text-success mb-1">
              <Trophy className="w-4 h-4" />
              <span className="font-bold">{user.longestStreak}</span>
            </div>
            <span className="text-xs text-muted-foreground">Best</span>
          </div>
          <div className="p-2 rounded-xl bg-muted">
            <div className="flex items-center justify-center gap-1 text-love mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="font-bold">{user.supportGiven}</span>
            </div>
            <span className="text-xs text-muted-foreground">Given</span>
          </div>
        </div>
      </div>

      {/* Active Challenge */}
      {activeChallenge && (
        <div className="p-4 rounded-2xl bg-card border border-border mb-4">
          <h4 className="font-semibold text-sm text-muted-foreground mb-3 flex items-center gap-2">
            <Flame className="w-4 h-4 text-accent" />
            Active Challenge
          </h4>
          <div className="mb-3">
            <h5 className="font-semibold text-foreground">{activeChallenge.title}</h5>
            <p className="text-sm text-muted-foreground">{activeChallenge.description}</p>
          </div>
          {/* Progress Ring */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16">
              <svg className="w-16 h-16 transform -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  className="text-muted"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 28}
                  strokeDashoffset={2 * Math.PI * 28 * (1 - activeChallenge.currentStreak / activeChallenge.targetDays)}
                  strokeLinecap="round"
                  className="text-primary transition-all duration-500"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-bold text-primary">{activeChallenge.currentStreak}</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Day {activeChallenge.currentStreak} of {activeChallenge.targetDays}
              </p>
              <p className="text-xs text-muted-foreground">
                {activeChallenge.targetDays - activeChallenge.currentStreak} days to go!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Communities */}
      <div className="flex-1">
        <h4 className="font-semibold text-sm text-muted-foreground mb-3 flex items-center gap-2">
          <Users className="w-4 h-4" />
          Communities
        </h4>
        <nav className="space-y-1">
          <button
            onClick={() => setActiveTopic(null)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors text-left",
              activeTopic === null
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <span className="text-lg">🏠</span>
            <span className="font-medium">Home Feed</span>
          </button>
          {topCommunities.map((community) => (
            <button
              key={community.id}
              onClick={() => setActiveTopic(community.slug)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors text-left",
                activeTopic === community.slug
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <span className="text-lg">{community.icon}</span>
              <div className="flex-1 min-w-0">
                <span className="font-medium block truncate">{community.name}</span>
                <span className="text-xs text-muted-foreground">{community.members.toLocaleString()} members</span>
              </div>
            </button>
          ))}
        </nav>
      </div>

      {/* Settings */}
      <button className="flex items-center gap-3 px-3 py-2 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-colors mt-4">
        <Settings className="w-5 h-5" />
        <span className="font-medium">Settings</span>
      </button>
    </aside>
  );
}
