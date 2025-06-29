import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'; // Import the CSS file

const Nav = () => {
  return (
    <div className="nav-container">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/course">Course</NavLink>
        </li>
        <li>
          <NavLink to="/books">Books</NavLink>
        </li>
        <li>
          <input type="search" placeholder="Search..." />
        </li>
        <li>
          <button>Add to Cart</button>
        </li>
        <li>
          <NavLink to="/favorites">❤️</NavLink>
        </li>
        <li>
          <NavLink to="/downloads">
            <img src="/assets/logo/download.png" alt="Download" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
