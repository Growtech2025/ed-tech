import React, { useEffect } from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { 
  loadProgressFromStorage, 
  markLessonComplete, 
  navigateToLesson 
} from '../store/slices/courseSlice';
import {
  setShowAssignment,
  setCurrentAssignment,
  setShowFinalAssessment,
  closeAllModals
} from '../store/slices/uiSlice';
import {
  selectCourseData,
  selectCurrentLesson,
  selectNextLesson,
  selectPreviousLesson,
  selectIsLastLesson,
  selectCurrentAssignment
} from '../selectors/courseSelectors';
import {
  selectShowAssignment,
  selectCurrentAssignmentUI,
  selectShowFinalAssessment
} from '../selectors/uiSelectors';
import ProgressBar from './ProgressBar';
import VideoPlayer from './VideoPlayer';
import CourseContent from './CourseContent';
import AssignmentComponent from './Assignment';
import FinalAssessmentComponent from './FinalAssessment';
import Navigation from './Navigation';
import LessonDescription from './LessonDescription';
import CertificateComponent from './Certificate';
import { GraduationCap, BookOpen, Users, Star } from 'lucide-react';
import './CourseApp.css';

function CourseApp() {
  const dispatch = useAppDispatch();
  
  // Course selectors
  const courseData = useAppSelector(selectCourseData);
  const currentLesson = useAppSelector(selectCurrentLesson);
  const nextLesson = useAppSelector(selectNextLesson);
  const previousLesson = useAppSelector(selectPreviousLesson);
  const isLastLesson = useAppSelector(selectIsLastLesson);
  const currentAssignment = useAppSelector(selectCurrentAssignment);
  const certificateEarned = useAppSelector(state => state.course.certificateEarned);
  
  // UI selectors
  const showAssignment = useAppSelector(selectShowAssignment);
  const currentAssignmentUI = useAppSelector(selectCurrentAssignmentUI);
  const showFinalAssessment = useAppSelector(selectShowFinalAssessment);

  // Local state for certificate modal
  const [showCertificateModal, setShowCertificateModal] = React.useState(false);

  useEffect(() => {
    dispatch(loadProgressFromStorage());
  }, [dispatch]);

  const handleVideoComplete = () => {
    if (!currentLesson) return;
    
    dispatch(markLessonComplete(currentLesson.id));
    
    // Show assignment if available
    if (currentAssignment) {
      dispatch(setCurrentAssignment(currentAssignment));
      dispatch(setShowAssignment(true));
    }
  };

  const handleAssignmentComplete = () => {
    dispatch(setShowAssignment(false));
    dispatch(setCurrentAssignment(null));
  };

  const handleFinalAssessment = () => {
    // If certificate is earned, show certificate modal directly
    if (certificateEarned) {
      setShowCertificateModal(true);
      return;
    }
    // Otherwise show final assessment
    dispatch(setShowFinalAssessment(true));
  };

  const handleLessonSelect = (lessonId) => {
    dispatch(navigateToLesson(lessonId));
  };

  const handleNavigate = (lessonId) => {
    dispatch(navigateToLesson(lessonId));
  };

  const handleCloseCertificate = () => {
    setShowCertificateModal(false);
  };

  return (
    <div className="course-app">
      {/* Background Pattern */}
      <div className="background-pattern"></div>
      
      <div className="course-app__content">
        <div className="course-app__container">
          {/* Enhanced Header */}
          <div className="course-app__header">
            <div className="course-header">
              <div className="course-header__main">
                <div className="course-header__icon">
                  <GraduationCap className="icon" />
                </div>
                <div className="course-header__text">
                  <h1 className="course-header__title">
                    {courseData.title}
                  </h1>
                  <p className="course-header__description">{courseData.description}</p>
                </div>
              </div>
              
              <div className="course-header__stats">
                <div className="stat-item">
                  <div className="stat-item__label">
                    <BookOpen className="stat-icon" />
                    <span>Lessons</span>
                  </div>
                  <div className="stat-item__value">7</div>
                </div>
                <div className="stat-item">
                  <div className="stat-item__label">
                    <Users className="stat-icon" />
                    <span>Students</span>
                  </div>
                  <div className="stat-item__value">12.5k</div>
                </div>
                <div className="stat-item">
                  <div className="stat-item__label">
                    <Star className="stat-icon" />
                    <span>Rating</span>
                  </div>
                  <div className="stat-item__value">4.9</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Progress Bar */}
          <ProgressBar course={courseData} />

          <div className="course-app__grid">
            {/* Main Content Area */}
            <div className="course-app__main">
              {/* Video Player Section */}
              {currentLesson ? (
                <VideoPlayer
                  lesson={currentLesson}
                  onVideoComplete={handleVideoComplete}
                />
              ) : (
                <div className="welcome-section">
                  <div className="welcome-content">
                    <div className="welcome-icon">
                      <BookOpen className="icon" />
                    </div>
                    <h2 className="welcome-title">
                      Welcome to your learning journey!
                    </h2>
                    <p className="welcome-description">
                      Select a lesson from the course content to begin your path to becoming a Full Stack Developer.
                    </p>
                    <div className="welcome-status">
                      <div className="status-indicator"></div>
                      <span>Ready to start learning</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Lesson Description */}
              {currentLesson && (
                <LessonDescription lesson={currentLesson} />
              )}

              {/* Navigation */}
              {currentLesson && (
                <Navigation
                  currentLesson={currentLesson}
                  previousLesson={previousLesson}
                  nextLesson={nextLesson}
                  isLastLesson={isLastLesson}
                  onNavigate={handleNavigate}
                  onFinalAssessment={handleFinalAssessment}
                />
              )}
            </div>

            {/* Course Content Sidebar */}
            <div className="course-app__sidebar">
              <div className="sidebar-sticky">
                <CourseContent
                  course={courseData}
                  currentLesson={currentLesson}
                  onLessonSelect={handleLessonSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assignment Modal */}
      {currentAssignmentUI && (
        <AssignmentComponent
          assignment={currentAssignmentUI}
          isVisible={showAssignment}
          onComplete={handleAssignmentComplete}
          onClose={() => dispatch(closeAllModals())}
        />
      )}

      {/* Final Assessment Modal */}
      <FinalAssessmentComponent
        isVisible={showFinalAssessment}
        onComplete={() => dispatch(setShowFinalAssessment(false))}
        onClose={() => dispatch(setShowFinalAssessment(false))}
        courseTitle={courseData.title}
        studentName="John Doe"
      />

      {/* Certificate Modal */}
      {showCertificateModal && (
        <CertificateComponent
          isVisible={showCertificateModal}
          onClose={handleCloseCertificate}
          studentName="John Doe"
          courseTitle={courseData.title}
          completionDate={new Date().toLocaleDateString()}
          score={85} // This should come from the final assessment score
        />
      )}
    </div>
  );
}

export default CourseApp;