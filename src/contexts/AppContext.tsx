import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, Post, Challenge, mockUser, mockPosts, mockChallenges, generateUsername, generateAvatar } from '@/data/mockData';

interface AppState {
  user: User | null;
  posts: Post[];
  challenges: Challenge[];
  isOnboarded: boolean;
  activeTopic: string | null;
  showLanding: boolean;
}

interface AppContextType extends AppState {
  setUser: (user: User | null) => void;
  setPosts: (posts: Post[]) => void;
  setChallenges: (challenges: Challenge[]) => void;
  setIsOnboarded: (value: boolean) => void;
  setActiveTopic: (topic: string | null) => void;
  setShowLanding: (value: boolean) => void;
  likePost: (postId: number) => void;
  supportPost: (postId: number) => void;
  addPost: (content: string, topic: string, media?: string[]) => void;
  completeOnboarding: (topics: string[], goals: string[]) => void;
  checkInChallenge: (challengeId: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [challenges, setChallenges] = useState<Challenge[]>(mockChallenges);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [showLanding, setShowLanding] = useState(true);

  const likePost = (postId: number) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked,
        };
      }
      return post;
    }));
  };

  const supportPost = (postId: number) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          supports: post.isSupported ? post.supports - 1 : post.supports + 1,
          isSupported: !post.isSupported,
        };
      }
      return post;
    }));
  };

  const addPost = (content: string, topic: string, media?: string[]) => {
    if (!user) return;
    
    const newPost: Post = {
      id: Date.now(),
      userId: user.id,
      username: user.username,
      avatar: user.avatar,
      content,
      likes: 0,
      comments: 0,
      supports: 0,
      topic,
      time: 'Just now',
      isLiked: false,
      isSupported: false,
      media,
    };
    
    setPosts(prev => [newPost, ...prev]);
  };

  const completeOnboarding = (topics: string[], goals: string[]) => {
    const newUser: User = {
      id: Date.now(),
      username: generateUsername(),
      avatar: generateAvatar(),
      joinedTopics: topics,
      currentStreak: 0,
      longestStreak: 0,
      supportGiven: 0,
      joinedDate: new Date().toISOString().split('T')[0],
    };
    
    setUser(newUser);
    setIsOnboarded(true);
  };

  const checkInChallenge = (challengeId: number) => {
    setChallenges(prev => prev.map(challenge => {
      if (challenge.id === challengeId) {
        return {
          ...challenge,
          currentStreak: challenge.currentStreak + 1,
          status: challenge.currentStreak + 1 >= challenge.targetDays ? 'completed' : 'active',
        };
      }
      return challenge;
    }));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        posts,
        challenges,
        isOnboarded,
        activeTopic,
        showLanding,
        setUser,
        setPosts,
        setChallenges,
        setIsOnboarded,
        setActiveTopic,
        setShowLanding,
        likePost,
        supportPost,
        addPost,
        completeOnboarding,
        checkInChallenge,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
