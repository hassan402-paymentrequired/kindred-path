import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { allChallenges, topics } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Calendar, Target, Search, Filter } from 'lucide-react';
import { cn } from '@/utils/helpers';
import { toast } from 'sonner';
import type { Challenge } from '@/features/challenges/types';

export function BrowseChallenges() {
  const { user, challenges: userChallenges, joinChallenge } = useApp();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTopic, setFilterTopic] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  if (!user) return null;

  const userChallengeIds = new Set(userChallenges.map(c => c.id));

  const filteredChallenges = allChallenges.filter((challenge) => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         challenge.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTopic = !filterTopic || challenge.topic === filterTopic;
    return matchesSearch && matchesTopic;
  });

  const handleJoinChallenge = (challenge: Challenge) => {
    joinChallenge(challenge.id);
    toast.success(`Joined ${challenge.title}! 🎉`, {
      description: 'Check it in your Challenges page',
    });
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Button variant="ghost" size="icon-sm" onClick={() => navigate('/app/challenges')}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Browse Challenges</h1>
          <p className="text-sm text-muted-foreground">Find the perfect challenge to start your journey</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="space-y-3 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search challenges..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-muted border border-border rounded-xl py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Filter by Topic */}
        <div className="relative">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">
              {filterTopic ? topics.find(t => t.id === filterTopic)?.name : 'All Topics'}
            </span>
          </button>

          {showFilters && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-popover border border-border rounded-xl shadow-elevated z-10 py-2 animate-slide-down">
              <button
                onClick={() => { setFilterTopic(null); setShowFilters(false); }}
                className={cn(
                  "w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-muted transition-colors",
                  filterTopic === null && "bg-primary/10 text-primary"
                )}
              >
                <span className="text-lg">🌐</span>
                <span className="text-sm">All Topics</span>
              </button>
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => { setFilterTopic(topic.id); setShowFilters(false); }}
                  className={cn(
                    "w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-muted transition-colors",
                    filterTopic === topic.id && "bg-primary/10 text-primary"
                  )}
                >
                  <span className="text-lg">{topic.icon}</span>
                  <span className="text-sm">{topic.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-4">
        {filteredChallenges.length} challenge{filteredChallenges.length !== 1 ? 's' : ''} available
      </p>

      {/* Challenges Grid */}
      <div className="space-y-3">
        {filteredChallenges.map((challenge) => {
          const isJoined = userChallengeIds.has(challenge.id);
          const topicInfo = topics.find(t => t.id === challenge.topic);
          const difficulty = challenge.targetDays >= 60 ? 'Hard' : challenge.targetDays >= 30 ? 'Medium' : 'Easy';
          const difficultyColor = difficulty === 'Hard' ? 'text-love' : difficulty === 'Medium' ? 'text-accent' : 'text-success';

          return (
            <div
              key={challenge.id}
              className={cn(
                "p-4 rounded-2xl border transition-all animate-slide-up cursor-pointer",
                isJoined
                  ? "bg-primary/5 border-primary/30"
                  : "bg-card border-border hover:border-primary/50 hover:bg-card-hover"
              )}
              onClick={() => navigate(`/app/challenges/${challenge.id}`)}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{challenge.title}</h3>
                    {isJoined && (
                      <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        Joined
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{challenge.description}</p>
                  
                  {/* Topic Tag */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      <span>{topicInfo?.icon}</span>
                      <span>#{challenge.topic}</span>
                    </span>
                    <span className={cn("text-xs font-medium", difficultyColor)}>
                      {difficulty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {challenge.participants.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {challenge.targetDays} days
                  </span>
                </div>

                {!isJoined ? (
                  <Button
                    variant="glow"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleJoinChallenge(challenge);
                    }}
                    className="gap-1"
                  >
                    <Target className="w-4 h-4" />
                    Join
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/app/challenges');
                    }}
                  >
                    View Progress
                  </Button>
                )}
              </div>
            </div>
          );
        })}

        {filteredChallenges.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No challenges found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>

      {/* Encouragement */}
      <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 text-center">
        <p className="text-lg font-semibold mb-1">💪 Ready to commit?</p>
        <p className="text-sm text-muted-foreground">
          Join a challenge and be part of a community working toward the same goal!
        </p>
      </div>
    </div>
  );
}
