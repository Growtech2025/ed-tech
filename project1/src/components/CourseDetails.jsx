import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Data from '../data/Data';
import './CourseCard.css';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = Data.courses[id];

  if (!course) return <h2>Course not found</h2>;

  return (
    <div style={{ maxWidth: "800px", margin: "30px auto", padding: "20px", background: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
      <img src={course.image} alt={course.title} style={{ width: "100%", borderRadius: "8px" }} />
      <h2 style={{ marginTop: "20px" }}>{course.title}</h2>
      <p>{course.description}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Price:</strong> ₹{course.price}</p>
      <p><strong>Rating:</strong> ⭐ {course.rating}</p>
      <div className="tags">
        {course.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => navigate(-1)}>⬅ Back</button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default CourseDetails;
