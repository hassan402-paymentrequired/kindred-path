export interface User {
  id: number;
  username: string;
  avatar: string;
  joinedTopics: string[];
  currentStreak: number;
  longestStreak: number;
  supportGiven: number;
  joinedDate: string;
}

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

export interface Community {
  id: number;
  name: string;
  slug: string;
  description: string;
  members: number;
  posts: number;
  icon: string;
  color: string;
}

export interface Challenge {
  id: number;
  title: string;
  description: string;
  currentStreak: number;
  targetDays: number;
  status: 'active' | 'completed' | 'paused';
  topic: string;
  participants: number;
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

export const topics = [
  { id: 'addiction', name: 'Addiction', icon: '🌊', color: 'primary' },
  { id: 'loneliness', name: 'Loneliness', icon: '🌙', color: 'calm' },
  { id: 'stress', name: 'Stress', icon: '⚡', color: 'warning' },
  { id: 'betting', name: 'Betting', icon: '🎰', color: 'streak' },
  { id: 'masturbation', name: 'PMO/NoFap', icon: '💪', color: 'primary' },
  { id: 'depression', name: 'Depression', icon: '🌧️', color: 'calm' },
  { id: 'anxiety', name: 'Anxiety', icon: '🦋', color: 'secondary' },
  { id: 'alcohol', name: 'Alcohol', icon: '🍷', color: 'love' },
  { id: 'motivation', name: 'Motivation', icon: '🔥', color: 'accent' },
  { id: 'wins', name: 'Wins & Milestones', icon: '🏆', color: 'success' },
];

export const goals = [
  { id: 'support', name: 'Find support & understanding', icon: '🤝' },
  { id: 'recovery', name: 'Recovery & healing', icon: '🌱' },
  { id: 'community', name: 'Connect with others like me', icon: '💫' },
  { id: 'motivation', name: 'Daily motivation & accountability', icon: '🔥' },
  { id: 'share', name: 'Share my story', icon: '📝' },
];

export const avatarStyles = [
  '🦊', '🐼', '🦁', '🐯', '🐸', '🦉', '🐙', '🦋', '🌸', '🌟', 
  '🌙', '☀️', '🌈', '🍀', '🌺', '🐢', '🦄', '🐬', '🦩', '🐝'
];

export const usernameAdjectives = [
  'Quiet', 'Brave', 'Gentle', 'Rising', 'Calm', 'Wild', 'Free', 'Bold',
  'Bright', 'Warm', 'Kind', 'Strong', 'Hope', 'Dream', 'Light', 'Soft'
];

export const usernameNouns = [
  'Phoenix', 'River', 'Mountain', 'Forest', 'Ocean', 'Sky', 'Star', 'Moon',
  'Breeze', 'Dawn', 'Spark', 'Wave', 'Heart', 'Spirit', 'Soul', 'Seeker'
];

export const mockUser: User = {
  id: 1,
  username: 'QuietPhoenix88',
  avatar: '🦊',
  joinedTopics: ['betting', 'masturbation', 'motivation'],
  currentStreak: 12,
  longestStreak: 45,
  supportGiven: 89,
  joinedDate: '2024-01-15',
};

export const mockPosts: Post[] = [
  {
    id: 1,
    userId: 2,
    username: 'HopeSeeker12',
    avatar: '🌟',
    content: "Relapsed today but I'm not giving up. Every fall is a lesson, not a failure. Tomorrow is a new day. 💪",
    likes: 24,
    comments: 8,
    supports: 15,
    topic: 'masturbation',
    time: '2h ago',
    isLiked: false,
    isSupported: false,
  },
  {
    id: 2,
    userId: 3,
    username: 'BraveOcean42',
    avatar: '🐬',
    content: "Day 30! 🎉 One month clean from gambling. Never thought I'd make it this far. Thank you all for the daily encouragement. This community saved me.",
    likes: 156,
    comments: 34,
    supports: 89,
    topic: 'betting',
    time: '4h ago',
    isLiked: true,
    isSupported: true,
    media: ['https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=600&h=400&fit=crop'],
  },
  {
    id: 3,
    userId: 4,
    username: 'GentleRiver',
    avatar: '🌊',
    content: "Feeling overwhelmed with anxiety today. The thoughts won't stop. Anyone else struggle with racing thoughts at night?",
    likes: 42,
    comments: 19,
    supports: 31,
    topic: 'anxiety',
    time: '5h ago',
    isLiked: false,
    isSupported: false,
  },
  {
    id: 4,
    userId: 5,
    username: 'RisingStar77',
    avatar: '⭐',
    content: "Small win: I walked past the liquor store today without going in. It's the little victories that count. 🌱",
    likes: 89,
    comments: 12,
    supports: 45,
    topic: 'alcohol',
    time: '6h ago',
    isLiked: false,
    isSupported: false,
  },
  {
    id: 5,
    userId: 6,
    username: 'CalmForest',
    avatar: '🌲',
    content: "Remember: You're not alone in this. Whatever you're going through, someone here understands. Reach out. We've got you. 💚",
    likes: 234,
    comments: 45,
    supports: 112,
    topic: 'motivation',
    time: '8h ago',
    isLiked: true,
    isSupported: false,
    media: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'],
  },
];

export const mockCommunities: Community[] = [
  {
    id: 1,
    name: 'Betting Recovery',
    slug: 'betting',
    description: 'A safe space for those overcoming gambling addiction',
    members: 1240,
    posts: 3456,
    icon: '🎰',
    color: 'streak',
  },
  {
    id: 2,
    name: 'NoFap / PMO Recovery',
    slug: 'masturbation',
    description: 'Breaking free from pornography and masturbation addiction',
    members: 2890,
    posts: 8912,
    icon: '💪',
    color: 'primary',
  },
  {
    id: 3,
    name: 'Daily Motivation',
    slug: 'motivation',
    description: 'Daily doses of encouragement and positivity',
    members: 980,
    posts: 4521,
    icon: '🔥',
    color: 'accent',
  },
  {
    id: 4,
    name: 'Anxiety Support',
    slug: 'anxiety',
    description: 'Understanding and managing anxiety together',
    members: 1560,
    posts: 5678,
    icon: '🦋',
    color: 'secondary',
  },
  {
    id: 5,
    name: 'Alcohol Recovery',
    slug: 'alcohol',
    description: 'Support for those on the path to sobriety',
    members: 890,
    posts: 2345,
    icon: '🍷',
    color: 'love',
  },
  {
    id: 6,
    name: 'Wins & Milestones',
    slug: 'wins',
    description: 'Celebrate your victories, big and small',
    members: 2100,
    posts: 6789,
    icon: '🏆',
    color: 'success',
  },
];

export const mockChallenges: Challenge[] = [
  {
    id: 1,
    title: '30 Days Clean',
    description: 'Commit to 30 days without your addiction',
    currentStreak: 12,
    targetDays: 30,
    status: 'active',
    topic: 'general',
    participants: 456,
  },
  {
    id: 2,
    title: 'Morning Gratitude',
    description: 'Start each day with 3 things you\'re grateful for',
    currentStreak: 5,
    targetDays: 21,
    status: 'active',
    topic: 'motivation',
    participants: 234,
  },
  {
    id: 3,
    title: 'No Gambling November',
    description: 'Stay gambling-free for the entire month',
    currentStreak: 18,
    targetDays: 30,
    status: 'active',
    topic: 'betting',
    participants: 189,
  },
];

export const mockComments: Comment[] = [
  {
    id: 1,
    postId: 1,
    userId: 3,
    username: 'BraveOcean42',
    avatar: '🐬',
    content: "You've got this! Remember, progress isn't linear. Every day you try is a win. 💪",
    time: '1h ago',
    likes: 8,
  },
  {
    id: 2,
    postId: 1,
    userId: 5,
    username: 'RisingStar77',
    avatar: '⭐',
    content: "I've been there. The fact that you're here, being honest, shows incredible strength. We're rooting for you!",
    time: '1h ago',
    likes: 12,
  },
  {
    id: 3,
    postId: 2,
    userId: 4,
    username: 'GentleRiver',
    avatar: '🌊',
    content: "30 days is HUGE! 🎉 You're an inspiration to all of us!",
    time: '3h ago',
    likes: 24,
  },
  {
    id: 4,
    postId: 2,
    userId: 6,
    username: 'CalmForest',
    avatar: '🌲',
    content: "This gives me so much hope. If you can do it, so can I. Day 5 here!",
    time: '3h ago',
    likes: 18,
  },
  {
    id: 5,
    postId: 3,
    userId: 2,
    username: 'HopeSeeker12',
    avatar: '🌟',
    content: "You're not alone in this. Those racing thoughts are so hard. Have you tried the 5-4-3-2-1 grounding technique?",
    time: '4h ago',
    likes: 9,
  },
];

export function generateUsername(): string {
  const adj = usernameAdjectives[Math.floor(Math.random() * usernameAdjectives.length)];
  const noun = usernameNouns[Math.floor(Math.random() * usernameNouns.length)];
  const num = Math.floor(Math.random() * 99) + 1;
  return `${adj}${noun}${num}`;
}

export function generateAvatar(): string {
  return avatarStyles[Math.floor(Math.random() * avatarStyles.length)];
}
