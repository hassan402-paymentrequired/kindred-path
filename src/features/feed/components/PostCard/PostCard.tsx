import { useState } from 'react';
import type { Post } from '@/features/feed/types';
import { useApp } from '@/contexts/AppContext';
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal, Play } from 'lucide-react';
import { cn } from '@/utils/helpers';
import { Button } from '@/components/ui/button';
import { CommentsModal } from '../CommentsModal';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const { likePost, supportPost } = useApp();
  const [isLikeAnimating, setIsLikeAnimating] = useState(false);
  const [isSupportAnimating, setIsSupportAnimating] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

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

  const openMedia = (index: number) => {
    setActiveMediaIndex(index);
    setShowMediaModal(true);
  };

  return (
    <>
      <article className="p-4 border-b border-border hover:bg-card-hover/50 transition-colors duration-200 animate-slide-up">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-2xl">
              {post.avatar}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground truncate">{post.username}</span>
                <span className="text-muted-foreground text-sm">·</span>
                <span className="text-muted-foreground text-sm">{post.time}</span>
              </div>
              <Button variant="ghost" size="icon-sm" className="text-muted-foreground hover:text-foreground">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
            <div className="mb-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                #{post.topic}
              </span>
            </div>
            <p className="text-foreground mb-3 leading-relaxed whitespace-pre-wrap">{post.content}</p>
            {post.media && post.media.length > 0 && (
              <div className={cn("grid gap-2 mb-3 rounded-2xl overflow-hidden", post.media.length === 1 ? "grid-cols-1" : "grid-cols-2")}>
                {post.media.map((url, index) => {
                  const isVideo = url.includes('.mp4') || url.includes('.webm') || url.includes('.mov');
                  return (
                    <div key={index} className="relative cursor-pointer group" onClick={() => openMedia(index)}>
                      {isVideo ? (
                        <div className="relative">
                          <video src={url} className="w-full h-48 object-cover rounded-xl" />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl group-hover:bg-black/40 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                              <Play className="w-6 h-6 text-foreground fill-current ml-1" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img src={url} alt="Post media" className="w-full h-48 object-cover rounded-xl group-hover:opacity-90 transition-opacity" />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
            <div className="flex items-center justify-between max-w-md">
              <button onClick={() => setShowComments(true)} className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <div className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-sm">{post.comments}</span>
              </button>
              <button onClick={handleSupport} className={cn("group flex items-center gap-2 transition-colors", post.isSupported ? "text-success" : "text-muted-foreground hover:text-success")}>
                <div className={cn("p-2 rounded-full transition-colors", post.isSupported ? "bg-success/10" : "group-hover:bg-success/10", isSupportAnimating && "animate-pop")}>
                  <Repeat2 className="w-5 h-5" />
                </div>
                <span className="text-sm">{post.supports}</span>
              </button>
              <button onClick={handleLike} className={cn("group flex items-center gap-2 transition-colors", post.isLiked ? "text-love" : "text-muted-foreground hover:text-love")}>
                <div className={cn("p-2 rounded-full transition-colors", post.isLiked ? "bg-love/10" : "group-hover:bg-love/10", isLikeAnimating && "animate-heart-beat")}>
                  <Heart className={cn("w-5 h-5", post.isLiked && "fill-current")} />
                </div>
                <span className="text-sm">{post.likes}</span>
              </button>
              <button className="group p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Share className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </article>
      <CommentsModal isOpen={showComments} onClose={() => setShowComments(false)} post={post} />
      {showMediaModal && post.media && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setShowMediaModal(false)}>
          <div className="max-w-4xl max-h-[90vh] w-full">
            {post.media[activeMediaIndex].includes('.mp4') || post.media[activeMediaIndex].includes('.webm') || post.media[activeMediaIndex].includes('.mov') ? (
              <video src={post.media[activeMediaIndex]} className="w-full h-auto max-h-[90vh] object-contain rounded-xl" controls autoPlay onClick={(e) => e.stopPropagation()} />
            ) : (
              <img src={post.media[activeMediaIndex]} alt="Full size media" className="w-full h-auto max-h-[90vh] object-contain rounded-xl" onClick={(e) => e.stopPropagation()} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
