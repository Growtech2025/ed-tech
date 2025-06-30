// src/contexts/WishlistContext.jsx
import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (book) => {
    setWishlist(prev =>
      prev.some(item => item.title === book.title) ? prev : [...prev, book]
    );
  };

  const removeFromWishlist = (title) => {
    setWishlist(prev => prev.filter(item => item.title !== title));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
