import { createSlice } from '@reduxjs/toolkit';
import { mockCourse, mockAssignments } from '../../data/mockCourse';

const initialState = {
  courseData: mockCourse,
  currentLesson: null,
  assignments: mockAssignments,
  isLoading: false,
  error: null,
  courseCompleted: false,
  certificateEarned: false,
  finalAssessmentAttempts: 0,
  maxFinalAssessmentAttempts: 3,
  finalAssessmentPassed: false,
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourseData: (state, action) => {
      state.courseData = action.payload;
    },
    setCurrentLesson: (state, action) => {
      state.currentLesson = action.payload;
    },
    markLessonComplete: (state, action) => {
      const lessonId = action.payload;
      let totalLessons = 0;
      let completedLessons = 0;

      // Find and mark lesson as complete
      for (const topic of state.courseData.topics) {
        for (const subtopic of topic.subtopics) {
          for (const lesson of subtopic.lessons) {
            totalLessons++;
            if (lesson.id === lessonId) {
              lesson.isCompleted = true;
              completedLessons++;
              
              // Unlock next lesson
              const nextLesson = findNextLessonHelper(state.courseData, lessonId);
              if (nextLesson) {
                nextLesson.isLocked = false;
              }
            } else if (lesson.isCompleted) {
              completedLessons++;
            }
          }
        }
      }

      // Calculate progress based on lessons only (final assessment is separate)
      const lessonsProgress = Math.round((completedLessons / totalLessons) * 100);
      
      // Total progress includes final assessment (lessons are 90%, final assessment is 10%)
      if (state.finalAssessmentPassed) {
        state.courseData.totalProgress = 100;
      } else {
        // Scale lesson progress to 90% of total, leaving 10% for final assessment
        state.courseData.totalProgress = Math.round(lessonsProgress * 0.9);
      }

      // Update subtopic and topic completion
      for (const topic of state.courseData.topics) {
        for (const subtopic of topic.subtopics) {
          subtopic.isCompleted = subtopic.lessons.every(lesson => lesson.isCompleted);
        }
        topic.isCompleted = topic.subtopics.every(subtopic => subtopic.isCompleted);
      }

      // Save to localStorage
      localStorage.setItem(`course-progress-${state.courseData.id}`, JSON.stringify({
        courseData: state.courseData,
        finalAssessmentPassed: state.finalAssessmentPassed,
        courseCompleted: state.courseCompleted,
        certificateEarned: state.certificateEarned
      }));
    },
    navigateToLesson: (state, action) => {
      const lessonId = action.payload;
      const lesson = findLessonByIdHelper(state.courseData, lessonId);
      if (lesson && !lesson.isLocked) {
        state.currentLesson = lesson;
      }
    },
    loadProgressFromStorage: (state) => {
      const savedProgress = localStorage.getItem(`course-progress-${state.courseData.id}`);
      if (savedProgress) {
        try {
          const parsedProgress = JSON.parse(savedProgress);
          // Ensure courseData exists and is valid, fallback to mockCourse if not
          if (parsedProgress.courseData && parsedProgress.courseData.topics) {
            state.courseData = parsedProgress.courseData;
          } else {
            state.courseData = mockCourse;
          }
          state.finalAssessmentPassed = parsedProgress.finalAssessmentPassed || false;
          state.courseCompleted = parsedProgress.courseCompleted || false;
          state.certificateEarned = parsedProgress.certificateEarned || false;
        } catch (error) {
          // If parsing fails, use default mockCourse
          state.courseData = mockCourse;
        }
      }
      
      // Set current lesson to first unlocked lesson
      const firstUnlockedLesson = findFirstUnlockedLessonHelper(state.courseData);
      state.currentLesson = firstUnlockedLesson;
    },
    completeAssignment: (state, action) => {
      const assignmentId = action.payload;
      if (state.assignments[assignmentId]) {
        state.assignments[assignmentId].isCompleted = true;
      }
    },
    completeCourse: (state) => {
      state.courseCompleted = true;
      state.courseData.totalProgress = 100;
      
      // Save to localStorage
      localStorage.setItem(`course-progress-${state.courseData.id}`, JSON.stringify({
        courseData: state.courseData,
        finalAssessmentPassed: state.finalAssessmentPassed,
        courseCompleted: state.courseCompleted,
        certificateEarned: state.certificateEarned
      }));
    },
    earnCertificate: (state) => {
      state.certificateEarned = true;
      
      // Save to localStorage
      localStorage.setItem(`course-progress-${state.courseData.id}`, JSON.stringify({
        courseData: state.courseData,
        finalAssessmentPassed: state.finalAssessmentPassed,
        courseCompleted: state.courseCompleted,
        certificateEarned: state.certificateEarned
      }));
    },
    passFinalAssessment: (state) => {
      state.finalAssessmentPassed = true;
      state.courseData.totalProgress = 100;
      
      // Save to localStorage
      localStorage.setItem(`course-progress-${state.courseData.id}`, JSON.stringify({
        courseData: state.courseData,
        finalAssessmentPassed: state.finalAssessmentPassed,
        courseCompleted: state.courseCompleted,
        certificateEarned: state.certificateEarned
      }));
    },
    incrementFinalAssessmentAttempts: (state) => {
      state.finalAssessmentAttempts += 1;
    },
    resetFinalAssessmentAttempts: (state) => {
      state.finalAssessmentAttempts = 0;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Helper functions
const findFirstUnlockedLessonHelper = (courseData) => {
  // Add safety check to ensure courseData and topics exist
  if (!courseData || !courseData.topics || !Array.isArray(courseData.topics)) {
    return null;
  }

  for (const topic of courseData.topics) {
    if (!topic.subtopics || !Array.isArray(topic.subtopics)) continue;
    
    for (const subtopic of topic.subtopics) {
      if (!subtopic.lessons || !Array.isArray(subtopic.lessons)) continue;
      
      for (const lesson of subtopic.lessons) {
        if (!lesson.isCompleted && !lesson.isLocked) {
          return lesson;
        }
      }
    }
  }
  return courseData.topics[0]?.subtopics[0]?.lessons[0] || null;
};

const findNextLessonHelper = (courseData, currentLessonId) => {
  if (!courseData || !courseData.topics || !Array.isArray(courseData.topics)) {
    return null;
  }

  let foundCurrent = false;
  
  for (const topic of courseData.topics) {
    if (!topic.subtopics || !Array.isArray(topic.subtopics)) continue;
    
    for (const subtopic of topic.subtopics) {
      if (!subtopic.lessons || !Array.isArray(subtopic.lessons)) continue;
      
      for (const lesson of subtopic.lessons) {
        if (foundCurrent) {
          return lesson;
        }
        if (lesson.id === currentLessonId) {
          foundCurrent = true;
        }
      }
    }
  }
  return null;
};

const findPreviousLessonHelper = (courseData, currentLessonId) => {
  if (!courseData || !courseData.topics || !Array.isArray(courseData.topics)) {
    return null;
  }

  let previousLesson = null;
  
  for (const topic of courseData.topics) {
    if (!topic.subtopics || !Array.isArray(topic.subtopics)) continue;
    
    for (const subtopic of topic.subtopics) {
      if (!subtopic.lessons || !Array.isArray(subtopic.lessons)) continue;
      
      for (const lesson of subtopic.lessons) {
        if (lesson.id === currentLessonId) {
          return previousLesson;
        }
        previousLesson = lesson;
      }
    }
  }
  return null;
};

const findLessonByIdHelper = (courseData, lessonId) => {
  if (!courseData || !courseData.topics || !Array.isArray(courseData.topics)) {
    return null;
  }

  for (const topic of courseData.topics) {
    if (!topic.subtopics || !Array.isArray(topic.subtopics)) continue;
    
    for (const subtopic of topic.subtopics) {
      if (!subtopic.lessons || !Array.isArray(subtopic.lessons)) continue;
      
      for (const lesson of subtopic.lessons) {
        if (lesson.id === lessonId) {
          return lesson;
        }
      }
    }
  }
  return null;
};

// Check if all lessons are completed
const areAllLessonsCompletedHelper = (courseData) => {
  if (!courseData || !courseData.topics || !Array.isArray(courseData.topics)) {
    return false;
  }

  for (const topic of courseData.topics) {
    if (!topic.subtopics || !Array.isArray(topic.subtopics)) continue;
    
    for (const subtopic of topic.subtopics) {
      if (!subtopic.lessons || !Array.isArray(subtopic.lessons)) continue;
      
      for (const lesson of subtopic.lessons) {
        if (!lesson.isCompleted) {
          return false;
        }
      }
    }
  }
  return true;
};

export const {
  setCourseData,
  setCurrentLesson,
  markLessonComplete,
  navigateToLesson,
  loadProgressFromStorage,
  completeAssignment,
  completeCourse,
  earnCertificate,
  passFinalAssessment,
  incrementFinalAssessmentAttempts,
  resetFinalAssessmentAttempts,
  setLoading,
  setError,
} = courseSlice.actions;

export { 
  findNextLessonHelper, 
  findPreviousLessonHelper, 
  findLessonByIdHelper,
  areAllLessonsCompletedHelper 
};
export default courseSlice.reducer;