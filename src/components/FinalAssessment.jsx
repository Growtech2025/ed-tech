import React, { useState, useEffect } from 'react';
import { CheckCircle, X, Clock, AlertCircle, Trophy, Download, Briefcase, Star, Award, RotateCcw } from 'lucide-react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { earnCertificate, incrementFinalAssessmentAttempts, completeCourse, passFinalAssessment } from '../store/slices/courseSlice';
import { selectFinalAssessmentAttempts, selectMaxFinalAssessmentAttempts, selectCanRetakeFinalAssessment } from '../selectors/courseSelectors';
import CertificateComponent from './Certificate';
import './FinalAssessment.css';

const FinalAssessmentComponent = ({ 
  isVisible, 
  onComplete, 
  onClose, 
  courseTitle,
  studentName = "Aviraj" 
}) => {
  const dispatch = useAppDispatch();
  const attempts = useAppSelector(selectFinalAssessmentAttempts);
  const maxAttempts = useAppSelector(selectMaxFinalAssessmentAttempts);
  const canRetake = useAppSelector(selectCanRetakeFinalAssessment);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [isCompleted, setIsCompleted] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [courseCompleted, setCourseCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  // Comprehensive final assessment with questions from all topics including coding
  const finalAssessment = {
    id: 'final-comprehensive-assessment',
    title: 'Final Course Assessment - Full Stack Web Development',
    type: 'mixed',
    isCompleted: false,
    questions: [
      // HTML Questions
      {
        id: 'final-q1',
        question: 'What does HTML stand for and what is its primary purpose?',
        type: 'mcq',
        options: [
          'Hyper Text Markup Language - for structuring web content',
          'High Tech Modern Language - for programming',
          'Home Tool Markup Language - for home automation',
          'Hyperlink and Text Markup Language - for creating links'
        ],
        correctAnswer: 'Hyper Text Markup Language - for structuring web content'
      },
      // {
      //   id: 'final-q2',
      //   question: 'Create a complete HTML document with a title "Final Test" and a heading saying "Web Development Quiz"',
      //   type: 'coding',
      //   code: '<!-- Write your complete HTML document here -->',
      //   language: 'html',
      //   correctAnswer: '<!DOCTYPE html>\n<html>\n<head>\n<title>Final Test</title>\n</head>\n<body>\n<h1>Web Development Quiz</h1>\n</body>\n</html>'
      // },
      {
        id: 'final-q3',
        question: 'Which HTML element is used for the largest heading?',
        type: 'mcq',
        options: ['<h1>', '<h6>', '<header>', '<head>'],
        correctAnswer: '<h1>'
      },
      // CSS Questions
      // {
      //   id: 'final-q4',
      //   question: 'Write CSS to create a flexbox container that centers its content both horizontally and vertically',
      //   type: 'coding',
      //   code: '/* Write your CSS here */\n.container {\n  \n}',
      //   language: 'css',
      //   correctAnswer: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}'
      // },
      {
        id: 'final-q5',
        question: 'What does the CSS Box Model consist of?',
        type: 'mcq',
        options: [
          'Content, Padding, Border, Margin',
          'Header, Body, Footer, Sidebar',
          'Width, Height, Color, Font',
          'Top, Right, Bottom, Left'
        ],
        correctAnswer: 'Content, Padding, Border, Margin'
      },
      // JavaScript Questions
      // {
      //   id: 'final-q6',
      //   question: 'Create a JavaScript function that takes an array of numbers and returns the sum of all elements',
      //   type: 'coding',
      //   code: '// Write your function here\nfunction sumArray(numbers) {\n  \n}',
      //   language: 'javascript',
      //   correctAnswer: 'function sumArray(numbers) {\n  return numbers.reduce((sum, num) => sum + num, 0);\n}'
      // },
      {
        id: 'final-q7',
        question: 'What is the difference between let, const, and var in JavaScript?',
        type: 'mcq',
        options: [
          'let and const have block scope, var has function scope',
          'They are all the same',
          'var is newer than let and const',
          'const can be reassigned, let cannot'
        ],
        correctAnswer: 'let and const have block scope, var has function scope'
      },
      // {
      //   id: 'final-q8',
      //   question: 'Write JavaScript code to add a click event listener to all buttons that shows an alert with "Button clicked!"',
      //   type: 'coding',
      //   code: '// Write your event listener code here\n',
      //   language: 'javascript',
      //   correctAnswer: 'document.querySelectorAll("button").forEach(button => {\n  button.addEventListener("click", () => {\n    alert("Button clicked!");\n  });\n});'
      // },
      // // React Questions
      {
        id: 'final-q9',
        question: 'What is JSX in React?',
        type: 'mcq',
        options: [
          'JavaScript XML - a syntax extension for JavaScript',
          'Java Syntax Extension',
          'JSON XML format',
          'JavaScript eXtended'
        ],
        correctAnswer: 'JavaScript XML - a syntax extension for JavaScript'
      },
      // {
      //   id: 'final-q10',
      //   question: 'Create a React component that manages a todo list with add and remove functionality',
      //   type: 'coding',
      //   code: '// Complete the TodoList component\nimport { useState } from "react";\n\nfunction TodoList() {\n  const [todos, setTodos] = useState([]);\n  const [input, setInput] = useState("");\n  \n  // Add your functions here\n  \n  return (\n    <div>\n      {/* Add your JSX here */}\n    </div>\n  );\n}',
      //   language: 'javascript',
      //   correctAnswer: 'import { useState } from "react";\n\nfunction TodoList() {\n  const [todos, setTodos] = useState([]);\n  const [input, setInput] = useState("");\n  \n  const addTodo = () => {\n    if (input.trim()) {\n      setTodos([...todos, { id: Date.now(), text: input }]);\n      setInput("");\n    }\n  };\n  \n  const removeTodo = (id) => {\n    setTodos(todos.filter(todo => todo.id !== id));\n  };\n  \n  return (\n    <div>\n      <input value={input} onChange={(e) => setInput(e.target.value)} />\n      <button onClick={addTodo}>Add</button>\n      <ul>\n        {todos.map(todo => (\n          <li key={todo.id}>\n            {todo.text}\n            <button onClick={() => removeTodo(todo.id)}>Remove</button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}'
      // },
      // Node.js Questions
      {
        id: 'final-q11',
        question: 'What is Node.js?',
        type: 'mcq',
        options: [
          'A JavaScript runtime built on Chrome\'s V8 engine',
          'A JavaScript framework',
          'A database management system',
          'A web browser'
        ],
        correctAnswer: 'A JavaScript runtime built on Chrome\'s V8 engine'
      },
      // {
      //   id: 'final-q12',
      //   question: 'Create a Node.js Express route that handles POST requests to "/api/users" and responds with JSON',
      //   type: 'coding',
      //   code: '// Complete the Express route\nconst express = require("express");\nconst app = express();\n\n// Add your route here\n',
      //   language: 'javascript',
      //   correctAnswer: 'const express = require("express");\nconst app = express();\n\napp.use(express.json());\n\napp.post("/api/users", (req, res) => {\n  const userData = req.body;\n  res.json({ message: "User created", user: userData });\n});'
      // },
      // General Web Development
      {
        id: 'final-q13',
        question: 'What are the key principles of responsive web design?',
        type: 'mcq',
        options: [
          'Flexible grids, flexible images, and media queries',
          'Fixed layouts and absolute positioning',
          'Table-based layouts',
          'Flash-based animations'
        ],
        correctAnswer: 'Flexible grids, flexible images, and media queries'
      },
      // {
      //   id: 'final-q14',
      //   question: 'Write CSS media query for mobile devices (max-width: 768px) that hides the sidebar',
      //   type: 'coding',
      //   code: '/* Write your media query here */\n',
      //   language: 'css',
      //   correctAnswer: '@media (max-width: 768px) {\n  .sidebar {\n    display: none;\n  }\n}'
      // },
      {
        id: 'final-q15',
        question: 'What is the most important consideration in modern web development?',
        type: 'mcq',
        options: [
          'User Experience, Performance, Accessibility, and Security',
          'Visual design only',
          'Code complexity',
          'File size reduction'
        ],
        correctAnswer: 'User Experience, Performance, Accessibility, and Security'
      }
    ]
  };

  useEffect(() => {
    if (!isVisible) return;

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
  }, [isVisible]);

  const currentQuestion = finalAssessment.questions[currentQuestionIndex];

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
    
    // Increment attempt count
    dispatch(incrementFinalAssessmentAttempts());
    
    const score = calculateScore();
    setFinalScore(score);
    
    if (score >= 70) { // Pass threshold is 70%
      setCourseCompleted(true);
      dispatch(passFinalAssessment()); // Mark final assessment as passed
      dispatch(completeCourse()); // Mark course as completed
      dispatch(earnCertificate()); // Earn certificate
    }
  };

  const calculateScore = () => {
    let correct = 0;
    finalAssessment.questions.forEach(question => {
      if (question.type === 'mcq' && selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      } else if (question.type === 'coding') {
        // For coding questions, check if the answer contains key elements
        const userAnswer = selectedAnswers[question.id] || '';
        const correctAnswer = question.correctAnswer || '';
        
        // Simple check - in a real application, you'd want more sophisticated code evaluation
        if (userAnswer.trim().length > 0 && 
            userAnswer.toLowerCase().includes(correctAnswer.toLowerCase().split('\n')[0].split(' ')[0])) {
          correct++;
        }
      }
    });
    return Math.round((correct / finalAssessment.questions.length) * 100);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const handleComplete = () => {
    if (courseCompleted) {
      setShowCertificate(true);
    } else {
      onComplete();
      onClose();
    }
  };

  const handleRetry = () => {
    // Reset assessment state
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setIsCompleted(false);
    setCourseCompleted(false);
    setTimeLeft(1800); // Reset timer to 30 minutes
    setFinalScore(0);
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'score-outstanding';
    if (score >= 80) return 'score-excellent';
    if (score >= 70) return 'score-good';
    return 'score-needs-improvement';
  };

  const getScoreMessage = (score) => {
    if (score >= 90) return 'Outstanding! You have mastered the course material.';
    if (score >= 80) return 'Excellent work! You have a strong understanding.';
    if (score >= 70) return 'Good job! You have passed the assessment.';
    return 'You need more practice. Please review the course material and try again.';
  };

  if (!isVisible) return null;

  if (showCertificate) {
    return (
      <CertificateComponent
        isVisible={showCertificate}
        onClose={() => {
          setShowCertificate(false);
          onComplete();
          onClose();
        }}
        studentName={studentName}
        courseTitle={courseTitle}
        completionDate={new Date().toLocaleDateString()}
        score={finalScore}
      />
    );
  }

  return (
    <div className="final-assessment-modal">
      <div className="final-assessment-modal__content">
        {/* Header */}
        <div className="final-assessment-modal__header">
          <div className="final-assessment-header__content">
            <h2 className="final-assessment-header__title">{finalAssessment.title}</h2>
            <p className="final-assessment-header__subtitle">
              {finalAssessment.questions.length} Questions • Passing Score: 70% • Mixed Format
              {attempts > 0 && (
                <span className="attempt-counter"> • Attempt {attempts + 1} of {maxAttempts}</span>
              )}
            </p>
          </div>
          <div className="final-assessment-header__controls">
            <div className="final-assessment-timer">
              <Clock className="timer-icon" />
              <span className="timer-text">{formatTime(timeLeft)}</span>
            </div>
            <button
              onClick={onClose}
              className="final-assessment-close-button"
            >
              <X className="icon" />
            </button>
          </div>
        </div>

        <div className="final-assessment-modal__body">
          {!showResults ? (
            <div>
              {/* Progress */}
              <div className="final-assessment-progress">
                <div className="progress-info">
                  <span className="progress-current">Question {currentQuestionIndex + 1} of {finalAssessment.questions.length}</span>
                  <span className="progress-percentage">{Math.round(((currentQuestionIndex + 1) / finalAssessment.questions.length) * 100)}% Complete</span>
                </div>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar-fill"
                    style={{ width: `${((currentQuestionIndex + 1) / finalAssessment.questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="final-assessment-question">
                <div className="question-header">
                  <h3 className="question-title">
                    {currentQuestion.question}
                  </h3>
                  <div className="question-type">
                    {currentQuestion.type === 'mcq' ? 'Multiple Choice' : 'Coding Exercise'}
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
                      onDragStart={(e) => e.preventDefault()}
                      onDrop={(e) => e.preventDefault()}
                    />
                    <p className="coding-warning">
                      <AlertCircle className="warning-icon" />
                      Copy, paste, and drag & drop are disabled for this assessment
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="final-assessment-results">
              <div className="results-header">
                {courseCompleted ? (
                  <Trophy className="results-icon results-icon--success" />
                ) : (
                  <AlertCircle className="results-icon results-icon--warning" />
                )}
                <h3 className="results-title">
                  {courseCompleted ? 'Congratulations! Course Completed!' : 'Assessment Completed'}
                </h3>
                <p className={`results-score ${getScoreColor(finalScore)}`}>
                  Your Score: {finalScore}%
                </p>
                <p className="results-message">{getScoreMessage(finalScore)}</p>
                
                {/* Attempt Information */}
                <div className="attempt-info">
                  <p className="attempt-text">
                    Attempt {attempts} of {maxAttempts}
                    {!courseCompleted && canRetake && (
                      <span className="retry-available"> • {maxAttempts - attempts} attempts remaining</span>
                    )}
                  </p>
                </div>
              </div>
              
              {courseCompleted && (
                <div className="certificate-preview">
                  <div className="certificate-preview__content">
                    <Award className="certificate-preview__icon" />
                    <h4 className="certificate-preview__title">You've earned a certificate!</h4>
                  </div>
                  <p className="certificate-preview__description">
                    You have successfully completed the Full Stack Web Development course with a passing score.
                    Your certificate is ready for download.
                  </p>
                </div>
              )}

              {/* Retry Information for Failed Attempts */}
              {!courseCompleted && canRetake && (
                <div className="retry-info">
                  <div className="retry-info__content">
                    <RotateCcw className="retry-info__icon" />
                    <h4 className="retry-info__title">Don't give up!</h4>
                  </div>
                  <p className="retry-info__description">
                    You can retake this assessment. Review the course material and try again when you're ready.
                  </p>
                  <div className="retry-tips">
                    <h5 className="retry-tips__title">Tips for success:</h5>
                    <ul className="retry-tips__list">
                      <li>Review the lesson videos and practice coding exercises</li>
                      <li>Focus on the topics where you scored lower</li>
                      <li>Take your time and read each question carefully</li>
                      <li>Practice writing code without copy/paste to build muscle memory</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* No More Attempts Warning */}
              {!courseCompleted && !canRetake && (
                <div className="no-attempts-warning">
                  <div className="no-attempts-warning__content">
                    <AlertCircle className="no-attempts-warning__icon" />
                    <h4 className="no-attempts-warning__title">Maximum attempts reached</h4>
                  </div>
                  <p className="no-attempts-warning__description">
                    You have used all {maxAttempts} attempts for this assessment. Please contact your instructor for further assistance.
                  </p>
                </div>
              )}

              <div className="results-review">
                <h4 className="review-title">Review Your Answers</h4>
                <div className="review-grid">
                  {finalAssessment.questions.map((question, index) => (
                    <div key={question.id} className="review-item">
                      <p className="review-question">
                        Q{index + 1}: {question.question.substring(0, 40)}...
                      </p>
                      <div className="review-result">
                        <div className="review-type">{question.type === 'mcq' ? 'MCQ' : 'Code'}</div>
                        {question.type === 'mcq' ? (
                          selectedAnswers[question.id] === question.correctAnswer ? (
                            <CheckCircle className="review-status-icon review-status-icon--correct" />
                          ) : (
                            <X className="review-status-icon review-status-icon--incorrect" />
                          )
                        ) : (
                          <div className="review-status-text">Submitted</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="final-assessment-modal__footer">
          {!showResults ? (
            <>
              <button
                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="final-assessment-nav-button final-assessment-nav-button--previous"
              >
                Previous
              </button>
              
              <div className="final-assessment-nav-actions">
                {currentQuestionIndex === finalAssessment.questions.length - 1 ? (
                  <button
                    onClick={handleSubmit}
                    disabled={!selectedAnswers[currentQuestion.id]}
                    className="final-assessment-action-button final-assessment-action-button--submit"
                  >
                    Submit Final Assessment
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                    disabled={!selectedAnswers[currentQuestion.id]}
                    className="final-assessment-action-button final-assessment-action-button--next"
                  >
                    Next Question
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="final-assessment-complete-actions">
              {courseCompleted ? (
                <button
                  onClick={handleComplete}
                  className="final-assessment-complete-button final-assessment-complete-button--certificate"
                >
                  <Award className="button-icon" />
                  <span>Get Certificate</span>
                </button>
              ) : canRetake ? (
                <>
                  <button
                    onClick={handleComplete}
                    className="final-assessment-complete-button final-assessment-complete-button--review"
                  >
                    Review Course Material
                  </button>
                  <button
                    onClick={handleRetry}
                    className="final-assessment-complete-button final-assessment-complete-button--retry"
                  >
                    <RotateCcw className="button-icon" />
                    <span>Try Again</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={handleComplete}
                  className="final-assessment-complete-button final-assessment-complete-button--review"
                >
                  Back to Course
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinalAssessmentComponent;