import React from 'react';
import { useParams, Link } from 'react-router-dom';
import books from '../data/Books';
import './BookDetails.css';

const BookDetail = () => {
  const { id } = useParams();
  const book = books[parseInt(id)];

  if (!book) {
    return <h2 style={{ padding: '40px', textAlign: 'center' }}>Book not found</h2>;
  }

  return (
    <div className="book-detail-page">
      <div className="book-detail-wrapper">
        <div className="book-image-section">
          <img src={book.image} alt={book.title} />
        </div>

        <div className="book-info-section">
          <h1>{book.title}</h1>
          <p className="description">{book.description}</p>

          <div className="book-meta">
            <p><strong>Price:</strong> ₹{book.price}</p>
            <p><strong>Pages:</strong> {book.pages}</p>
            <p><strong>Rating:</strong> ⭐ {book.rating}</p>
          </div>

          <div className="book-tags">
            {book.tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>

<div className="details-buttons">
  <Link to="/" className="back-button">← Back to Books</Link>
  <button className="add-cart-btn">🛒 Add to Cart</button>
</div>

        </div>
      </div>
    </div>
  );
};

export default BookDetail;
