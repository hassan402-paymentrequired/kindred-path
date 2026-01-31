/**
 * Feed service - uses mock data for prototype.
 */

import {
  mockPosts,
  mockComments,
  type Post,
  type Comment,
} from '@/data/mockData';

export function getPosts(topic?: string | null): Post[] {
  if (topic) {
    return mockPosts.filter((p) => p.topic === topic);
  }
  return mockPosts;
}

export function getCommentsByPostId(postId: number): Comment[] {
  return mockComments.filter((c) => c.postId === postId);
}
