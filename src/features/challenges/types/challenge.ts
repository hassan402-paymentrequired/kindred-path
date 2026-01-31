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
