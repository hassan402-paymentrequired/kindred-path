import type { User } from '@/features/auth/types';
import type { Post, Comment } from '@/features/feed/types';
import type { Community } from '@/features/communities/types';
import type { Challenge } from '@/features/challenges/types';

export type { User, Post, Comment, Community, Challenge };

/** Leaderboard entry - anonymous user stats for motivation */
export interface LeaderboardEntry {
  id: number;
  username: string;
  avatar: string;
  currentStreak: number;
  longestStreak: number;
  supportGiven: number;
}

/** Challenge participant - user participating in a specific challenge */
export interface ChallengeParticipant {
  id: number;
  userId: number;
  challengeId: number;
  username: string;
  avatar: string;
  currentStreak: number;
  longestStreak: number;
  lastCheckIn: string;
  joinedDate: string;
  status: 'active' | 'completed' | 'paused';
  checkIns: number; // total check-ins
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

/** All available challenges for browsing */
export const allChallenges: Challenge[] = [
  {
    id: 1,
    title: '30 Days Clean',
    description: 'Commit to 30 days without your addiction',
    currentStreak: 0,
    targetDays: 30,
    status: 'paused',
    topic: 'general',
    participants: 456,
  },
  {
    id: 2,
    title: 'Morning Gratitude',
    description: 'Start each day with 3 things you\'re grateful for',
    currentStreak: 0,
    targetDays: 21,
    status: 'paused',
    topic: 'motivation',
    participants: 234,
  },
  {
    id: 3,
    title: 'No Gambling November',
    description: 'Stay gambling-free for the entire month',
    currentStreak: 0,
    targetDays: 30,
    status: 'paused',
    topic: 'betting',
    participants: 189,
  },
  {
    id: 4,
    title: 'Alcohol-Free Weekend',
    description: 'Skip drinking every weekend for a month',
    currentStreak: 0,
    targetDays: 8,
    status: 'paused',
    topic: 'alcohol',
    participants: 312,
  },
  {
    id: 5,
    title: '90 Day Reboot',
    description: 'Complete NoFap challenge for 90 consecutive days',
    currentStreak: 0,
    targetDays: 90,
    status: 'paused',
    topic: 'masturbation',
    participants: 567,
  },
  {
    id: 6,
    title: 'Daily Exercise',
    description: 'Move your body for at least 20 minutes every day',
    currentStreak: 0,
    targetDays: 30,
    status: 'paused',
    topic: 'motivation',
    participants: 423,
  },
  {
    id: 7,
    title: 'Anxiety Check-In',
    description: 'Practice grounding techniques daily for anxiety relief',
    currentStreak: 0,
    targetDays: 14,
    status: 'paused',
    topic: 'anxiety',
    participants: 298,
  },
  {
    id: 8,
    title: 'Social Connection',
    description: 'Reach out to someone in the community every day',
    currentStreak: 0,
    targetDays: 21,
    status: 'paused',
    topic: 'loneliness',
    participants: 176,
  },
  {
    id: 9,
    title: 'Stress-Free Sleep',
    description: 'Screen-free hour before bed every night',
    currentStreak: 0,
    targetDays: 14,
    status: 'paused',
    topic: 'stress',
    participants: 389,
  },
  {
    id: 10,
    title: '7 Day Streak Builder',
    description: 'Perfect for beginners - build consistency in just a week',
    currentStreak: 0,
    targetDays: 7,
    status: 'paused',
    topic: 'general',
    participants: 789,
  },
  {
    id: 11,
    title: 'Mood Tracker',
    description: 'Log your mood and emotions daily to identify patterns',
    currentStreak: 0,
    targetDays: 30,
    status: 'paused',
    topic: 'depression',
    participants: 412,
  },
  {
    id: 12,
    title: 'Bet-Free Life',
    description: 'Delete all gambling apps and stay clean for 60 days',
    currentStreak: 0,
    targetDays: 60,
    status: 'paused',
    topic: 'betting',
    participants: 267,
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

/** Leaderboard entry - anonymous user stats for motivation */
export interface LeaderboardEntry {
  id: number;
  username: string;
  avatar: string;
  currentStreak: number;
  longestStreak: number;
  supportGiven: number;
}

/** Challenge participant - user participating in a specific challenge */
export interface ChallengeParticipant {
  id: number;
  userId: number;
  challengeId: number;
  username: string;
  avatar: string;
  currentStreak: number;
  longestStreak: number;
  lastCheckIn: string;
  joinedDate: string;
  status: 'active' | 'completed' | 'paused';
  checkIns: number; // total check-ins
}

/** Mock leaderboard data - anonymous peers to motivate users */
export const mockLeaderboard: LeaderboardEntry[] = [
  { id: 101, username: 'BravePhoenix42', avatar: '🔥', currentStreak: 89, longestStreak: 120, supportGiven: 234 },
  { id: 102, username: 'CalmOcean77', avatar: '🌊', currentStreak: 67, longestStreak: 90, supportGiven: 189 },
  { id: 103, username: 'HopeSeeker12', avatar: '🌟', currentStreak: 45, longestStreak: 67, supportGiven: 312 },
  { id: 104, username: 'GentleRiver', avatar: '🌙', currentStreak: 38, longestStreak: 52, supportGiven: 156 },
  { id: 105, username: 'RisingStar99', avatar: '⭐', currentStreak: 32, longestStreak: 45, supportGiven: 98 },
  { id: 106, username: 'WildForest', avatar: '🌲', currentStreak: 28, longestStreak: 41, supportGiven: 201 },
  { id: 107, username: 'FreeSpirit23', avatar: '🦋', currentStreak: 24, longestStreak: 38, supportGiven: 87 },
  { id: 108, username: 'BoldMountain', avatar: '⛰️', currentStreak: 21, longestStreak: 30, supportGiven: 134 },
  { id: 109, username: 'BrightDawn', avatar: '☀️', currentStreak: 18, longestStreak: 25, supportGiven: 76 },
  { id: 110, username: 'KindWave', avatar: '🌈', currentStreak: 15, longestStreak: 22, supportGiven: 165 },
  { id: 111, username: 'StrongHeart', avatar: '💪', currentStreak: 12, longestStreak: 18, supportGiven: 92 },
  { id: 112, username: 'DreamSeeker', avatar: '✨', currentStreak: 9, longestStreak: 14, supportGiven: 43 },
  { id: 113, username: 'LightSoul', avatar: '🌸', currentStreak: 7, longestStreak: 12, supportGiven: 58 },
  { id: 114, username: 'SoftBreeze', avatar: '🍀', currentStreak: 5, longestStreak: 9, supportGiven: 31 },
  { id: 115, username: 'WarmSpirit', avatar: '🦊', currentStreak: 3, longestStreak: 7, supportGiven: 19 },
];

/** Mock challenge participants - users in specific challenges with their progress */
export const mockChallengeParticipants: ChallengeParticipant[] = [
  // Challenge 1: 30 Days Clean
  { id: 1, userId: 101, challengeId: 1, username: 'BravePhoenix42', avatar: '🔥', currentStreak: 28, longestStreak: 28, lastCheckIn: '2h ago', joinedDate: '28 days ago', status: 'active', checkIns: 28 },
  { id: 2, userId: 102, challengeId: 1, username: 'CalmOcean77', avatar: '🌊', currentStreak: 24, longestStreak: 24, lastCheckIn: '5h ago', joinedDate: '24 days ago', status: 'active', checkIns: 24 },
  { id: 3, userId: 103, challengeId: 1, username: 'HopeSeeker12', avatar: '🌟', currentStreak: 18, longestStreak: 21, lastCheckIn: '1d ago', joinedDate: '45 days ago', status: 'active', checkIns: 39 },
  { id: 4, userId: 104, challengeId: 1, username: 'GentleRiver', avatar: '🌙', currentStreak: 30, longestStreak: 30, lastCheckIn: '3h ago', joinedDate: '30 days ago', status: 'completed', checkIns: 30 },
  { id: 5, userId: 105, challengeId: 1, username: 'RisingStar99', avatar: '⭐', currentStreak: 15, longestStreak: 15, lastCheckIn: '8h ago', joinedDate: '15 days ago', status: 'active', checkIns: 15 },
  { id: 6, userId: 106, challengeId: 1, username: 'WildForest', avatar: '🌲', currentStreak: 12, longestStreak: 17, lastCheckIn: '4h ago', joinedDate: '60 days ago', status: 'active', checkIns: 46 },
  { id: 7, userId: 107, challengeId: 1, username: 'FreeSpirit23', avatar: '🦋', currentStreak: 9, longestStreak: 12, lastCheckIn: '12h ago', joinedDate: '30 days ago', status: 'active', checkIns: 21 },
  { id: 8, userId: 108, challengeId: 1, username: 'BoldMountain', avatar: '⛰️', currentStreak: 22, longestStreak: 22, lastCheckIn: '1h ago', joinedDate: '22 days ago', status: 'active', checkIns: 22 },
  
  // Challenge 2: Morning Gratitude
  { id: 9, userId: 101, challengeId: 2, username: 'BravePhoenix42', avatar: '🔥', currentStreak: 14, longestStreak: 14, lastCheckIn: '7h ago', joinedDate: '14 days ago', status: 'active', checkIns: 14 },
  { id: 10, userId: 109, challengeId: 2, username: 'BrightDawn', avatar: '☀️', currentStreak: 21, longestStreak: 21, lastCheckIn: '2h ago', joinedDate: '21 days ago', status: 'completed', checkIns: 21 },
  { id: 11, userId: 110, challengeId: 2, username: 'KindWave', avatar: '🌈', currentStreak: 19, longestStreak: 19, lastCheckIn: '4h ago', joinedDate: '19 days ago', status: 'active', checkIns: 19 },
  { id: 12, userId: 111, challengeId: 2, username: 'StrongHeart', avatar: '💪', currentStreak: 7, longestStreak: 10, lastCheckIn: '1d ago', joinedDate: '25 days ago', status: 'active', checkIns: 17 },
  
  // Challenge 3: No Gambling November
  { id: 13, userId: 102, challengeId: 3, username: 'CalmOcean77', avatar: '🌊', currentStreak: 30, longestStreak: 30, lastCheckIn: '6h ago', joinedDate: '30 days ago', status: 'completed', checkIns: 30 },
  { id: 14, userId: 112, challengeId: 3, username: 'DreamSeeker', avatar: '✨', currentStreak: 25, longestStreak: 25, lastCheckIn: '3h ago', joinedDate: '25 days ago', status: 'active', checkIns: 25 },
  { id: 15, userId: 113, challengeId: 3, username: 'LightSoul', avatar: '🌸', currentStreak: 18, longestStreak: 20, lastCheckIn: '9h ago', joinedDate: '45 days ago', status: 'active', checkIns: 38 },
  
  // Challenge 10: 7 Day Streak Builder
  { id: 16, userId: 114, challengeId: 10, username: 'SoftBreeze', avatar: '🍀', currentStreak: 5, longestStreak: 5, lastCheckIn: '2h ago', joinedDate: '5 days ago', status: 'active', checkIns: 5 },
  { id: 17, userId: 115, challengeId: 10, username: 'WarmSpirit', avatar: '🦊', currentStreak: 7, longestStreak: 7, lastCheckIn: '1h ago', joinedDate: '7 days ago', status: 'completed', checkIns: 7 },
  { id: 18, userId: 104, challengeId: 10, username: 'GentleRiver', avatar: '🌙', currentStreak: 6, longestStreak: 6, lastCheckIn: '5h ago', joinedDate: '6 days ago', status: 'active', checkIns: 6 },
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
