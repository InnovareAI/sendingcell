import { useState } from 'react';
import { useProgress } from './hooks/useProgress';
import { useTimer } from './hooks/useTimer';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import ChapterView from './components/ChapterView';
import AchievementNotification from './components/gamification/AchievementNotification';
import type { Achievement } from './types';

function App() {
  const {
    progress,
    chapters,
    completeChapter,
    updateTimeSpent,
    getCurrentChapter,
    setCurrentChapter,
    resetProgress,
    getProgressPercentage,
  } = useProgress();

  const { getFormattedTime } = useTimer();
  const [recentAchievement, setRecentAchievement] = useState<Achievement | null>(null);

  const currentChapter = getCurrentChapter();
  
  // Get recent achievements (last 3)
  const recentAchievements = progress.achievements
    .filter(a => a.unlockedAt)
    .sort((a, b) => new Date(b.unlockedAt!).getTime() - new Date(a.unlockedAt!).getTime())
    .slice(0, 3);

  const handleChapterSelect = (chapterId: string) => {
    const chapter = chapters.find(ch => ch.id === chapterId);
    if (chapter && chapter.isUnlocked) {
      setCurrentChapter(chapterId);
    }
  };

  const handleChapterComplete = (chapterId: string, quizScore?: number) => {
    const previousAchievementCount = progress.achievements.length;
    completeChapter(chapterId, quizScore);
    
    // Check for new achievements after a short delay to let state update
    setTimeout(() => {
      if (progress.achievements.length > previousAchievementCount) {
        const newAchievement = progress.achievements[progress.achievements.length - 1];
        setRecentAchievement(newAchievement);
      }
    }, 100);
  };

  const handleTimeUpdate = (chapterId: string, minutes: number) => {
    updateTimeSpent(chapterId, minutes);
  };

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress? This action cannot be undone.')) {
      resetProgress();
    }
  };

  return (
    <div className="min-h-screen bg-healthcare-50 flex">
      {/* Sidebar */}
      <Sidebar
        chapters={chapters}
        currentChapter={currentChapter.id}
        onChapterSelect={handleChapterSelect}
        totalPoints={progress.totalPoints}
        progressPercentage={getProgressPercentage()}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header
          currentChapter={currentChapter}
          timeSpent={getFormattedTime()}
          recentAchievements={recentAchievements}
          onReset={handleResetProgress}
        />

        {/* Chapter Content */}
        <ChapterView
          chapter={currentChapter}
          onChapterComplete={handleChapterComplete}
          onTimeUpdate={handleTimeUpdate}
          userProgress={progress}
          totalChapters={chapters.length}
        />
      </div>

      {/* Achievement Notification */}
      <AchievementNotification
        achievement={recentAchievement}
        onClose={() => setRecentAchievement(null)}
      />
    </div>
  );
}

export default App;
