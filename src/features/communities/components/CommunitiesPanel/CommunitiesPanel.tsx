import { mockCommunities } from '@/data/mockData';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Users, MessageSquare, ChevronRight, Search } from 'lucide-react';
import { cn } from '@/utils/helpers';

export function CommunitiesPanel() {
  const { setActiveTopic, activeTopic, user } = useApp();

  if (!user) return null;

  return (
    <div className="p-4">
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input type="text" placeholder="Search communities..." className="w-full bg-muted border border-border rounded-xl py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">YOUR COMMUNITIES</h3>
        <div className="space-y-2">
          {mockCommunities.filter(c => user.joinedTopics.includes(c.slug)).map((community) => (
            <button key={community.id} onClick={() => setActiveTopic(community.slug)} className={cn("w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left", activeTopic === community.slug ? "bg-primary/10 border border-primary/30" : "bg-card border border-border hover:border-primary/50 hover:bg-card-hover")}>
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-2xl">{community.icon}</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground truncate">{community.name}</h4>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />{community.members.toLocaleString()}</span>
                  <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" />{community.posts.toLocaleString()} posts</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">DISCOVER</h3>
        <div className="space-y-2">
          {mockCommunities.filter(c => !user.joinedTopics.includes(c.slug)).map((community) => (
            <div key={community.id} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-2xl">{community.icon}</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground truncate">{community.name}</h4>
                <p className="text-xs text-muted-foreground truncate">{community.description}</p>
              </div>
              <Button variant="outline" size="sm">Join</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
