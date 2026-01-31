export interface Post {
  id: number;
  userId: number;
  username: string;
  avatar: string;
  content: string;
  likes: number;
  comments: number;
  supports: number;
  topic: string;
  time: string;
  isLiked?: boolean;
  isSupported?: boolean;
  media?: string[];
}

export interface Comment {
  id: number;
  postId: number;
  userId: number;
  username: string;
  avatar: string;
  content: string;
  time: string;
  likes: number;
  parentId?: number;
}
