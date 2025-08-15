import React, { useState, useEffect } from 'react';
import { X, CheckCircle, XCircle, Trophy, RotateCcw } from 'lucide-react';
import { Quiz, QuizQuestion } from '../../types';

interface QuizModalProps {
  quiz: Quiz;
  isOpen: boolean;
  onClose: () => void;
  onComplete: (score: number, timeSpent: number) => void;
}

interface QuestionState {
  selectedAnswer?: number;
  isAnswered: boolean;
  isCorrect?: boolean;
  showExplanation: boolean;
}

const QuizModal: React.FC<QuizModalProps> = ({
  quiz,
  isOpen,
  onClose,
  onComplete,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionStates, setQuestionStates] = useState<QuestionState[]>([]);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [isCompleted, setIsCompleted] = useState(false);

  // Initialize question states when quiz changes
  useEffect(() => {
    if (quiz) {
      setQuestionStates(
        quiz.questions.map(() => ({
          isAnswered: false,
          showExplanation: false,
        }))
      );
      setCurrentQuestionIndex(0);
      setScore(0);
      setStartTime(new Date());
      setIsCompleted(false);
    }
  }, [quiz]);

  const currentQuestion = quiz?.questions[currentQuestionIndex];
  const currentState = questionStates[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    if (currentState?.isAnswered) return;

    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    const newScore = isCorrect ? score + currentQuestion.points : score;

    setQuestionStates(prev => {
      const newStates = [...prev];
      newStates[currentQuestionIndex] = {
        selectedAnswer: answerIndex,
        isAnswered: true,
        isCorrect,
        showExplanation: true,
      };
      return newStates;
    });

    setScore(newScore);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Quiz completed
      const timeSpent = Math.round((new Date().getTime() - startTime.getTime()) / 1000 / 60);
      const finalScore = Math.round((score / quiz.totalPoints) * 100);
      setIsCompleted(true);
      onComplete(finalScore, timeSpent);
    }
  };

  const handleRetry = () => {
    setQuestionStates(
      quiz.questions.map(() => ({
        isAnswered: false,
        showExplanation: false,
      }))
    );
    setCurrentQuestionIndex(0);
    setScore(0);
    setStartTime(new Date());
    setIsCompleted(false);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 70) return 'text-blue-600 bg-blue-50';
    if (score >= 50) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getScoreMessage = (score: number) => {
    if (score >= 90) return 'Excellent work!';
    if (score >= 70) return 'Great job!';
    if (score >= 50) return 'Good effort!';
    return 'Keep learning!';
  };

  if (!isOpen || !quiz) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center quiz-modal">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-healthcare-200">
          <div>
            <h2 className="text-xl font-bold text-healthcare-800">Chapter Quiz</h2>
            <p className="text-sm text-healthcare-600">
              Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-healthcare-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-healthcare-500" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 pt-4">
          <div className="w-full bg-healthcare-200 rounded-full h-2">
            <div
              className="progress-bar rounded-full h-2"
              style={{
                width: `${((currentQuestionIndex + (currentState?.isAnswered ? 1 : 0)) / quiz.questions.length) * 100}%`
              }}
            />
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {!isCompleted ? (
            <>
              {/* Question */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-healthcare-800 mb-4">
                  {currentQuestion?.question}
                </h3>

                {/* Answer Options */}
                <div className="space-y-3">
                  {currentQuestion?.options.map((option, index) => {
                    const isSelected = currentState?.selectedAnswer === index;
                    const isCorrect = index === currentQuestion.correctAnswer;
                    const showCorrectness = currentState?.showExplanation;

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={currentState?.isAnswered}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                          showCorrectness
                            ? isCorrect
                              ? 'border-green-500 bg-green-50'
                              : isSelected
                              ? 'border-red-500 bg-red-50'
                              : 'border-healthcare-200 bg-healthcare-50'
                            : isSelected
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-healthcare-200 hover:border-primary-300 hover:bg-primary-25'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {showCorrectness && (
                            <div>
                              {isCorrect && (
                                <CheckCircle size={20} className="text-green-600" />
                              )}
                              {isSelected && !isCorrect && (
                                <XCircle size={20} className="text-red-600" />
                              )}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {currentState?.showExplanation && (
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Explanation:</strong> {currentQuestion.explanation}
                    </p>
                    <p className="text-xs text-blue-600 mt-2">
                      Points: {currentState.isCorrect ? currentQuestion.points : 0} / {currentQuestion.points}
                    </p>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-4 border-t border-healthcare-200">
                <div className="text-sm text-healthcare-600">
                  Score: {score} / {quiz.totalPoints} points
                </div>
                {currentState?.showExplanation && (
                  <button
                    onClick={handleNext}
                    className="btn-primary"
                  >
                    {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
                  </button>
                )}
              </div>
            </>
          ) : (
            /* Quiz Completed */
            <div className="text-center">
              <div className="mb-6">
                <Trophy size={64} className="text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-healthcare-800 mb-2">
                  Quiz Completed!
                </h3>
                <p className="text-healthcare-600">{getScoreMessage(Math.round((score / quiz.totalPoints) * 100))}</p>
              </div>

              {/* Score Display */}
              <div className={`inline-block px-6 py-3 rounded-lg ${getScoreColor(Math.round((score / quiz.totalPoints) * 100))}`}>
                <div className="text-3xl font-bold">
                  {Math.round((score / quiz.totalPoints) * 100)}%
                </div>
                <div className="text-sm">
                  {score} / {quiz.totalPoints} points
                </div>
              </div>

              {/* Pass/Fail Status */}
              <div className="mt-4">
                {Math.round((score / quiz.totalPoints) * 100) >= quiz.passingScore ? (
                  <div className="text-green-600 font-medium">
                    ✓ Passing Score Achieved!
                  </div>
                ) : (
                  <div className="text-red-600 font-medium">
                    Minimum passing score: {quiz.passingScore}%
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3 justify-center mt-6">
                {Math.round((score / quiz.totalPoints) * 100) < quiz.passingScore && (
                  <button
                    onClick={handleRetry}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <RotateCcw size={16} />
                    Retry Quiz
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="btn-primary"
                >
                  Continue Learning
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;