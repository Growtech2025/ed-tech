// src/pages/Wishlist.jsx
import React from 'react';
import { useWishlist } from '../contexts/WishlistContext';
import BookCard from './books/BookCard';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      columnGap: '25px',
      rowGap: '30px',
      padding: '30px',
      justifyContent: 'center',
      background: '#f5f7fa'
    }}>
      {wishlist.length === 0 ? (
        <h2>No items in wishlist</h2>
      ) : (
        wishlist.map(book => (
          <BookCard key={book.title} book={book}  fromWishlist={true} />
        ))
      )}
    </div>
  );
};

export default Wishlist;
