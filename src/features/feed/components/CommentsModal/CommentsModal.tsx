import { useState } from 'react';
import type { Post, Comment } from '@/features/feed/types';
import { mockComments } from '@/data/mockData';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { X, Heart, Send, MessageCircle } from 'lucide-react';
import { cn } from '@/utils/helpers';

interface CommentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: Post;
}

export function CommentsModal({ isOpen, onClose, post }: CommentsModalProps) {
  const { user } = useApp();
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>(mockComments.filter(c => c.postId === post.id));
  const [likedComments, setLikedComments] = useState<Set<number>>(new Set());

  if (!isOpen || !user) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const comment: Comment = {
      id: Date.now(),
      postId: post.id,
      userId: user.id,
      username: user.username,
      avatar: user.avatar,
      content: newComment.trim(),
      time: 'Just now',
      likes: 0,
    };
    setComments(prev => [comment, ...prev]);
    setNewComment('');
  };

  const toggleLike = (commentId: number) => {
    setLikedComments(prev => {
      const next = new Set(prev);
      if (next.has(commentId)) next.delete(commentId);
      else next.add(commentId);
      return next;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-card border-t border-x border-border rounded-t-3xl shadow-elevated animate-slide-up max-h-[85vh] flex flex-col">
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="flex items-center justify-between px-4 pb-3 border-b border-border">
          <h3 className="font-semibold text-lg">Comments</h3>
          <Button variant="ghost" size="icon-sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        <div className="px-4 py-3 border-b border-border bg-muted/30">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-lg">{post.avatar}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-sm">{post.username}</span>
                <span className="text-muted-foreground text-xs">{post.time}</span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">{post.content}</p>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {comments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <MessageCircle className="w-12 h-12 text-muted-foreground/30 mb-3" />
              <p className="text-muted-foreground text-sm">Be the first to show support 💚</p>
            </div>
          ) : (
            comments.map((comment) => {
              const isLiked = likedComments.has(comment.id);
              return (
                <div key={comment.id} className="flex gap-3 animate-slide-up">
                  <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-xl flex-shrink-0">{comment.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm">{comment.username}</span>
                      <span className="text-muted-foreground text-xs">{comment.time}</span>
                    </div>
                    <p className="text-foreground text-sm mb-2">{comment.content}</p>
                    <div className="flex items-center gap-4">
                      <button onClick={() => toggleLike(comment.id)} className={cn("flex items-center gap-1 text-xs transition-colors", isLiked ? "text-love" : "text-muted-foreground hover:text-love")}>
                        <Heart className={cn("w-4 h-4", isLiked && "fill-current animate-heart-beat")} />
                        <span>{comment.likes + (isLiked ? 1 : 0)}</span>
                      </button>
                      <button className="text-xs text-muted-foreground hover:text-primary transition-colors">Reply</button>
                      <button className="text-xs text-muted-foreground hover:text-success transition-colors">Support 💚</button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-background/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-xl flex-shrink-0">{user.avatar}</div>
            <div className="flex-1 relative">
              <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Add a supportive comment..." className="w-full bg-muted border border-border rounded-full py-2.5 px-4 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
              <Button type="submit" variant="ghost" size="icon-sm" disabled={!newComment.trim()} className="absolute right-1 top-1/2 -translate-y-1/2 text-primary disabled:text-muted-foreground">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
