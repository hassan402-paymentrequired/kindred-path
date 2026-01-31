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
