import { useApp } from '@/contexts/AppContext';

export default function Profile() {
  const { user } = useApp();

  if (!user) return null;

  return (
    <div className="p-4">
      {/* Profile Header */}
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-card border-2 border-primary shadow-glow-primary text-5xl mb-4">
          {user.avatar}
        </div>
        <h2 className="text-2xl font-bold gradient-text-primary mb-1">{user.username}</h2>
        <p className="text-muted-foreground text-sm">
          Member since {new Date(user.joinedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="p-4 rounded-2xl bg-card border border-border text-center">
          <div className="text-2xl font-bold text-streak mb-1">🔥 {user.currentStreak}</div>
          <div className="text-xs text-muted-foreground">Current Streak</div>
        </div>
        <div className="p-4 rounded-2xl bg-card border border-border text-center">
          <div className="text-2xl font-bold text-success mb-1">🏆 {user.longestStreak}</div>
          <div className="text-xs text-muted-foreground">Best Streak</div>
        </div>
        <div className="p-4 rounded-2xl bg-card border border-border text-center">
          <div className="text-2xl font-bold text-love mb-1">💝 {user.supportGiven}</div>
          <div className="text-xs text-muted-foreground">Support Given</div>
        </div>
      </div>

      {/* Topics */}
      <div className="mb-8">
        <h3 className="font-semibold text-muted-foreground text-sm mb-3">YOUR TOPICS</h3>
        <div className="flex flex-wrap gap-2">
          {user.joinedTopics.map((topic) => (
            <span
              key={topic}
              className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              #{topic}
            </span>
          ))}
        </div>
      </div>

      {/* Encouragement */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center">
        <p className="font-semibold mb-1">🌟 You're doing amazing!</p>
        <p className="text-sm text-muted-foreground">
          Every day you show up is a victory. Keep going!
        </p>
      </div>
    </div>
  );
}
