import React from 'react';
import { 
  BookOpen, 
  Brain, 
  Eye, 
  Stethoscope, 
  Pill, 
  FileText, 
  BarChart3, 
  Users, 
  MessageCircle, 
  CheckCircle,
  Lock,
  Clock
} from 'lucide-react';
import { Chapter } from '../../types';
import { clsx } from 'clsx';

interface SidebarProps {
  chapters: Chapter[];
  currentChapter: string;
  onChapterSelect: (chapterId: string) => void;
  totalPoints: number;
  progressPercentage: number;
}

const chapterIcons = {
  'orientation': BookOpen,
  'disease-biology': Brain,
  'recognizing-symptoms': Eye,
  'evaluation-management': Stethoscope,
  'vmat2-overview': Pill,
  'austedo-xr': FileText,
  'clinical-evidence': BarChart3,
  'patient-stories': Users,
  'communication-strategies': MessageCircle,
  'wrap-up': CheckCircle,
};

const Sidebar: React.FC<SidebarProps> = ({
  chapters,
  currentChapter,
  onChapterSelect,
  totalPoints,
  progressPercentage,
}) => {
  return (
    <div className="w-80 bg-white border-r border-healthcare-200 h-screen overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-healthcare-200">
        <h1 className="text-xl font-bold text-healthcare-800 mb-2">
          AUSTEDO XR Education
        </h1>
        <div className="space-y-3">
          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-sm text-healthcare-600 mb-1">
              <span>Overall Progress</span>
              <span>{progressPercentage}%</span>
            </div>
            <div className="w-full bg-healthcare-200 rounded-full h-2">
              <div 
                className="progress-bar rounded-full h-2" 
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          
          {/* Points */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-healthcare-600">Total Points</span>
            <span className="font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
              {totalPoints}
            </span>
          </div>
        </div>
      </div>

      {/* Chapter List */}
      <div className="p-4 space-y-2">
        {chapters.map((chapter) => {
          const Icon = chapterIcons[chapter.id as keyof typeof chapterIcons];
          const isLocked = !chapter.isUnlocked;
          const isActive = currentChapter === chapter.id;
          
          return (
            <div
              key={chapter.id}
              onClick={() => !isLocked && onChapterSelect(chapter.id)}
              className={clsx(
                'sidebar-item relative',
                isActive && 'active',
                isLocked && 'locked'
              )}
            >
              <div className="flex items-center gap-3 flex-1">
                <div className={clsx(
                  'flex items-center justify-center w-8 h-8 rounded-lg',
                  chapter.isCompleted 
                    ? 'bg-green-100 text-green-600' 
                    : isActive 
                    ? 'bg-primary-100 text-primary-600'
                    : isLocked
                    ? 'bg-healthcare-100 text-healthcare-400'
                    : 'bg-healthcare-100 text-healthcare-500'
                )}>
                  {isLocked ? (
                    <Lock size={16} />
                  ) : chapter.isCompleted ? (
                    <CheckCircle size={16} />
                  ) : (
                    <Icon size={16} />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">
                    {chapter.order}. {chapter.title.split(' - ')[1] || chapter.title}
                  </div>
                  <div className="text-xs text-healthcare-500 truncate">
                    {chapter.description}
                  </div>
                  
                  {/* Chapter Progress */}
                  {!isLocked && (
                    <div className="flex items-center gap-2 mt-1">
                      {chapter.timeSpent > 0 && (
                        <div className="flex items-center gap-1 text-xs text-healthcare-400">
                          <Clock size={10} />
                          {chapter.timeSpent}m
                        </div>
                      )}
                      {chapter.quizScore && (
                        <div className="text-xs font-medium text-green-600">
                          Quiz: {chapter.quizScore}%
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Completion Badge */}
              {chapter.isCompleted && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;