import { mockCommunities } from '@/data/mockData';
import type { Community } from '../types';

export function getCommunities(): Community[] {
  return mockCommunities;
}
