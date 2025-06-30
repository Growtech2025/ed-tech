
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import './BookCard.css';

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [added, setAdded] = useState(false);

  const handleCardClick = () => {
    navigate(`/books/${encodeURIComponent(book.title)}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();

    // Add to cart
    addToCart(book);

    // If it's in wishlist, remove it
    const isInWishlist = wishlist.some(item => item.title === book.title);
    if (isInWishlist) {
      removeFromWishlist(book.title);
    }

    setAdded(true);
    // setTimeout(() => setAdded(false), 1500);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    const isWished = wishlist.find(item => item.title === book.title);
    if (isWished) {
      removeFromWishlist(book.title);
    } else {
      addToWishlist(book);
    }
  };

  const isInWishlist = wishlist.some(item => item.title === book.title);
  const cartItem = cartItems.find(item => item.title === book.title);

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

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
          {cartItem ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  decreaseQuantity(book.title);
                }}
                className="quantity-btn"
              >
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  increaseQuantity(book.title);
                }}
                className="quantity-btn"
              >
                +
              </button>
            </div>
          ) : (
            <button className="add-cart-btn" onClick={handleAddToCart}>
              {added ? <span style={{ color: 'green' }}>✔️ Added</span> : <>🛒 Add to Cart</>}
            </button>
          )}

          <span
            onClick={handleWishlistToggle}
            style={{
              cursor: 'pointer',
              fontSize: '1.5rem',
              userSelect: 'none',
              color: isInWishlist ? 'red' : '#888'
            }}
          >
            {isInWishlist ? '❤️' : '🤍'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
