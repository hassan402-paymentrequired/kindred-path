import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ConfettiCelebrationProps {
  isVisible: boolean;
  milestone: number;
  onComplete: () => void;
}

const milestoneMessages: Record<number, { emoji: string; title: string; message: string }> = {
  7: {
    emoji: '🌟',
    title: 'One Week Strong!',
    message: "You've shown incredible commitment. Keep this momentum going!",
  },
  30: {
    emoji: '🏆',
    title: '30 Days Champion!',
    message: "A whole month! You're building habits that will last a lifetime.",
  },
  90: {
    emoji: '👑',
    title: '90 Day Legend!',
    message: "You've achieved something truly remarkable. You're an inspiration!",
  },
};

const confettiColors = [
  'bg-primary',
  'bg-secondary',
  'bg-accent',
  'bg-success',
  'bg-love',
  'bg-streak',
];

interface ConfettiPiece {
  id: number;
  left: number;
  animationDelay: number;
  animationDuration: number;
  color: string;
  size: number;
  rotation: number;
}

export function ConfettiCelebration({ isVisible, milestone, onComplete }: ConfettiCelebrationProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Generate confetti pieces
      const newPieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 0.5,
        animationDuration: 2 + Math.random() * 2,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        size: 8 + Math.random() * 8,
        rotation: Math.random() * 360,
      }));
      setPieces(newPieces);

      // Show message after a short delay
      setTimeout(() => setShowMessage(true), 500);

      // Auto-close after animation
      const timer = setTimeout(() => {
        onComplete();
        setPieces([]);
        setShowMessage(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  const milestoneData = milestoneMessages[milestone] || milestoneMessages[7];

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {/* Confetti */}
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className={cn('absolute top-0 rounded-sm', piece.color)}
          style={{
            left: `${piece.left}%`,
            width: piece.size,
            height: piece.size,
            animationDelay: `${piece.animationDelay}s`,
            animationDuration: `${piece.animationDuration}s`,
            transform: `rotate(${piece.rotation}deg)`,
            animation: `confetti-fall ${piece.animationDuration}s ease-out forwards`,
          }}
        />
      ))}

      {/* Message Overlay */}
      {showMessage && (
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-auto"
          onClick={onComplete}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative bg-card border border-border rounded-3xl p-8 mx-6 max-w-sm text-center animate-pop shadow-elevated">
            <div className="text-7xl mb-4 animate-bounce-soft">{milestoneData.emoji}</div>
            <h2 className="text-2xl font-bold gradient-text-primary mb-2">
              {milestoneData.title}
            </h2>
            <p className="text-muted-foreground mb-6">
              {milestoneData.message}
            </p>
            <div className="flex items-center justify-center gap-2 text-streak font-bold text-xl">
              🔥 {milestone} Day Streak!
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Tap anywhere to continue
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
