import { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { BottomNav } from '@/components/layout/BottomNav';
import { FeedList } from '@/components/feed/FeedList';
import { ComposeModal } from '@/components/feed/ComposeModal';
import { ChallengesPanel } from '@/components/challenges/ChallengesPanel';
import { CommunitiesPanel } from '@/components/communities/CommunitiesPanel';
import { Button } from '@/components/ui/button';
import { Feather } from 'lucide-react';

export function MainFeed() {
  const { activeTopic, user } = useApp();
  const [showCompose, setShowCompose] = useState(false);
  const [activeTab, setActiveTab] = useState('feed');

  if (!user) return null;

  const renderContent = () => {
    switch (activeTab) {
      case 'challenges':
        return <ChallengesPanel />;
      case 'communities':
        return <CommunitiesPanel />;
      case 'notifications':
        return (
          <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
            <div className="text-6xl mb-4">🔔</div>
            <h3 className="text-xl font-semibold mb-2">No new notifications</h3>
            <p className="text-muted-foreground">
              When someone likes or comments on your posts, you'll see it here.
            </p>
          </div>
        );
      case 'profile':
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
      default:
        return (
          <>
            {/* Feed Tabs */}
            <div className="flex border-b border-border">
              <button className="flex-1 py-4 text-center font-semibold text-foreground border-b-2 border-primary">
                For You
              </button>
              <button className="flex-1 py-4 text-center font-medium text-muted-foreground hover:bg-muted/50 transition-colors">
                Following
              </button>
            </div>
            <FeedList topic={activeTopic} />
          </>
        );
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar - Desktop */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 min-h-screen border-r border-border max-w-2xl pb-20 lg:pb-0">
        <Header />
        {renderContent()}
      </main>

      {/* Right Sidebar - Desktop only */}
      <aside className="hidden xl:block w-80 p-4">
        {/* Trending Topics */}
        <div className="p-4 rounded-2xl bg-card border border-border mb-4">
          <h3 className="font-bold text-lg mb-4">Trending Now</h3>
          <div className="space-y-3">
            <div className="hover:bg-muted/50 p-2 rounded-lg transition-colors cursor-pointer">
              <p className="text-xs text-muted-foreground">Trending in Recovery</p>
              <p className="font-semibold">#30DaysClean</p>
              <p className="text-xs text-muted-foreground">2.4K posts</p>
            </div>
            <div className="hover:bg-muted/50 p-2 rounded-lg transition-colors cursor-pointer">
              <p className="text-xs text-muted-foreground">Trending in Motivation</p>
              <p className="font-semibold">#MondayMindset</p>
              <p className="text-xs text-muted-foreground">1.8K posts</p>
            </div>
            <div className="hover:bg-muted/50 p-2 rounded-lg transition-colors cursor-pointer">
              <p className="text-xs text-muted-foreground">Trending in Community</p>
              <p className="font-semibold">#NotAlone</p>
              <p className="text-xs text-muted-foreground">3.2K posts</p>
            </div>
          </div>
        </div>

        {/* Encouragement Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
          <p className="text-sm font-medium text-foreground mb-2">
            💪 Daily reminder
          </p>
          <p className="text-muted-foreground text-sm">
            "Progress, not perfection. Every small step forward counts."
          </p>
        </div>
      </aside>

      {/* Bottom Navigation - Mobile */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Floating Compose Button */}
      {activeTab === 'feed' && (
        <Button
          onClick={() => setShowCompose(true)}
          variant="glow"
          size="icon-lg"
          className="fixed bottom-20 lg:bottom-6 right-6 rounded-full shadow-elevated z-30"
        >
          <Feather className="w-6 h-6" />
        </Button>
      )}

      {/* Compose Modal */}
      <ComposeModal isOpen={showCompose} onClose={() => setShowCompose(false)} />
    </div>
  );
}
