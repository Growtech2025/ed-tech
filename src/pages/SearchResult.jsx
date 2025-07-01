// src/pages/SearchResults.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import books from '../data/Book';
import courses from '../data/Course';
import BookCard from '../pages/books/BookCard';

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchResults = () => {
  const query = useQuery().get('q')?.toLowerCase() || '';

  // If query is empty, show everything
  const filteredBooks = query
    ? books.filter(book => book.title.toLowerCase().includes(query))
    : books;

  const filteredCourses = query
    ? courses.filter(course => course.title.toLowerCase().includes(query))
    : courses;

  const results = [...filteredBooks, ...filteredCourses];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">
        {query ? (
          <>Search Results for: <span className="text-blue-600">{query}</span></>
        ) : (
          <>All Books and Courses</>
        )}
      </h2>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((item, idx) => (
            <BookCard key={idx} book={item} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
