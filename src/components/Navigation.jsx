import React from 'react';
import { ChevronLeft, ChevronRight, Trophy, ArrowLeft, ArrowRight, Download, CheckCircle } from 'lucide-react';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectAllLessonsCompleted, selectCertificateEarned, selectCanTakeFinalAssessment, selectFinalAssessmentPassed } from '../selectors/courseSelectors';
import './Navigation.css';

const Navigation = ({
  currentLesson,
  previousLesson,
  nextLesson,
  isLastLesson,
  onNavigate,
  onFinalAssessment
}) => {
  const allLessonsCompleted = useAppSelector(selectAllLessonsCompleted);
  const certificateEarned = useAppSelector(selectCertificateEarned);
  const canTakeFinalAssessment = useAppSelector(selectCanTakeFinalAssessment);
  const finalAssessmentPassed = useAppSelector(selectFinalAssessmentPassed);
  
  // Show certificate download if certificate is earned
  const showCertificateDownload = certificateEarned && finalAssessmentPassed;
  
  // Show final assessment if all lessons completed but final assessment not passed
  const showFinalAssessment = isLastLesson && canTakeFinalAssessment && !finalAssessmentPassed;
  
  // Show completed status if final assessment is passed
  const showCompleted = isLastLesson && finalAssessmentPassed;
  
  return (
    <div className="navigation">
      <div className="navigation__content">
        <div className="navigation__previous">
          {previousLesson && (
            <button
              onClick={() => onNavigate(previousLesson.id)}
              className="navigation-button navigation-button--previous"
            >
              <div className="navigation-button__icon">
                <ArrowLeft className="nav-icon" />
              </div>
              <div className="navigation-button__content">
                <div className="navigation-button__label">Previous Lesson</div>
                <div className="navigation-button__title">{previousLesson.title}</div>
              </div>
            </button>
          )}
        </div>

        <div className="navigation__current">
          {currentLesson && (
            <div className="current-lesson">
              <div className="current-lesson__label">Current Lesson</div>
              <div className="current-lesson__title">
                {currentLesson.title}
              </div>
            </div>
          )}
        </div>

        <div className="navigation__next">
          {showCertificateDownload ? (
            <button
              onClick={onFinalAssessment}
              className="navigation-button navigation-button--certificate"
            >
              <div className="navigation-button__content">
                <div className="navigation-button__label">Download</div>
                <div className="navigation-button__title">Certificate</div>
              </div>
              <div className="navigation-button__icon">
                <Download className="nav-icon" />
              </div>
            </button>
          ) : showCompleted ? (
            <div className="navigation-button navigation-button--completed">
              <div className="navigation-button__content">
                <div className="navigation-button__label">Course</div>
                <div className="navigation-button__title">Completed!</div>
              </div>
              <div className="navigation-button__icon">
                <CheckCircle className="nav-icon" />
              </div>
            </div>
          ) : showFinalAssessment ? (
            <button
              onClick={onFinalAssessment}
              className="navigation-button navigation-button--final"
            >
              <div className="navigation-button__content">
                <div className="navigation-button__label">Ready for</div>
                <div className="navigation-button__title">Final Assessment</div>
              </div>
              <div className="navigation-button__icon">
                <Trophy className="nav-icon" />
              </div>
            </button>
          ) : nextLesson && !nextLesson.isLocked ? (
            <button
              onClick={() => onNavigate(nextLesson.id)}
              className="navigation-button navigation-button--next"
            >
              <div className="navigation-button__content">
                <div className="navigation-button__label">Next Lesson</div>
                <div className="navigation-button__title">{nextLesson.title}</div>
              </div>
              <div className="navigation-button__icon">
                <ArrowRight className="nav-icon" />
              </div>
            </button>
          ) : nextLesson?.isLocked ? (
            <div className="navigation-button navigation-button--locked">
              <div className="navigation-button__content">
                <div className="navigation-button__label">Next (Locked)</div>
                <div className="navigation-button__title">{nextLesson.title}</div>
              </div>
              <div className="navigation-button__icon">
                <ArrowRight className="nav-icon" />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navigation;