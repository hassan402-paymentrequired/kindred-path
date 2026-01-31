import { mockChallenges } from '@/data/mockData';
import type { Challenge } from '../types';

export function getChallenges(): Challenge[] {
  return mockChallenges;
}
