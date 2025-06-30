// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, BookOpen, ShoppingCart, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// const Layout = ({ children }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'Courses', href: '/courses' },
//     { name: 'Books', href: '/books' },
//     { name: 'Jobs', href: '/jobs' },
//     { name: 'Profile', href: '/profile' },
//   ];

//   const isActive = (href) => location.pathname === href;

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Header */}
//       <header className="bg-white shadow-lg fixed w-full top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <Link to="/" className="flex items-center space-x-2 group">
//               <div className="p-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg group-hover:from-blue-700 group-hover:to-teal-700 transition-all duration-300">
//                 <BookOpen className="h-6 w-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
//                 EdTech
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex space-x-8">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md relative group ${
//                     isActive(item.href)
//                       ? 'text-blue-600'
//                       : 'text-gray-700 hover:text-blue-600'
//                   }`}
//                 >
//                   {item.name}
//                   <span
//                     className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${
//                       isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
//                     }`}
//                   />
//                 </Link>
//               ))}
//             </nav>

//             {/* CTA Button */}
//             <div className="hidden md:flex">
//               <Link
//                 to="/mycart"
//                 className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
//               >
//                 <ShoppingCart className="h-4 w-4" />
//                 <span>My Cart</span>
//               </Link>
//             </div>

//             {/* Mobile menu button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t shadow-lg">
//             <div className="px-4 py-2 space-y-1">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
//                     isActive(item.href)
//                       ? 'text-blue-600 bg-blue-50'
//                       : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <Link
//                 to="/mycart"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="block w-full mt-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-2 rounded-md font-medium text-center hover:from-blue-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2"
//               >
//                 <ShoppingCart className="h-4 w-4" />
//                 <span>My Cart</span>
//               </Link>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 pt-16">
//         {children}
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Company Info */}
//             <div className="space-y-4">
//               <div className="flex items-center space-x-2">
//                 <div className="p-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
//                   <BookOpen className="h-5 w-5 text-white" />
//                 </div>
//                 <span className="text-lg font-bold">EdTech</span>
//               </div>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 Empowering learners worldwide through innovative educational technology solutions. 
//                 Your journey to knowledge starts here.
//               </p>
//               <div className="flex space-x-4">
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
//                 >
//                   <Facebook className="h-5 w-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
//                 >
//                   <Twitter className="h-5 w-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
//                 >
//                   <Linkedin className="h-5 w-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
//                 >
//                   <Instagram className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div className="space-y-4">
//               <h3 className="text-lg font-semibold">Quick Links</h3>
//               <ul className="space-y-2">
//                 {navigation.map((item) => (
//                   <li key={item.name}>
//                     <Link
//                       to={item.href}
//                       className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
//                     >
//                       {item.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Learning Resources */}
//             <div className="space-y-4">
//               <h3 className="text-lg font-semibold">Learning</h3>
//               <ul className="space-y-2 text-sm">
//                 <li><span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Online Courses</span></li>
//                 <li><span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">E-Books</span></li>
//                 <li><span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Career Guidance</span></li>
//                 <li><span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Skill Assessment</span></li>
//                 <li><span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Certifications</span></li>
//               </ul>
//             </div>

//             {/* Support */}
//             <div className="space-y-4">
//               <h3 className="text-lg font-semibold">Support</h3>
//               <div className="space-y-3 text-sm">
//                 <div className="text-gray-400">
//                   <p>Help Center</p>
//                   <p>Community Forum</p>
//                   <p>Student Support</p>
//                   <p>Technical Support</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-8 pt-8 text-center">
//             <p className="text-gray-400 text-sm">
//               © 2024 EdTech. All rights reserved. Empowering education through technology.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Layout;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import {
  Menu,
  X,
  BookOpen,
  ShoppingCart,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Heart,
} from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();


  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Books', href: '/books' },
    { name: 'Jobs', href: '/jobs' },
    { name: 'Profile', href: '/profile' },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg group-hover:from-blue-700 group-hover:to-teal-700 transition-all duration-300">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                EdTech
              </span>
            </Link>

            {/* Search Bar (Desktop) */}
          <div className="hidden md:block flex-1 px-6">
            <SearchBar />
          </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md relative group ${
                    isActive(item.href)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${
                      isActive(item.href)
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Wishlist + Cart Buttons (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/wishlist"
                className="text-gray-700 hover:text-pink-600 transition-colors duration-300 flex items-center space-x-2"
              >
                <Heart className="h-5 w-5" />
                <span>Wishlist</span>
              </Link>
              <Link
                to="/mycart"
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>My Cart</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            {/* Mobile Search */}
            <div className="px-4 pt-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/wishlist"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium rounded-md text-gray-700 hover:text-pink-600 hover:bg-gray-50 transition-colors duration-300 flex items-center space-x-2"
              >
                <Heart className="h-4 w-4" />
                <span>Wishlist</span>
              </Link>
              <Link
                to="/mycart"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full mt-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-2 rounded-md font-medium text-center hover:from-blue-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>My Cart</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold">EdTech</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering learners worldwide through innovative educational technology solutions.
                Your journey to knowledge starts here.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/wishlist" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    Wishlist
                  </Link>
                </li>
              </ul>
            </div>

            {/* Learning Resources */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Learning</h3>
              <ul className="space-y-2 text-sm">
                <li><span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Online Courses</span></li>
                <li><span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">E-Books</span></li>
                <li><span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Career Guidance</span></li>
                <li><span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Skill Assessment</span></li>
                <li><span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Certifications</span></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <p>Help Center</p>
                <p>Community Forum</p>
                <p>Student Support</p>
                <p>Technical Support</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 EdTech. All rights reserved. Empowering education through technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
