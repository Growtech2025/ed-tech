import React, { useState, useEffect } from 'react';
import { CheckCircle, X, Clock, AlertCircle, Award, Brain, Zap } from 'lucide-react';
import './Assignment.css';

const AssignmentComponent = ({ assignment, isVisible, onComplete, onClose }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes for individual assessments
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    // Reset timer for each new assignment
    setTimeLeft(300);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setIsCompleted(false);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible, assignment.id]);

  const currentQuestion = assignment.questions[currentQuestionIndex];

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleCodeChange = (questionId, code) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: code
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
    setIsCompleted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    assignment.questions.forEach(question => {
      if (question.type === 'mcq' && selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / assignment.questions.length) * 100);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const handleComplete = () => {
    onComplete();
    onClose();
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'score-excellent';
    if (score >= 60) return 'score-good';
    return 'score-needs-improvement';
  };

  const getScoreMessage = (score) => {
    if (score >= 80) return 'Excellent work! You have mastered this topic.';
    if (score >= 60) return 'Good job! You have a solid understanding.';
    return 'Keep practicing! Review the lesson material.';
  };

  const getScoreBadge = (score) => {
    if (score >= 80) return { icon: Award, color: 'badge-excellent', text: 'Excellent!' };
    if (score >= 60) return { icon: Brain, color: 'badge-good', text: 'Good Job!' };
    return { icon: Zap, color: 'badge-needs-improvement', text: 'Keep Learning!' };
  };

  if (!isVisible) return null;

  return (
    <div className="assignment-modal">
      <div className="assignment-modal__content">
        {/* Header */}
        <div className="assignment-modal__header">
          <div className="assignment-header__content">
            <div className="assignment-header__icon">
              <Brain className="icon" />
            </div>
            <div className="assignment-header__text">
              <h2 className="assignment-header__title">{assignment.title}</h2>
              <p className="assignment-header__subtitle">
                {assignment.questions.length} Questions • Quick Knowledge Check
              </p>
            </div>
          </div>
          <div className="assignment-header__controls">
            <div className="assignment-timer">
              <Clock className="timer-icon" />
              <span className="timer-text">{formatTime(timeLeft)}</span>
            </div>
            <button
              onClick={onClose}
              className="assignment-close-button"
            >
              <X className="icon" />
            </button>
          </div>
        </div>

        <div className="assignment-modal__body">
          {!showResults ? (
            <div>
              {/* Progress */}
              <div className="assignment-progress">
                <div className="progress-info">
                  <span className="progress-current">Question {currentQuestionIndex + 1} of {assignment.questions.length}</span>
                  <span className="progress-percentage">{Math.round(((currentQuestionIndex + 1) / assignment.questions.length) * 100)}% Complete</span>
                </div>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar-fill"
                    style={{ width: `${((currentQuestionIndex + 1) / assignment.questions.length) * 100}%` }}
                  >
                    <div className="progress-bar-shine"></div>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className="assignment-question">
                <div className="question-container">
                  <h3 className="question-title">
                    {currentQuestion.question}
                  </h3>
                  <div className="question-instruction">
                    Select the best answer from the options below
                  </div>
                </div>

                {currentQuestion.type === 'mcq' && currentQuestion.options && (
                  <div className="question-options">
                    {currentQuestion.options.map((option, index) => (
                      <label
                        key={index}
                        className={`option-label ${
                          selectedAnswers[currentQuestion.id] === option
                            ? 'option-label--selected'
                            : 'option-label--default'
                        }`}
                      >
                        <div className={`option-radio ${
                          selectedAnswers[currentQuestion.id] === option
                            ? 'option-radio--selected'
                            : 'option-radio--default'
                        }`}>
                          {selectedAnswers[currentQuestion.id] === option && (
                            <div className="option-radio-dot"></div>
                          )}
                        </div>
                        <input
                          type="radio"
                          name={currentQuestion.id}
                          value={option}
                          checked={selectedAnswers[currentQuestion.id] === option}
                          onChange={() => handleAnswerSelect(currentQuestion.id, option)}
                          className="option-input"
                        />
                        <span className="option-text">{option}</span>
                      </label>
                    ))}
                  </div>
                )}

                {currentQuestion.type === 'coding' && (
                  <div className="coding-question">
                    <div className="code-display">
                      <pre className="code-text">{currentQuestion.code}</pre>
                    </div>
                    <textarea
                      className="code-input"
                      placeholder="Write your code here..."
                      value={selectedAnswers[currentQuestion.id] || ''}
                      onChange={(e) => handleCodeChange(currentQuestion.id, e.target.value)}
                      onCopy={(e) => e.preventDefault()}
                      onPaste={(e) => e.preventDefault()}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <p className="coding-warning">
                      <AlertCircle className="warning-icon" />
                      Copy and paste are disabled for this assignment
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="assignment-results">
              <div className="results-header">
                {(() => {
                  const score = calculateScore();
                  const badge = getScoreBadge(score);
                  const IconComponent = badge.icon;
                  
                  return (
                    <div className="results-summary">
                      <div className={`results-badge ${badge.color}`}>
                        <IconComponent className="results-badge-icon" />
                      </div>
                      <h3 className="results-title">{badge.text}</h3>
                      <p className={`results-score ${getScoreColor(score)}`}>
                        Score: {score}%
                      </p>
                      <p className="results-message">{getScoreMessage(score)}</p>
                    </div>
                  );
                })()}
              </div>
              
              <div className="results-review">
                <h4 className="review-title">
                  <CheckCircle className="review-icon" />
                  Answer Review
                </h4>
                <div className="review-grid">
                  {assignment.questions.map((question, index) => (
                    <div key={question.id} className="review-item">
                      <p className="review-question">
                        Q{index + 1}: {question.question.substring(0, 50)}...
                      </p>
                      <div className="review-result">
                        <div className="review-status">
                          {selectedAnswers[question.id] === question.correctAnswer ? (
                            <CheckCircle className="review-status-icon review-status-icon--correct" />
                          ) : (
                            <X className="review-status-icon review-status-icon--incorrect" />
                          )}
                          <span className={`review-status-text ${
                            selectedAnswers[question.id] === question.correctAnswer 
                              ? 'review-status-text--correct' 
                              : 'review-status-text--incorrect'
                          }`}>
                            {selectedAnswers[question.id] === question.correctAnswer ? 'Correct' : 'Incorrect'}
                          </span>
                        </div>
                      </div>
                      {selectedAnswers[question.id] !== question.correctAnswer && (
                        <div className="review-correct-answer">
                          <span className="correct-answer-label">
                            Correct: {question.correctAnswer}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="assignment-modal__footer">
          {!showResults ? (
            <>
              <button
                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="assignment-nav-button assignment-nav-button--previous"
              >
                Previous
              </button>
              
              <div className="assignment-nav-actions">
                {currentQuestionIndex === assignment.questions.length - 1 ? (
                  <button
                    onClick={handleSubmit}
                    disabled={!selectedAnswers[currentQuestion.id]}
                    className="assignment-action-button assignment-action-button--submit"
                  >
                    Submit Assessment
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                    disabled={!selectedAnswers[currentQuestion.id]}
                    className="assignment-action-button assignment-action-button--next"
                  >
                    Next Question
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="assignment-complete-actions">
              <button
                onClick={handleComplete}
                className="assignment-complete-button"
              >
                Continue to Next Lesson
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignmentComponent;