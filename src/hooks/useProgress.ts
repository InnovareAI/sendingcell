import { useState, useEffect } from 'react';
import { UserProgress, Chapter, Achievement } from '../types';
import { chapters as initialChapters } from '../data/chapters';
import { achievements as allAchievements } from '../data/achievements';

const STORAGE_KEY = 'austedo-xr-progress';

const defaultProgress: UserProgress = {
  currentChapter: 'orientation',
  totalPoints: 0,
  completedChapters: [],
  achievements: [],
  quizScores: {},
  timeSpent: {},
  lastActivity: new Date(),
};

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [chapters, setChapters] = useState<Chapter[]>(initialChapters);

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress);
      setProgress({ ...parsed, lastActivity: new Date(parsed.lastActivity) });
      
      // Update chapters based on saved progress
      updateChapterStates(parsed);
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const updateChapterStates = (currentProgress: UserProgress) => {
    setChapters(prevChapters => 
      prevChapters.map((chapter, index) => ({
        ...chapter,
        isUnlocked: index === 0 || currentProgress.completedChapters.includes(prevChapters[index - 1]?.id),
        isCompleted: currentProgress.completedChapters.includes(chapter.id),
        quizScore: currentProgress.quizScores[chapter.id],
        timeSpent: currentProgress.timeSpent[chapter.id] || 0,
      }))
    );
  };

  const completeChapter = (chapterId: string, quizScore?: number) => {
    setProgress(prev => {
      const newProgress = {
        ...prev,
        completedChapters: [...new Set([...prev.completedChapters, chapterId])],
        quizScores: quizScore ? { ...prev.quizScores, [chapterId]: quizScore } : prev.quizScores,
        lastActivity: new Date(),
      };

      // Check for achievements
      checkAchievements(newProgress);
      updateChapterStates(newProgress);
      
      return newProgress;
    });
  };

  const updateTimeSpent = (chapterId: string, minutes: number) => {
    setProgress(prev => ({
      ...prev,
      timeSpent: {
        ...prev.timeSpent,
        [chapterId]: (prev.timeSpent[chapterId] || 0) + minutes,
      },
      lastActivity: new Date(),
    }));
  };

  const addPoints = (points: number) => {
    setProgress(prev => ({
      ...prev,
      totalPoints: prev.totalPoints + points,
      lastActivity: new Date(),
    }));
  };

  const checkAchievements = (currentProgress: UserProgress) => {
    const newAchievements: Achievement[] = [];

    allAchievements.forEach(achievement => {
      if (currentProgress.achievements.some(a => a.id === achievement.id)) return;

      let earned = false;

      switch (achievement.id) {
        case 'first-chapter':
          earned = currentProgress.completedChapters.length >= 1;
          break;
        case 'halfway-hero':
          earned = currentProgress.completedChapters.length >= 5;
          break;
        case 'graduation-ready':
          earned = currentProgress.completedChapters.length >= 10;
          break;
        case 'quiz-master':
          earned = Object.values(currentProgress.quizScores).some(score => score === 100);
          break;
        case 'perfect-scores':
          earned = Object.values(currentProgress.quizScores).filter(score => score === 100).length >= 3;
          break;
        case 'dedicated-student':
          earned = Object.values(currentProgress.timeSpent).reduce((total, time) => total + time, 0) >= 120;
          break;
        case 'speed-learner':
          earned = Object.values(currentProgress.timeSpent).some(time => time <= 15);
          break;
      }

      if (earned) {
        newAchievements.push({ ...achievement, unlockedAt: new Date() });
      }
    });

    if (newAchievements.length > 0) {
      setProgress(prev => ({
        ...prev,
        achievements: [...prev.achievements, ...newAchievements],
        totalPoints: prev.totalPoints + newAchievements.reduce((sum, ach) => sum + ach.points, 0),
      }));
    }
  };

  const getCurrentChapter = () => {
    return chapters.find(ch => ch.id === progress.currentChapter) || chapters[0];
  };

  const getNextChapter = () => {
    const currentIndex = chapters.findIndex(ch => ch.id === progress.currentChapter);
    return chapters[currentIndex + 1] || null;
  };

  const setCurrentChapter = (chapterId: string) => {
    setProgress(prev => ({
      ...prev,
      currentChapter: chapterId,
      lastActivity: new Date(),
    }));
  };

  const resetProgress = () => {
    setProgress(defaultProgress);
    setChapters(initialChapters);
    localStorage.removeItem(STORAGE_KEY);
  };

  const getProgressPercentage = () => {
    return Math.round((progress.completedChapters.length / chapters.length) * 100);
  };

  return {
    progress,
    chapters,
    completeChapter,
    updateTimeSpent,
    addPoints,
    getCurrentChapter,
    getNextChapter,
    setCurrentChapter,
    resetProgress,
    getProgressPercentage,
  };
};