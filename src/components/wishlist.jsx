import React, { useState } from 'react';
import { Products } from '../utils/product';
import './wishlist.css';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(Products);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map(item => (
          <div key={item.id} className="wishlist-card">
            <img src={item.productImage} alt={item.productName} />
            <div className="wishlist-info">
              <h3>{item.productName}</h3>
              <p>{item.productDescription}</p>
              <span>Price: {item.productPrice} /-</span>
            </div>
            <button
              className="heart-btn"
              onClick={() => removeFromWishlist(item.id)}
              title="Remove from wishlist"
            >
              ❤️
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
