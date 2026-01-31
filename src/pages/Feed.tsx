import { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { FeedList, ComposeModal } from '@/features/feed/components';
import { Button } from '@/components/ui/button';
import { Feather } from 'lucide-react';

export default function Feed() {
  const { activeTopic } = useApp();
  const [showCompose, setShowCompose] = useState(false);

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

      {/* Floating Compose Button */}
      <Button
        onClick={() => setShowCompose(true)}
        variant="glow"
        size="icon-lg"
        className="fixed bottom-20 lg:bottom-6 right-6 rounded-full shadow-elevated z-30"
      >
        <Feather className="w-6 h-6" />
      </Button>

      {/* Compose Modal */}
      <ComposeModal isOpen={showCompose} onClose={() => setShowCompose(false)} />
    </>
  );
}
