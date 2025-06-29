import Nav from './components/Nav';
import Admin from './components/Admin';
import { Route,Routes } from 'react-router-dom';
import Books from './pages/Books';
import Courses from './pages/Courses.js'
function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav/>
        <Routes>
          <Route path='/' element={<Admin/>} />
          <Route path='/books' element={<Books/>} />
          <Route path='/courses' element={<Courses/>} />
        </Routes>
        
      </div>    
    </div>
  );
}

export default App;
