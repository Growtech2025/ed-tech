import React from "react";
import { books, courses } from "../utills/Sellers";
import { useNavigate } from "react-router-dom";
import "../pages/books.css";
const Admin = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="section-heading">Books</h1>
      <div className="section-container">
        {books.slice(0, 4).map((Books) => (
          <div className="card" key={Books.id}>
            <img src={Books.cover} alt={Books.title} />
            <div className="card-title">{Books.title}</div>
            <div className="card-rating">🌟 {Books.rating}</div>
            <div className="card-author">By {Books.author}</div>
            <div className="card-hours">{Books.hours} hours</div>
          </div>
        ))}
      </div>

      <div
        className="card view-all-card"
        onClick={() => {
          navigate("/books");
        }}
      >
        <button className="view-all-btn">+ View All</button>
      </div>

      <div>
        <h1 className="section-heading">Courses</h1>
        <div className="section-container">
          {courses.slice(0, 4).map((course) => (
            <div className="card" key={course.id}>
              <img src={course.image} alt={course.title} />
              <div className="card-title">{course.title}</div>
              <div className="card-rating">🌟 {course.rating}</div>
              <div className="card-author">By {course.instructor}</div>
              <div className="card-hours">{course.hours} hours</div>
            </div>
          ))}
          </div>
          <div
            className="card view-all-card"
            onClick={() => {
              navigate("/courses");
            }}
          >
            <button className="view-all-btn">+ View All</button>
          </div>
      </div>
    </div>
  );
};

export default Admin;
