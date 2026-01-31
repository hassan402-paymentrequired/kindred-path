import { Home, Users, Flame, Bell, User, Award } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'feed', label: 'Home', icon: Home, path: '/app/feed' },
    { id: 'communities', label: 'Communities', icon: Users, path: '/app/communities' },
    { id: 'challenges', label: 'Challenges', icon: Flame, path: '/app/challenges' },
    { id: 'leaderboard', label: 'Rank', icon: Award, path: '/app/leaderboard' },
    { id: 'notifications', label: 'Alerts', icon: Bell, path: '/app/notifications' },
    { id: 'profile', label: 'Profile', icon: User, path: '/app/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-xl border-t border-border lg:hidden">
      <div className="flex items-center justify-around h-16">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path || (tab.id === 'feed' && location.pathname === '/app');
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-xl transition-all",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className={cn(
                "relative",
                isActive && tab.id === 'challenges' && "animate-pulse-soft"
              )}>
                <Icon className={cn(
                  "w-6 h-6 transition-transform",
                  isActive && "scale-110"
                )} />
                {tab.id === 'notifications' && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-love rounded-full" />
                )}
              </div>
              <span className={cn(
                "text-[10px] font-medium",
                isActive && "font-semibold"
              )}>
                {tab.label}
              </span>
              {isActive && (
                <div className="absolute bottom-1 w-1 h-1 rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
