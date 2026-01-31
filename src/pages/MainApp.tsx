import { Outlet } from 'react-router-dom';
import { Header, Sidebar, BottomNav } from '@/features/layout/components';
import { useApp } from '@/contexts/AppContext';

export default function MainApp() {
  const { user } = useApp();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="text-6xl mb-4">🌱</div>
          <h2 className="text-xl font-bold mb-2">Loading...</h2>
          <p className="text-muted-foreground">Setting up your experience</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar - Desktop */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 min-h-screen border-r border-border max-w-2xl pb-20 lg:pb-0">
        <Header />
        <Outlet />
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
      <BottomNav />
    </div>
  );
}
