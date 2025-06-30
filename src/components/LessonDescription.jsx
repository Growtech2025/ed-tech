import React from 'react';
import { Clock, BookOpen, Target, CheckCircle, Lightbulb, Award } from 'lucide-react';
import './LessonDescription.css';

const LessonDescription = ({ lesson }) => {
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minutes`;
  };

  const getLessonDescription = (lessonId) => {
    const descriptions = {
      'lesson-1-1-1': {
        description: 'Learn the fundamental building blocks of web development with HTML. This comprehensive introduction covers HTML structure, semantic elements, and best practices for creating well-structured web pages.',
        objectives: [
          'Understand HTML document structure and syntax',
          'Learn about semantic HTML elements and their importance',
          'Master basic HTML tags for text, links, and media',
          'Create your first well-structured HTML document'
        ],
        keyTopics: [
          'HTML Document Structure',
          'Semantic Elements',
          'Text Formatting',
          'Links and Navigation',
          'Images and Media'
        ]
      },
      'lesson-1-1-2': {
        description: 'Dive into CSS fundamentals and learn how to style your HTML elements. Explore selectors, properties, and values to create visually appealing web pages with modern styling techniques.',
        objectives: [
          'Master CSS selectors and specificity',
          'Learn essential CSS properties for layout and design',
          'Understand the box model and positioning',
          'Apply responsive design principles'
        ],
        keyTopics: [
          'CSS Selectors',
          'Box Model',
          'Flexbox Layout',
          'Colors and Typography',
          'Responsive Design'
        ]
      },
      'lesson-1-2-1': {
        description: 'Master JavaScript fundamentals including variables, functions, and control structures. Build a solid foundation for interactive web development with hands-on coding exercises.',
        objectives: [
          'Understand JavaScript syntax and data types',
          'Learn to create and use functions effectively',
          'Master control structures and loops',
          'Practice with real-world coding examples'
        ],
        keyTopics: [
          'Variables and Data Types',
          'Functions and Scope',
          'Control Structures',
          'Arrays and Objects',
          'Error Handling'
        ]
      },
      'lesson-1-2-2': {
        description: 'Learn to manipulate the Document Object Model (DOM) with JavaScript. Create dynamic, interactive web pages by selecting, modifying, and responding to user interactions.',
        objectives: [
          'Understand the DOM structure and API',
          'Learn to select and modify HTML elements',
          'Handle user events and interactions',
          'Create dynamic content updates'
        ],
        keyTopics: [
          'DOM Selection Methods',
          'Element Manipulation',
          'Event Handling',
          'Dynamic Content',
          'Form Validation'
        ]
      },
      'lesson-2-1-1': {
        description: 'Introduction to React components and JSX syntax. Learn how to build reusable UI components and understand the React component lifecycle for modern web applications.',
        objectives: [
          'Understand React components and JSX',
          'Learn component composition patterns',
          'Master props and component communication',
          'Build your first React application'
        ],
        keyTopics: [
          'JSX Syntax',
          'Functional Components',
          'Props and PropTypes',
          'Component Composition',
          'React Developer Tools'
        ]
      },
      'lesson-2-1-2': {
        description: 'Deep dive into React state management and props. Learn how to manage component state, handle user interactions, and create dynamic user interfaces.',
        objectives: [
          'Master React state with useState hook',
          'Understand props flow and component communication',
          'Learn state lifting and sharing patterns',
          'Handle forms and user input effectively'
        ],
        keyTopics: [
          'useState Hook',
          'State Management',
          'Props vs State',
          'Event Handling',
          'Controlled Components'
        ]
      },
      'lesson-3-1-1': {
        description: 'Get started with Node.js for backend development. Learn server-side JavaScript, package management with npm, and building your first Node.js applications.',
        objectives: [
          'Understand Node.js runtime and architecture',
          'Learn npm package management',
          'Build basic server applications',
          'Work with modules and file system'
        ],
        keyTopics: [
          'Node.js Runtime',
          'NPM Package Manager',
          'Modules and Exports',
          'File System Operations',
          'Basic HTTP Server'
        ]
      }
    };

    return descriptions[lessonId] || {
      description: 'This lesson covers important concepts and practical skills that will advance your understanding of web development.',
      objectives: [
        'Learn key concepts and terminology',
        'Apply practical skills through examples',
        'Build upon previous knowledge',
        'Prepare for advanced topics'
      ],
      keyTopics: [
        'Core Concepts',
        'Practical Applications',
        'Best Practices',
        'Real-world Examples'
      ]
    };
  };

  const lessonData = getLessonDescription(lesson.id);

  return (
    <div className="lesson-description">
      {/* Header */}
      <div className="lesson-description__header">
        <div className="lesson-description__header-content">
          <div className="lesson-description__title-section">
            <h2 className="lesson-description__title">{lesson.title}</h2>
            <div className="lesson-description__meta">
              <div className="lesson-meta-item">
                <Clock className="meta-icon" />
                <span className="meta-text">{formatDuration(lesson.duration)}</span>
              </div>
              <div className="lesson-meta-item">
                <BookOpen className="meta-icon" />
                <span className="meta-text">Video Lesson</span>
              </div>
              {lesson.isCompleted && (
                <div className="lesson-meta-item lesson-meta-item--completed">
                  <CheckCircle className="meta-icon" />
                  <span className="meta-text">Completed</span>
                </div>
              )}
            </div>
          </div>
          <div className="lesson-description__icon">
            <Lightbulb className="header-icon" />
          </div>
        </div>
      </div>

      <div className="lesson-description__body">
        {/* Description */}
        <div className="lesson-description__section">
          <h3 className="section-title">
            <div className="section-title-icon">
              <BookOpen className="title-icon" />
            </div>
            About This Lesson
          </h3>
          <p className="section-description">{lessonData.description}</p>
        </div>

        <div className="lesson-description__grid">
          {/* Learning Objectives */}
          <div className="lesson-description__card lesson-description__card--objectives">
            <h3 className="card-title">
              <div className="card-title-icon">
                <Target className="title-icon" />
              </div>
              Learning Objectives
            </h3>
            <ul className="objectives-list">
              {lessonData.objectives.map((objective, index) => (
                <li key={index} className="objective-item">
                  <div className="objective-number">
                    <span className="objective-number-text">{index + 1}</span>
                  </div>
                  <span className="objective-text">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Topics */}
          <div className="lesson-description__card lesson-description__card--topics">
            <h3 className="card-title">
              <div className="card-title-icon">
                <Award className="title-icon" />
              </div>
              Key Topics Covered
            </h3>
            <div className="topics-list">
              {lessonData.keyTopics.map((topic, index) => (
                <div key={index} className="topic-item">
                  <span className="topic-text">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="lesson-description__progress">
          <div className="progress-content">
            <span className="progress-label">Lesson Progress</span>
            <div className="progress-status">
              {lesson.isCompleted ? (
                <div className="progress-status-item progress-status-item--completed">
                  <CheckCircle className="progress-status-icon" />
                  <span className="progress-status-text">Completed</span>
                </div>
              ) : (
                <div className="progress-status-item progress-status-item--in-progress">
                  <div className="progress-status-indicator"></div>
                  <span className="progress-status-text">In Progress</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDescription;