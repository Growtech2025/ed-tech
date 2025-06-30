import { createSelector } from '@reduxjs/toolkit';
import { findNextLessonHelper, findPreviousLessonHelper, areAllLessonsCompletedHelper } from '../store/slices/courseSlice';

export const selectCourseData = (state) => state.course.courseData;
export const selectCurrentLesson = (state) => state.course.currentLesson;
export const selectAssignments = (state) => state.course.assignments;
export const selectCourseLoading = (state) => state.course.isLoading;
export const selectCourseError = (state) => state.course.error;
export const selectCourseCompleted = (state) => state.course.courseCompleted;
export const selectCertificateEarned = (state) => state.course.certificateEarned;
export const selectFinalAssessmentAttempts = (state) => state.course.finalAssessmentAttempts;
export const selectMaxFinalAssessmentAttempts = (state) => state.course.maxFinalAssessmentAttempts;
export const selectFinalAssessmentPassed = (state) => state.course.finalAssessmentPassed;

export const selectNextLesson = createSelector(
  [selectCourseData, selectCurrentLesson],
  (courseData, currentLesson) => {
    if (!currentLesson) return null;
    return findNextLessonHelper(courseData, currentLesson.id);
  }
);

export const selectPreviousLesson = createSelector(
  [selectCourseData, selectCurrentLesson],
  (courseData, currentLesson) => {
    if (!currentLesson) return null;
    return findPreviousLessonHelper(courseData, currentLesson.id);
  }
);

export const selectIsLastLesson = createSelector(
  [selectCourseData, selectCurrentLesson],
  (courseData, currentLesson) => {
    if (!currentLesson) return false;
    
    const allLessons = courseData.topics.flatMap(topic => 
      topic.subtopics.flatMap(subtopic => subtopic.lessons)
    );
    
    return allLessons[allLessons.length - 1]?.id === currentLesson.id;
  }
);

export const selectCurrentAssignment = createSelector(
  [selectAssignments, selectCurrentLesson],
  (assignments, currentLesson) => {
    if (!currentLesson) return null;
    return assignments[currentLesson.id] || null;
  }
);

export const selectAllLessonsCompleted = createSelector(
  [selectCourseData],
  (courseData) => {
    return areAllLessonsCompletedHelper(courseData);
  }
);

export const selectCanRetakeFinalAssessment = createSelector(
  [selectFinalAssessmentAttempts, selectMaxFinalAssessmentAttempts],
  (attempts, maxAttempts) => {
    return attempts < maxAttempts;
  }
);

// Check if course is truly complete (all lessons + final assessment passed)
export const selectIsCourseFullyComplete = createSelector(
  [selectAllLessonsCompleted, selectFinalAssessmentPassed],
  (allLessonsCompleted, finalAssessmentPassed) => {
    return allLessonsCompleted && finalAssessmentPassed;
  }
);

// Check if final assessment should be available
export const selectCanTakeFinalAssessment = createSelector(
  [selectAllLessonsCompleted, selectFinalAssessmentPassed],
  (allLessonsCompleted, finalAssessmentPassed) => {
    return allLessonsCompleted && !finalAssessmentPassed;
  }
);