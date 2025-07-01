import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { WishlistProvider } from './contexts/WishlistContext';
import { CartProvider } from './contexts/CartContext';
import Dashboard from './pages/buyers-pages/Dashboard';
import EditProfiles from "./pages/buyers-pages/EditProfiles.jsx"
import Layout from './components/Layout';
import Home from './pages/Home';
import Jobs from './pages/jobs/Jobs';
import Profile from './pages/buyers-pages/Profile.jsx';
import NotificationPre from './pages/buyers-pages/NotificationPre';
import MyCart from './pages/MyCart';
import BookDetails from './pages/books/BookDetails';
import Wishlist from './pages/Wishlist';
import CloseAccount from "./pages/buyers-pages/CloseAccount.jsx"
import SearchResults from './pages/SearchResult';
import CourseListPage from './pages/courses/CourseListPage';
import BookListPage from './pages/books/BookListPage';
import PageNotFound from './components/PageNotFound.jsx';
// import Sidebar from "./components/Sidebar.jsx"
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"
import Otpverification from "./pages/Otpverification.jsx"
import VacancyContext from './contexts/VacancyContext.jsx';
function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        {/* <VacancyContext> */}
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/otp" element={<Otpverification />} />
              <Route path="/courses" element={<CourseListPage />} />
              <Route path="/books" element={<BookListPage />} />
              <Route path="/books/:title" element={<BookDetails />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/mycart" element={<MyCart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/editProfile" element={<EditProfiles />} />
              <Route path="/notification" element={<NotificationPre />} />
              {/* <Route path="/photos" element={<PhotoUpload />} /> */}
              <Route path="/closeAccount" element={<CloseAccount />} />

              <Route path="*" element={<PageNotFound />} />


            </Routes>
          </Layout>
        {/* </VacancyContext> */}
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
