import React, { useState } from 'react';
import { courses } from '../utills/Sellers';
import './books.css';

const Courses = () => {
  const [course,setcourse]=useState(courses);
  const [editcourse, setedit] = useState(null);

    const startedit = (course)=>{
      setedit({...course});
    }

    const deletecourse = (id)=>{
      setcourse(course.filter((c)=>c.id !== id));
    }
    const handlechange = (e)=>{
      const {name,value} = e.target;
      setedit({...editcourse,[name]:value});
    }
    const cancleedit = ()=>{
      setedit(null);
    }
    const saveedit =()=>{
      setcourse(course.map(c=>c.id === editcourse.id ? editcourse:c))
      setedit(null);
    }
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Courses</h1>

      <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
  }}>
        {course.map((course) => (
          <div className="card" key={course.id}>
            <img src={course.image} alt={course.title} />
            {editcourse?.id === course.id ?(
              <>
                <input type='text' name='title' value={editcourse.title} onChange={handlechange} placeholder='Title' />
                <input type='text' name='rating' value={editcourse.rating} onChange={handlechange} placeholder='Rating' />
                <input type='text' name='hours' value={editcourse.hours} onChange={handlechange} placeholder='Hours' />

                <button onClick={saveedit} className='edit-btn'>Save</button>
                <button onClick={cancleedit} className='delete-btn'>Cancle</button>

              </>
            ):(<>
              <div className="card-title">{course.title}</div>
              <div className="card-rating">🌟 {course.rating}</div>
              <div className="card-author">By {course.author}</div>
              <div className="card-hours">{course.hours} hours</div>
              <button className="edit-btn" onClick={()=>startedit(course)}>Edit</button>
              <button className="delete-btn" onClick={()=> deletecourse(course.id)}>Delete</button>
            </>)
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
