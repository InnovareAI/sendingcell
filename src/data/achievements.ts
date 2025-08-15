import { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'first-chapter',
    title: 'Getting Started',
    description: 'Complete your first chapter',
    icon: '🚀',
    points: 50,
    category: 'progress'
  },
  {
    id: 'quiz-master',
    title: 'Quiz Master',
    description: 'Score 100% on any quiz',
    icon: '🎯',
    points: 100,
    category: 'quiz'
  },
  {
    id: 'speed-learner',
    title: 'Speed Learner',
    description: 'Complete a chapter in under 15 minutes',
    icon: '⚡',
    points: 75,
    category: 'engagement'
  },
  {
    id: 'dedicated-student',
    title: 'Dedicated Student',
    description: 'Spend 2+ hours learning',
    icon: '📚',
    points: 150,
    category: 'engagement'
  },
  {
    id: 'halfway-hero',
    title: 'Halfway Hero',
    description: 'Complete 5 chapters',
    icon: '🏆',
    points: 200,
    category: 'progress'
  },
  {
    id: 'graduation-ready',
    title: 'Graduation Ready',
    description: 'Complete all chapters',
    icon: '🎓',
    points: 500,
    category: 'completion'
  },
  {
    id: 'perfect-scores',
    title: 'Perfect Scholar',
    description: 'Score 100% on 3 quizzes',
    icon: '⭐',
    points: 300,
    category: 'quiz'
  },
  {
    id: 'streak-champion',
    title: 'Streak Champion',
    description: 'Maintain a 5-day learning streak',
    icon: '🔥',
    points: 250,
    category: 'engagement'
  }
];