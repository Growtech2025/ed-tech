
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ course, index }) => {
  return (
    <Link to={`/course/${index}`} className="course-card-link">
      <div className="course-card">
        <img src={course.image} alt={course.title} className="course-image" />
        <div className="course-content">
          <h2>{course.title}</h2>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Price:</strong> ₹{course.price}</p>
          <p><strong>Rating:</strong> ⭐ {course.rating}</p>
          <div className="tags">
            {course.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
