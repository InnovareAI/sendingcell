import React from 'react';
import { Trophy, Clock, Target, Star, TrendingUp } from 'lucide-react';
import type { UserProgress } from '../../types';

interface ProgressDashboardProps {
  progress: UserProgress;
  totalChapters: number;
}

const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  progress,
  totalChapters,
}) => {
  const completionPercentage = Math.round((progress.completedChapters.length / totalChapters) * 100);
  const totalTimeSpent = Object.values(progress.timeSpent).reduce((sum, time) => sum + time, 0);
  const averageQuizScore = Object.values(progress.quizScores).length > 0 
    ? Math.round(Object.values(progress.quizScores).reduce((sum, score) => sum + score, 0) / Object.values(progress.quizScores).length)
    : 0;

  const getLevel = (points: number) => {
    return Math.floor(points / 100) + 1;
  };

  const getPointsToNextLevel = (points: number) => {
    const currentLevel = getLevel(points);
    const pointsForNextLevel = currentLevel * 100;
    return pointsForNextLevel - points;
  };

  const recentAchievements = progress.achievements
    .filter(a => a.unlockedAt)
    .sort((a, b) => new Date(b.unlockedAt!).getTime() - new Date(a.unlockedAt!).getTime())
    .slice(0, 6);

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Progress */}
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp size={16} className="text-blue-600" />
            </div>
            <span className="font-medium text-healthcare-700">Progress</span>
          </div>
          <div className="text-2xl font-bold text-healthcare-800">{completionPercentage}%</div>
          <div className="text-sm text-healthcare-600">
            {progress.completedChapters.length} of {totalChapters} chapters
          </div>
          <div className="w-full bg-healthcare-200 rounded-full h-2 mt-2">
            <div 
              className="progress-bar rounded-full h-2"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Points & Level */}
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star size={16} className="text-yellow-600" />
            </div>
            <span className="font-medium text-healthcare-700">Level {getLevel(progress.totalPoints)}</span>
          </div>
          <div className="text-2xl font-bold text-healthcare-800">{progress.totalPoints}</div>
          <div className="text-sm text-healthcare-600">
            {getPointsToNextLevel(progress.totalPoints)} to next level
          </div>
        </div>

        {/* Time Spent */}
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Clock size={16} className="text-green-600" />
            </div>
            <span className="font-medium text-healthcare-700">Time Spent</span>
          </div>
          <div className="text-2xl font-bold text-healthcare-800">
            {Math.floor(totalTimeSpent / 60)}h {totalTimeSpent % 60}m
          </div>
          <div className="text-sm text-healthcare-600">Total learning time</div>
        </div>

        {/* Quiz Performance */}
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <Target size={16} className="text-purple-600" />
            </div>
            <span className="font-medium text-healthcare-700">Quiz Average</span>
          </div>
          <div className="text-2xl font-bold text-healthcare-800">
            {averageQuizScore > 0 ? `${averageQuizScore}%` : '—'}
          </div>
          <div className="text-sm text-healthcare-600">
            {Object.keys(progress.quizScores).length} quizzes completed
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      {progress.achievements.length > 0 && (
        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Trophy size={16} className="text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-healthcare-800">Achievements</h3>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">
              {progress.achievements.length}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {recentAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className="text-center p-3 bg-healthcare-50 rounded-lg hover:bg-healthcare-100 transition-colors"
                title={achievement.description}
              >
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <div className="text-sm font-medium text-healthcare-800 mb-1">
                  {achievement.title}
                </div>
                <div className="text-xs text-healthcare-600">
                  +{achievement.points} pts
                </div>
                {achievement.unlockedAt && (
                  <div className="text-xs text-green-600 mt-1">
                    {new Date(achievement.unlockedAt).toLocaleDateString()}
                  </div>
                )}
              </div>
            ))}
          </div>

          {progress.achievements.length > 6 && (
            <div className="text-center mt-4">
              <button className="btn-secondary text-sm">
                View All Achievements
              </button>
            </div>
          )}
        </div>
      )}

      {/* Chapter Progress Detail */}
      <div className="card">
        <h3 className="text-lg font-semibold text-healthcare-800 mb-4">Chapter Details</h3>
        <div className="space-y-3">
          {Object.entries(progress.timeSpent).map(([chapterId, timeSpent]) => {
            const quizScore = progress.quizScores[chapterId];
            const isCompleted = progress.completedChapters.includes(chapterId);
            
            return (
              <div
                key={chapterId}
                className="flex items-center justify-between p-3 bg-healthcare-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    isCompleted ? 'bg-green-500' : 'bg-healthcare-300'
                  }`} />
                  <span className="font-medium text-healthcare-700 capitalize">
                    {chapterId.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-healthcare-600">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {timeSpent}m
                  </div>
                  {quizScore && (
                    <div className={`font-medium ${
                      quizScore >= 90 ? 'text-green-600' :
                      quizScore >= 70 ? 'text-blue-600' :
                      'text-yellow-600'
                    }`}>
                      Quiz: {quizScore}%
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressDashboard;