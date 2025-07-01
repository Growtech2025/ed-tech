import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  PresentationChartBarIcon,
  PencilSquareIcon,
  UserCircleIcon,
  BellIcon,
  TrashIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Profile', path: '/profile', icon: <UserCircleIcon className="h-5 w-5" /> },
    { name: 'Dashboard', path: '/dashboard', icon: <PresentationChartBarIcon className="h-5 w-5" /> },
    { name: 'Edit Profile', path: '/editProfile', icon: <PencilSquareIcon className="h-5 w-5" /> },
    { name: 'Notifications', path: '/notification', icon: <BellIcon className="h-5 w-5" /> },
    { name: 'Delete Account', path: '/closeAccount', icon: <TrashIcon className="h-5 w-5 text-red-600" /> }
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white shadow px-4 py-3 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Profile Section</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          bg-gradient-to-b from-white to-gray-100 border-r shadow-lg p-6
          fixed top-0 left-0 z-20 w-64 h-full
          md:static md:block md:w-64 md:h-screen
          ${isOpen ? 'block' : 'hidden'}
        `}
      >
        <h2 className="text-2xl font-extrabold text-gray-800 mb-8 tracking-wide hidden md:block">
          Profile Section
        </h2>
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-100 text-indigo-700 font-semibold shadow'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`
                }
                onClick={() => setIsOpen(false)} // Close sidebar on mobile after navigation
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
