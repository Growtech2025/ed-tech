import React from 'react';
import books from '../../data/Book';
import BookCard from './BookCard';
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
            {books.map((book,index) => (
                <div key={index}>
                    <BookCard book={book} />
                </div>
            ))}
        </div>
    );
}





export default BookListPage;
