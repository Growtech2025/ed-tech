import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import books from './data/Books';
import BookCard from './components/BookCard';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
     <div style={{
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '25px',
  rowGap:'30px',
  padding: '30px',
  justifyContent: 'center',
  background: '#f5f7fa'
}}>
  {books.map((book, index) => (
    <BookCard key={index} book={book} index={index} />
  ))}
</div>


        } />
<Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
