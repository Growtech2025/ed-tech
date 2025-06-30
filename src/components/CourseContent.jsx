import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Play, Lock, CheckCircle, FolderOpen, Folder, Clock, BookOpen, Menu, X } from 'lucide-react';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectCourseData, selectCurrentLesson } from '../selectors/courseSelectors';
import './CourseContent.css';

const CourseContent = ({ course, currentLesson, onLessonSelect }) => {
  const [expandedTopics, setExpandedTopics] = useState(new Set(['topic-1']));
  const [expandedSubtopics, setExpandedSubtopics] = useState(new Set(['subtopic-1-1']));
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTopic = (topicId) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(topicId)) {
      newExpanded.delete(topicId);
    } else {
      newExpanded.add(topicId);
    }
    setExpandedTopics(newExpanded);
  };

  const toggleSubtopic = (subtopicId) => {
    const newExpanded = new Set(expandedSubtopics);
    if (newExpanded.has(subtopicId)) {
      newExpanded.delete(subtopicId);
    } else {
      newExpanded.add(subtopicId);
    }
    setExpandedSubtopics(newExpanded);
  };

  const handleLessonClick = (lesson) => {
    if (!lesson.isLocked) {
      onLessonSelect(lesson.id);
      setIsMobileMenuOpen(false); // Close mobile menu after selection
    }
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes}m`;
  };

  const getTotalDuration = () => {
    return course.topics.reduce((total, topic) => 
      total + topic.subtopics.reduce((subTotal, subtopic) => 
        subTotal + subtopic.lessons.reduce((lessonTotal, lesson) => lessonTotal + lesson.duration, 0), 0
      ), 0
    );
  };

  const totalMinutes = Math.floor(getTotalDuration() / 60);
  const totalLessons = course.topics.reduce((acc, topic) => 
    acc + topic.subtopics.reduce((subAcc, subtopic) => subAcc + subtopic.lessons.length, 0), 0
  );

  const CourseContentBody = () => (
    <>
      {/* Enhanced Header */}
      <div className="course-content__header">
        <div className="course-content__title">
          <div className="course-content__icon">
            <BookOpen className="icon" />
          </div>
          <h2>Course Content</h2>
        </div>
        <div className="course-content__stats">
          <div className="course-stat">
            <div className="course-stat__value">{totalLessons}</div>
            <div className="course-stat__label">Lessons</div>
          </div>
          <div className="course-stat">
            <div className="course-stat__value">{totalMinutes}m</div>
            <div className="course-stat__label">Duration</div>
          </div>
        </div>
      </div>

      <div className="course-content__body">
        {course.topics.map((topic) => (
          <div key={topic.id} className="topic-section">
            <button
              onClick={() => toggleTopic(topic.id)}
              className="topic-button"
            >
              <div className="topic-button__content">
                {expandedTopics.has(topic.id) ? (
                  <FolderOpen className="topic-icon topic-icon--open" />
                ) : (
                  <Folder className="topic-icon" />
                )}
                <span className="topic-title">{topic.title}</span>
                {topic.isCompleted && (
                  <div className="completion-badge">
                    <CheckCircle className="completion-icon" />
                  </div>
                )}
              </div>
              {expandedTopics.has(topic.id) ? (
                <ChevronDown className="chevron-icon" />
              ) : (
                <ChevronRight className="chevron-icon" />
              )}
            </button>

            {expandedTopics.has(topic.id) && (
              <div className="subtopics-container">
                {topic.subtopics.map((subtopic) => (
                  <div key={subtopic.id} className="subtopic-section">
                    <button
                      onClick={() => toggleSubtopic(subtopic.id)}
                      className="subtopic-button"
                    >
                      <div className="subtopic-button__content">
                        <span className="subtopic-title">{subtopic.title}</span>
                        {subtopic.isCompleted && (
                          <div className="completion-badge">
                            <CheckCircle className="completion-icon" />
                          </div>
                        )}
                      </div>
                      {expandedSubtopics.has(subtopic.id) ? (
                        <ChevronDown className="chevron-icon" />
                      ) : (
                        <ChevronRight className="chevron-icon" />
                      )}
                    </button>

                    {expandedSubtopics.has(subtopic.id) && (
                      <div className="lessons-container">
                        {subtopic.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className={`lesson-item ${
                              lesson.isLocked 
                                ? 'lesson-item--locked' 
                                : lesson.id === currentLesson?.id
                                  ? 'lesson-item--current'
                                  : 'lesson-item--available'
                            }`}
                            onClick={() => handleLessonClick(lesson)}
                            title={lesson.isLocked ? 'Complete previous lesson to unlock' : ''}
                          >
                            <div className="lesson-item__content">
                              <div className={`lesson-icon ${
                                lesson.isLocked 
                                  ? 'lesson-icon--locked' 
                                  : lesson.isCompleted 
                                    ? 'lesson-icon--completed' 
                                    : lesson.id === currentLesson?.id
                                      ? 'lesson-icon--current'
                                      : 'lesson-icon--available'
                              }`}>
                                {lesson.isLocked ? (
                                  <Lock className="icon" />
                                ) : lesson.isCompleted ? (
                                  <CheckCircle className="icon" />
                                ) : (
                                  <Play className="icon" />
                                )}
                              </div>
                              <div className="lesson-info">
                                <span className={`lesson-title ${
                                  lesson.isLocked ? 'lesson-title--locked' : ''
                                }`}>
                                  {lesson.title}
                                </span>
                              </div>
                            </div>
                            <div className="lesson-duration">
                              <Clock className="duration-icon" />
                              <span>{formatDuration(lesson.duration)}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-button"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu className="icon" />
        <span>Course Content</span>
      </button>

      {/* Desktop Course Content */}
      <div className="course-content course-content--desktop">
        <CourseContentBody />
      </div>

      {/* Mobile Course Content Modal */}
      {isMobileMenuOpen && (
        <div className="course-content-modal">
          <div className="course-content-modal__overlay" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="course-content-modal__content">
            <div className="course-content-modal__header">
              <h3>Course Content</h3>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="course-content-modal__close"
              >
                <X className="icon" />
              </button>
            </div>
            <div className="course-content course-content--mobile">
              <CourseContentBody />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseContent;