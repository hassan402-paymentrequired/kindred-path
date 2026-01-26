import { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { topics } from '@/data/mockData';
import { X, Send, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComposeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ComposeModal({ isOpen, onClose }: ComposeModalProps) {
  const { user, addPost } = useApp();
  const [content, setContent] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('motivation');
  const [showTopics, setShowTopics] = useState(false);

  if (!isOpen || !user) return null;

  const handleSubmit = () => {
    if (!content.trim()) return;
    addPost(content.trim(), selectedTopic);
    setContent('');
    onClose();
  };

  const selectedTopicData = topics.find(t => t.id === selectedTopic);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full sm:max-w-lg bg-card border border-border rounded-t-3xl sm:rounded-3xl shadow-elevated animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
          <Button 
            variant="glow" 
            size="sm"
            onClick={handleSubmit}
            disabled={!content.trim()}
          >
            <Send className="w-4 h-4 mr-2" />
            Post
          </Button>
        </div>

        {/* Compose Area */}
        <div className="p-4">
          <div className="flex gap-3">
            <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center text-2xl">
              {user.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-foreground">{user.username}</span>
                
                {/* Topic Selector */}
                <div className="relative">
                  <button
                    onClick={() => setShowTopics(!showTopics)}
                    className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <span>{selectedTopicData?.icon}</span>
                    <span>#{selectedTopic}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>

                  {showTopics && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-popover border border-border rounded-xl shadow-elevated z-10 py-2 animate-slide-down">
                      {topics.map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => {
                            setSelectedTopic(topic.id);
                            setShowTopics(false);
                          }}
                          className={cn(
                            "w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-muted transition-colors",
                            selectedTopic === topic.id && "bg-primary/10 text-primary"
                          )}
                        >
                          <span>{topic.icon}</span>
                          <span className="text-sm">{topic.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's on your mind? Share your thoughts, struggles, or wins..."
                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground resize-none focus:outline-none text-lg min-h-[120px]"
                autoFocus
              />
            </div>
          </div>
        </div>

        {/* Character Count */}
        <div className="px-4 pb-4 flex justify-end">
          <span className={cn(
            "text-sm",
            content.length > 280 ? "text-destructive" : "text-muted-foreground"
          )}>
            {content.length}/280
          </span>
        </div>
      </div>
    </div>
  );
}
