import React from 'react';
import CourseCard from './CourseCard';
import Data from '../data/Data';
import './CourseList.css';

const CourseList = () => {
  const courses = Data.courses;

  return (
    <div className="course-grid">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} index={index} />
      ))}
    </div>
  );
};

export default CourseList;
