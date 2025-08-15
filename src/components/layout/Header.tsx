import React from 'react';
import { Clock, Trophy, Star, RotateCcw } from 'lucide-react';
import { Chapter, Achievement } from '../../types';

interface HeaderProps {
  currentChapter: Chapter;
  timeSpent: string;
  recentAchievements: Achievement[];
  onReset: () => void;
}

const Header: React.FC<HeaderProps> = ({
  currentChapter,
  timeSpent,
  recentAchievements,
  onReset,
}) => {
  return (
    <div className="bg-white border-b border-healthcare-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Current Chapter Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-healthcare-800 mb-1">
            {currentChapter.title}
          </h2>
          <p className="text-healthcare-600">
            {currentChapter.description}
          </p>
        </div>

        {/* Stats and Actions */}
        <div className="flex items-center gap-6">
          {/* Session Timer */}
          <div className="flex items-center gap-2 text-healthcare-600">
            <Clock size={18} />
            <span className="font-medium">{timeSpent}</span>
          </div>

          {/* Recent Achievements */}
          {recentAchievements.length > 0 && (
            <div className="flex items-center gap-2">
              <Trophy size={18} className="text-yellow-500" />
              <div className="flex gap-1">
                {recentAchievements.slice(0, 3).map((achievement) => (
                  <div
                    key={achievement.id}
                    className="achievement-badge w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-sm"
                    title={achievement.title}
                  >
                    {achievement.icon}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chapter Completion Status */}
          <div className="flex items-center gap-2">
            {currentChapter.isCompleted && (
              <div className="flex items-center gap-1 text-green-600 bg-green-50 px-3 py-1 rounded-full">
                <Star size={16} />
                <span className="text-sm font-medium">Completed</span>
              </div>
            )}
          </div>

          {/* Reset Button */}
          <button
            onClick={onReset}
            className="btn-secondary flex items-center gap-2 text-sm"
            title="Reset Progress"
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;