import { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Menu, Bell, Search, Flame, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mockCommunities } from '@/data/mockData';

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { user, activeTopic, setActiveTopic } = useApp();
  const [showMobileNav, setShowMobileNav] = useState(false);

  if (!user) return null;

  const currentCommunity = activeTopic 
    ? mockCommunities.find(c => c.slug === activeTopic)
    : null;

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="flex items-center justify-between h-14 px-4">
          {/* Left */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon-sm" 
              className="lg:hidden"
              onClick={() => setShowMobileNav(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              <span className="font-bold text-lg gradient-text-primary hidden sm:inline">
                {currentCommunity ? currentCommunity.name : 'Home'}
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon-sm">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon-sm" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-love rounded-full" />
            </Button>
            <div className="flex items-center gap-2 ml-2 px-2 py-1 rounded-full bg-muted">
              <Flame className="w-4 h-4 text-streak" />
              <span className="font-bold text-sm text-streak">{user.currentStreak}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {showMobileNav && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowMobileNav(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-sidebar border-r border-border p-4 animate-slide-in-right overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xl border border-primary">
                  {user.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{user.username}</h3>
                  <div className="flex items-center gap-1 text-xs text-streak">
                    <Flame className="w-3 h-3" />
                    <span>{user.currentStreak} day streak</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon-sm" onClick={() => setShowMobileNav(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              <button
                onClick={() => {
                  setActiveTopic(null);
                  setShowMobileNav(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-colors text-left",
                  activeTopic === null
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <span className="text-xl">🏠</span>
                <span className="font-medium">Home Feed</span>
              </button>
              {mockCommunities.map((community) => (
                <button
                  key={community.id}
                  onClick={() => {
                    setActiveTopic(community.slug);
                    setShowMobileNav(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-colors text-left",
                    activeTopic === community.slug
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <span className="text-xl">{community.icon}</span>
                  <div className="flex-1">
                    <span className="font-medium block">{community.name}</span>
                    <span className="text-xs text-muted-foreground">{community.members.toLocaleString()} members</span>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
