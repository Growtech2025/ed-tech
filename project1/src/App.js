import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 style={{ textAlign: "center", marginTop: "20px" }}></h1>
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
