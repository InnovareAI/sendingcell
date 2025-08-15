import React, { useState, useEffect } from 'react';
import { Play, BookOpen, Trophy, ArrowRight, BarChart3 } from 'lucide-react';
import type { Chapter } from '../types';
import { chapterContent } from '../data/chapters';
import { quizzes } from '../data/chapters';
import ContentBlock from './content/ContentBlock';
import QuizModal from './quiz/QuizModal';
import ProgressDashboard from './gamification/ProgressDashboard';
import { useTimer } from '../hooks/useTimer';

interface ChapterViewProps {
  chapter: Chapter;
  onChapterComplete: (chapterId: string, quizScore?: number) => void;
  onTimeUpdate: (chapterId: string, minutes: number) => void;
  userProgress: any;
  totalChapters: number;
}

const ChapterView: React.FC<ChapterViewProps> = ({
  chapter,
  onChapterComplete,
  onTimeUpdate,
  userProgress,
  totalChapters,
}) => {
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [completedBlocks, setCompletedBlocks] = useState<Set<string>>(new Set());
  const [showQuiz, setShowQuiz] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const { start, pause, getFormattedTime } = useTimer(
    (minutes) => onTimeUpdate(chapter.id, minutes)
  );

  const contentBlocks = chapterContent[chapter.id] || [];
  const quiz = quizzes.find(q => q.chapterId === chapter.id);
  const currentBlock = contentBlocks[currentBlockIndex];

  // Start timer when chapter loads
  useEffect(() => {
    start();
    return () => pause();
  }, [chapter.id]);

  // Check if all content is completed
  const allContentCompleted = completedBlocks.size === contentBlocks.length && contentBlocks.length > 0;
  const canCompleteChapter = allContentCompleted && (!quiz || quizCompleted);

  const handleBlockComplete = (blockId: string) => {
    setCompletedBlocks(prev => new Set([...prev, blockId]));
    
    // Auto-advance to next block
    if (currentBlockIndex < contentBlocks.length - 1) {
      setCurrentBlockIndex(prev => prev + 1);
    }
  };

  const handleQuizComplete = (score: number) => {
    setQuizCompleted(true);
    setShowQuiz(false);
    onChapterComplete(chapter.id, score);
  };

  const handleChapterComplete = () => {
    onChapterComplete(chapter.id);
  };

  if (showDashboard) {
    return (
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-healthcare-800">Learning Dashboard</h2>
            <button
              onClick={() => setShowDashboard(false)}
              className="btn-secondary"
            >
              Back to Chapter
            </button>
          </div>
          <ProgressDashboard progress={userProgress} totalChapters={totalChapters} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-6">
        {/* Chapter Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-healthcare-800">{chapter.title}</h1>
              {chapter.isCompleted && (
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Trophy size={16} className="text-green-600" />
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowDashboard(true)}
                className="btn-secondary flex items-center gap-2"
              >
                <BarChart3 size={16} />
                Dashboard
              </button>
              <div className="text-sm text-healthcare-600 bg-healthcare-100 px-3 py-1 rounded-lg">
                Session: {getFormattedTime()}
              </div>
            </div>
          </div>
          
          <p className="text-healthcare-600 text-lg mb-4">{chapter.description}</p>
          
          {/* Chapter Progress */}
          <div className="flex items-center gap-4 text-sm text-healthcare-600">
            <div className="flex items-center gap-2">
              <BookOpen size={16} />
              <span>{completedBlocks.size} / {contentBlocks.length} content blocks</span>
            </div>
            {quiz && (
              <div className="flex items-center gap-2">
                <Play size={16} />
                <span>Quiz {quizCompleted ? 'completed' : 'available'}</span>
              </div>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-6">
          {contentBlocks.length > 0 ? (
            <>
              {/* Content Navigation */}
              <div className="flex items-center gap-2 mb-6">
                {contentBlocks.map((block, index) => (
                  <button
                    key={block.id}
                    onClick={() => setCurrentBlockIndex(index)}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                      completedBlocks.has(block.id)
                        ? 'bg-green-500 border-green-500 text-white'
                        : index === currentBlockIndex
                        ? 'border-primary-500 text-primary-600'
                        : 'border-healthcare-300 text-healthcare-400'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              {/* Current Content Block */}
              {currentBlock && (
                <ContentBlock
                  block={currentBlock}
                  onComplete={() => handleBlockComplete(currentBlock.id)}
                />
              )}

              {/* Quiz Section */}
              {allContentCompleted && quiz && (
                <div className="card bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-healthcare-800 mb-2">
                        Chapter Quiz
                      </h3>
                      <p className="text-healthcare-600">
                        Test your knowledge with {quiz.questions.length} questions
                      </p>
                      <div className="text-sm text-healthcare-500 mt-1">
                        Passing score: {quiz.passingScore}% • Total points: {quiz.totalPoints}
                      </div>
                    </div>
                    <div>
                      {quizCompleted ? (
                        <div className="text-center">
                          <div className="text-green-600 font-semibold mb-1">Completed!</div>
                          {chapter.quizScore && (
                            <div className="text-sm text-healthcare-600">
                              Score: {chapter.quizScore}%
                            </div>
                          )}
                        </div>
                      ) : (
                        <button
                          onClick={() => setShowQuiz(true)}
                          className="btn-primary flex items-center gap-2"
                        >
                          <Play size={16} />
                          Start Quiz
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Chapter Completion */}
              {canCompleteChapter && !chapter.isCompleted && (
                <div className="card bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-healthcare-800 mb-2">
                        Chapter Complete!
                      </h3>
                      <p className="text-healthcare-600">
                        You've finished all content and assessments for this chapter.
                      </p>
                    </div>
                    <button
                      onClick={handleChapterComplete}
                      className="btn-primary flex items-center gap-2"
                    >
                      Mark Complete
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Placeholder for chapters without content */
            <div className="card text-center py-12">
              <BookOpen size={64} className="text-healthcare-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-healthcare-800 mb-2">
                Chapter Content Coming Soon
              </h3>
              <p className="text-healthcare-600 mb-6">
                This chapter's content is being prepared. Check back soon!
              </p>
              <button
                onClick={handleChapterComplete}
                className="btn-primary"
              >
                Mark as Completed
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Quiz Modal */}
      {quiz && (
        <QuizModal
          quiz={quiz}
          isOpen={showQuiz}
          onClose={() => setShowQuiz(false)}
          onComplete={handleQuizComplete}
        />
      )}
    </div>
  );
};

export default ChapterView;