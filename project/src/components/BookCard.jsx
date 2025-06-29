import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book, index }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/book/${index}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    alert(`${book.title} added to cart!`);
  };

  return (
    <div className="clean-book-card" onClick={handleCardClick}>
      <img src={book.image} alt={book.title} />

      <div className="book-details">
        <h3>{book.title}</h3>

        <div className="meta">
          <div><strong>₹</strong>{book.price}</div>
          <div>⭐ {book.rating}</div>
          <div>{book.pages} pages</div>
        </div>

        <div className="tags">
          {book.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>

        <button className="add-cart-btn" onClick={handleAddToCart}>🛒 Add to Cart</button>
      </div>
    </div>
  );
};

export default BookCard;
