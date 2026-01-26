import { useState } from 'react';
import { Post } from '@/data/mockData';
import { useApp } from '@/contexts/AppContext';
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CommentsModal } from './CommentsModal';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const { likePost, supportPost } = useApp();
  const [isLikeAnimating, setIsLikeAnimating] = useState(false);
  const [isSupportAnimating, setIsSupportAnimating] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLikeAnimating(true);
    likePost(post.id);
    setTimeout(() => setIsLikeAnimating(false), 600);
  };

  const handleSupport = () => {
    setIsSupportAnimating(true);
    supportPost(post.id);
    setTimeout(() => setIsSupportAnimating(false), 600);
  };

  return (
    <>
      <article className="p-4 border-b border-border hover:bg-card-hover/50 transition-colors duration-200 animate-slide-up">
        <div className="flex gap-3">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-2xl">
              {post.avatar}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground truncate">
                  {post.username}
                </span>
                <span className="text-muted-foreground text-sm">·</span>
                <span className="text-muted-foreground text-sm">{post.time}</span>
              </div>
              <Button variant="ghost" size="icon-sm" className="text-muted-foreground hover:text-foreground">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>

            {/* Topic Tag */}
            <div className="mb-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                #{post.topic}
              </span>
            </div>

            {/* Post Content */}
            <p className="text-foreground mb-3 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </p>

            {/* Actions */}
            <div className="flex items-center justify-between max-w-md">
              {/* Comments */}
              <button 
                onClick={() => setShowComments(true)}
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-sm">{post.comments}</span>
              </button>

              {/* Support */}
              <button 
                onClick={handleSupport}
                className={cn(
                  "group flex items-center gap-2 transition-colors",
                  post.isSupported ? "text-success" : "text-muted-foreground hover:text-success"
                )}
              >
                <div className={cn(
                  "p-2 rounded-full transition-colors",
                  post.isSupported ? "bg-success/10" : "group-hover:bg-success/10",
                  isSupportAnimating && "animate-pop"
                )}>
                  <Repeat2 className="w-5 h-5" />
                </div>
                <span className="text-sm">{post.supports}</span>
              </button>

              {/* Like */}
              <button 
                onClick={handleLike}
                className={cn(
                  "group flex items-center gap-2 transition-colors",
                  post.isLiked ? "text-love" : "text-muted-foreground hover:text-love"
                )}
              >
                <div className={cn(
                  "p-2 rounded-full transition-colors",
                  post.isLiked ? "bg-love/10" : "group-hover:bg-love/10",
                  isLikeAnimating && "animate-heart-beat"
                )}>
                  <Heart className={cn("w-5 h-5", post.isLiked && "fill-current")} />
                </div>
                <span className="text-sm">{post.likes}</span>
              </button>

              {/* Share */}
              <button className="group p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Share className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Comments Modal */}
      <CommentsModal 
        isOpen={showComments} 
        onClose={() => setShowComments(false)} 
        post={post}
      />
    </>
  );
}
