import React from 'react';
import { TrendingUp, Target, Clock } from 'lucide-react';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectAllLessonsCompleted, selectFinalAssessmentPassed, selectIsCourseFullyComplete } from '../selectors/courseSelectors';
import './ProgressBar.css';

const ProgressBar = ({ course }) => {
  const allLessonsCompleted = useAppSelector(selectAllLessonsCompleted);
  const finalAssessmentPassed = useAppSelector(selectFinalAssessmentPassed);
  const isCourseFullyComplete = useAppSelector(selectIsCourseFullyComplete);
  
  const progress = course.totalProgress;
  const totalLessons = course.topics.reduce((acc, topic) => 
    acc + topic.subtopics.reduce((subAcc, subtopic) => subAcc + subtopic.lessons.length, 0), 0
  );
  
  // Calculate completed lessons
  let completedLessons = 0;
  course.topics.forEach(topic => {
    topic.subtopics.forEach(subtopic => {
      subtopic.lessons.forEach(lesson => {
        if (lesson.isCompleted) {
          completedLessons++;
        }
      });
    });
  });

  return (
    <div className="progress-bar">
      <div className="progress-bar__header">
        <div className="progress-bar__title">
          <div className="progress-bar__icon">
            <TrendingUp className="icon" />
          </div>
          <h2>Course Progress</h2>
        </div>
        <div className="progress-bar__stats">
          <div className="progress-stat">
            <div className="progress-stat__value">{progress}%</div>
            <div className="progress-stat__label">Complete</div>
          </div>
          <div className="progress-stat">
            <div className="progress-stat__value">{completedLessons}/{totalLessons}</div>
            <div className="progress-stat__label">Lessons</div>
          </div>
          <div className="progress-stat">
            <div className="progress-stat__value">{finalAssessmentPassed ? '✓' : '○'}</div>
            <div className="progress-stat__label">Final Test</div>
          </div>
        </div>
      </div>
      
      <div className="progress-bar__track">
        <div className="progress-bar__bg">
          <div 
            className="progress-bar__fill"
            style={{ width: `${progress}%` }}
          >
            <div className="progress-bar__shine"></div>
          </div>
        </div>
        
        {/* Progress milestones */}
        <div className="progress-milestones">
          <div className={`milestone ${progress >= 25 ? 'milestone--active' : ''}`}>
            <div className="milestone__dot"></div>
            <span className="milestone__label">25%</span>
          </div>
          <div className={`milestone ${progress >= 50 ? 'milestone--active' : ''}`}>
            <div className="milestone__dot"></div>
            <span className="milestone__label">50%</span>
          </div>
          <div className={`milestone ${progress >= 75 ? 'milestone--active' : ''}`}>
            <div className="milestone__dot"></div>
            <span className="milestone__label">75%</span>
          </div>
          <div className={`milestone ${allLessonsCompleted ? 'milestone--active' : ''}`}>
            <div className="milestone__dot"></div>
            <span className="milestone__label">Lessons</span>
          </div>
          <div className={`milestone ${isCourseFullyComplete ? 'milestone--complete' : ''}`}>
            <Target className="milestone__icon" />
            <span className="milestone__label">Complete</span>
          </div>
        </div>
      </div>
      
      {/* Status Messages */}
      {allLessonsCompleted && !finalAssessmentPassed && (
        <div className="progress-status">
          <div className="progress-status__content progress-status__content--ready">
            <Clock className="progress-status__icon" />
            <span>All lessons completed! Ready for final assessment.</span>
          </div>
        </div>
      )}
      
      {isCourseFullyComplete && (
        <div className="progress-complete">
          <div className="progress-complete__content">
            <Target className="progress-complete__icon" />
            <span>Congratulations! Course completed successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;