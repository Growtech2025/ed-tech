import React, { useState } from 'react';
import { books as initialBooks } from '../utills/Sellers';
import './books.css';

const Books = () => {
  const [bookList, setBookList] = useState(initialBooks);
  const [editBook, setEditBook] = useState(null);

  const deleteBook = (id) => {
    setBookList(bookList.filter((book) => book.id !== id));
  };

  const startEdit = (book) => {
    setEditBook({ ...book }); // make a copy to edit
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditBook({ ...editBook, [name]: value });
  };

  const cancelEdit = () => {
    setEditBook(null);
  };

  const saveEdit = () => {
    setBookList(bookList.map((b) => (b.id === editBook.id ? editBook : b)));
    setEditBook(null);
  };

  return (
    <div>
      <h1 className="section-heading">Books</h1>
      <div className="section-container">
        {bookList.map((book) => (
          <div className="card" key={book.id}>
            <img src={book.cover} alt={book.title} />
            {editBook?.id === book.id ? (
              <>
                <input
                  type="text"
                  name="title"
                  value={editBook.title}
                  onChange={handleChange}
                  placeholder="Title"
                />
                <input
                  type="text"
                  name="rating"
                  value={editBook.rating}
                  onChange={handleChange}
                  placeholder="Rating"
                />
                <input
                  type="text"
                  name="hours"
                  value={editBook.hours}
                  onChange={handleChange}
                  placeholder="Hours"
                />
                <button onClick={saveEdit} className="edit-btn">Save</button>
                <button onClick={cancelEdit} className="delete-btn">Cancel</button>
              </>
            ) : (
              <>
                <div className="card-title">{book.title}</div>
                <div className="card-rating">🌟 {book.rating}</div>
                <div className="card-author">By {book.author}</div>
                <div className="card-hours">{book.hours} hours</div>
                <button className="edit-btn" onClick={() => startEdit(book)}>Edit</button>
                <button onClick={() => deleteBook(book.id)} className="delete-btn">Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
