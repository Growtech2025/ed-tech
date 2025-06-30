
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import books from '../../data/Book';
import courses from '../../data/Course';
import { useCart } from '../../contexts/CartContext';
import './BookDetails.css';

const BookDetail = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  const item = books.find(b => b.title === decodedTitle) || courses.find(c => c.title === decodedTitle);
  const isBook = books.some(b => b.title === decodedTitle);
  const backLink = isBook ? '/books' : '/courses';

  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useCart();
  const [added, setAdded] = useState(false);

  const cartItem = cartItems.find(i => i.title === item?.title);

  if (!item) {
    return <h2 style={{ padding: '40px', textAlign: 'center' }}>Item not found</h2>;
  }

  const handleAddToCart = () => {
    addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="book-detail-page">
      <div className="book-detail-wrapper">
        <div className="book-image-section">
          <img src={item.image} alt={item.title} />
        </div>

        <div className="book-info-section">
          <h1>{item.title}</h1>
          <p className="description">{item.description}</p>

          <div className="book-meta">
            {item.price && <p><strong>Price:</strong> ₹{item.price}</p>}
            {item.pages && <p><strong>Pages:</strong> {item.pages}</p>}
            {item.rating && <p><strong>Rating:</strong> ⭐ {item.rating}</p>}
          </div>

          {item.tags && (
            <div className="book-tags">
              {item.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          )}

          <div className="details-buttons">
            <Link to={backLink} className="back-button">← Back to {isBook ? 'Books' : 'Courses'}</Link>

            {cartItem ? (
              <div className="quantity-control">
                <button onClick={() => decreaseQuantity(item.title)} className="qty-btn">−</button>
                <span className="qty-value">{cartItem.quantity}</span>
                <button onClick={() => increaseQuantity(item.title)} className="qty-btn">+</button>
              </div>
            ) : (
              <button className="add-cart-btn" onClick={handleAddToCart}>
                {added ? <span style={{ color: 'green' }}>✔️ Added</span> : <>🛒 Add to Cart</>}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
