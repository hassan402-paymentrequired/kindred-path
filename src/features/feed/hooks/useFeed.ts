import { useApp } from '@/contexts/AppContext';

/**
 * Feed-related hook - wraps app context for posts and feed actions.
 */
export function useFeed() {
  const { posts, likePost, supportPost, addPost, activeTopic } = useApp();
  return { posts, likePost, supportPost, addPost, activeTopic };
}
