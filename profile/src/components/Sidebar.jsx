import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  PresentationChartBarIcon,
  PencilSquareIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  CameraIcon,
  TrashIcon, // 🗑️ used for Delete Account
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const links = [
    {
      name: 'Profile',
      path: '/',
      icon: <UserCircleIcon className="h-5 w-5" />,
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <PresentationChartBarIcon className="h-5 w-5" />,
    },
    {
      name: 'Edit Profile',
      path: '/editProfile',
      icon: <PencilSquareIcon className="h-5 w-5" />,
    },
    {
      name: 'Notifications',
      path: '/notification',
      icon: <BellIcon className="h-5 w-5" />,
    },
    // {
    //   name: 'Photos',
    //   path: '/photos',
    //   icon: <CameraIcon className="h-5 w-5" />,
    // },
    {
      name: 'Delete Account',
      path: '/closeAccount',
      icon: <TrashIcon className="h-5 w-5 text-red-600" />,
    },
  ];

  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-white to-gray-100 border-r shadow-lg p-6">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-8 tracking-wide">
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
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
