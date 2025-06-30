import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WishlistProvider } from './contexts/WishlistContext';
import { CartProvider } from './contexts/CartContext';

import Layout from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile';
import MyCart from './pages/MyCart';
import BookDetails from './pages/books/BookDetails';
import Wishlist from './pages/Wishlist';
import books from './data/Book';
import course from './data/Course';
import BookCard from './pages/books/BookCard';
import SearchResults from './pages/SearchResult';

function BookListPage() {
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
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

function CourseListPage() {
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
      {course.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<CourseListPage />} />
              <Route path="/books" element={<BookListPage />} />
              <Route path="/books/:title" element={<BookDetails />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/mycart" element={<MyCart />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </Layout>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
