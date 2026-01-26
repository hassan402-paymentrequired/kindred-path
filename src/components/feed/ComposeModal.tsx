import { useState, useRef } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { topics } from '@/data/mockData';
import { X, Send, ChevronDown, Image, Video, Smile, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MediaFile {
  id: string;
  file: File;
  preview: string;
  type: 'image' | 'video';
}

interface ComposeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ComposeModal({ isOpen, onClose }: ComposeModalProps) {
  const { user, addPost } = useApp();
  const [content, setContent] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('motivation');
  const [showTopics, setShowTopics] = useState(false);
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen || !user) return null;

  const handleSubmit = () => {
    if (!content.trim() && mediaFiles.length === 0) return;
    
    // Get media URLs for the post
    const mediaUrls = mediaFiles.map(m => m.preview);
    addPost(content.trim(), selectedTopic, mediaUrls);
    
    // Cleanup
    setContent('');
    setMediaFiles([]);
    onClose();
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const preview = URL.createObjectURL(file);
        setMediaFiles(prev => [...prev, {
          id: Math.random().toString(36).substr(2, 9),
          file,
          preview,
          type: 'image'
        }]);
      }
    });
    e.target.value = '';
  };

  const handleVideoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      if (file.type.startsWith('video/')) {
        const preview = URL.createObjectURL(file);
        setMediaFiles(prev => [...prev, {
          id: Math.random().toString(36).substr(2, 9),
          file,
          preview,
          type: 'video'
        }]);
      }
    });
    e.target.value = '';
  };

  const removeMedia = (id: string) => {
    setMediaFiles(prev => {
      const toRemove = prev.find(m => m.id === id);
      if (toRemove) {
        URL.revokeObjectURL(toRemove.preview);
      }
      return prev.filter(m => m.id !== id);
    });
  };

  const selectedTopicData = topics.find(t => t.id === selectedTopic);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Hidden file inputs */}
      <input 
        ref={imageInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleImageSelect}
      />
      <input 
        ref={videoInputRef}
        type="file"
        accept="video/*"
        className="hidden"
        onChange={handleVideoSelect}
      />

      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full sm:max-w-lg bg-card border border-border rounded-t-3xl sm:rounded-3xl shadow-elevated animate-slide-up max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-card z-10">
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
          <Button 
            variant="glow" 
            size="sm"
            onClick={handleSubmit}
            disabled={!content.trim() && mediaFiles.length === 0}
          >
            <Send className="w-4 h-4 mr-2" />
            Post
          </Button>
        </div>

        {/* Compose Area */}
        <div className="p-4">
          <div className="flex gap-3">
            <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center text-2xl shrink-0">
              {user.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
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
                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground resize-none focus:outline-none text-lg min-h-[100px]"
                autoFocus
              />

              {/* Media Preview */}
              {mediaFiles.length > 0 && (
                <div className={cn(
                  "grid gap-2 mt-3",
                  mediaFiles.length === 1 ? "grid-cols-1" : "grid-cols-2"
                )}>
                  {mediaFiles.map((media) => (
                    <div key={media.id} className="relative group rounded-xl overflow-hidden bg-muted">
                      {media.type === 'image' ? (
                        <img 
                          src={media.preview} 
                          alt="Upload preview" 
                          className="w-full h-48 object-cover"
                        />
                      ) : (
                        <video 
                          src={media.preview} 
                          className="w-full h-48 object-cover"
                          controls
                        />
                      )}
                      <button
                        onClick={() => removeMedia(media.id)}
                        className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Media Actions & Character Count */}
        <div className="px-4 pb-4 flex items-center justify-between border-t border-border pt-3">
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon-sm"
              onClick={() => imageInputRef.current?.click()}
              className="text-primary hover:bg-primary/10"
            >
              <Image className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon-sm"
              onClick={() => videoInputRef.current?.click()}
              className="text-secondary hover:bg-secondary/10"
            >
              <Video className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon-sm"
              className="text-accent hover:bg-accent/10"
            >
              <Smile className="w-5 h-5" />
            </Button>
          </div>
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
