import { useApp } from '@/contexts/AppContext';
import { PostCard } from '../PostCard';

interface FeedListProps {
  topic?: string | null;
}

export function FeedList({ topic }: FeedListProps) {
  const { posts } = useApp();

  const filteredPosts = topic 
    ? posts.filter(post => post.topic === topic)
    : posts;

  if (filteredPosts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-6 text-center animate-slide-up">
        <div className="text-6xl mb-4">🌱</div>
        <h3 className="text-xl font-semibold mb-2">Be the first to share today</h3>
        <p className="text-muted-foreground max-w-sm">
          Your story could be the encouragement someone needs right now.
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-border">
      {filteredPosts.map((post, index) => (
        <div 
          key={post.id}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
