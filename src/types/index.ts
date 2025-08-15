export interface Chapter {
  id: string;
  title: string;
  description: string;
  order: number;
  isUnlocked: boolean;
  isCompleted: boolean;
  completionPercentage: number;
  quizScore?: number;
  timeSpent: number; // in minutes
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  points: number;
}

export interface Quiz {
  id: string;
  chapterId: string;
  questions: QuizQuestion[];
  totalPoints: number;
  passingScore: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: number;
  unlockedAt?: Date;
  category: 'progress' | 'quiz' | 'engagement' | 'completion';
}

export interface UserProgress {
  currentChapter: string;
  totalPoints: number;
  completedChapters: string[];
  achievements: Achievement[];
  quizScores: Record<string, number>;
  timeSpent: Record<string, number>; // chapter id -> minutes
  lastActivity: Date;
}

export interface ContentBlock {
  id: string;
  type: 'slide' | 'video' | 'testimonial' | 'chart' | 'safety' | 'interactive';
  title: string;
  content: string;
  metadata?: Record<string, any>;
}

export interface ChapterContent {
  chapterId: string;
  blocks: ContentBlock[];
}

export type ContentType = 'slide' | 'video' | 'testimonial' | 'chart' | 'safety' | 'interactive';

export interface GameState {
  level: number;
  streak: number;
  totalScore: number;
  badges: string[];
  currentMultiplier: number;
}