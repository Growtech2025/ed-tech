import React, { useState } from 'react';
import { FaBell, FaGraduationCap } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar';
const NotificationPre = () => {
  const [preferences, setPreferences] = useState({
    offers: {
      discountOffers: true,
      productUpdates: false,
      marketingEmails: false,
    },
    learning: {
      courseReminders: true,
      progressUpdates: true,
      personalizedSuggestions: false,
    }
  });

  const handleToggle = (section, key) => {
    setPreferences(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: !prev[section][key],
      }
    }));
  };

  const ToggleSwitch = ({ checked, onChange }) => (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-indigo-500 transition-all"></div>
      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform peer-checked:translate-x-5"></div>
    </label>
  );

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4">
      <div className="flex flex-col md:flex-row gap-6">

        {/* Sidebar */}
        <div className="w-full md:w-[250px]">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-4xl bg-white rounded-2xl shadow-lg p-6 md:p-10 mt-4 md:mt-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaBell className="text-indigo-500" /> Notification Preferences
          </h2>

          <p className="mb-8 text-gray-600 text-sm">
            Manage the types of communications you receive from us.
          </p>

          {/* Section: Updates and Offerings */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-indigo-600 flex items-center gap-2 mb-4">
              <FaBell /> Updates & Offers
            </h3>
            <div className="space-y-5 pl-2 sm:pl-6">
              {[
                { key: 'discountOffers', label: '🎁 Discount offers and promotions' },
                { key: 'productUpdates', label: '🛠️ Product and feature updates' },
                { key: 'marketingEmails', label: '📩 Marketing tips and best practices' },
              ].map(({ key, label }) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-gray-700">{label}</span>
                  <ToggleSwitch
                    checked={preferences.offers[key]}
                    onChange={() => handleToggle('offers', key)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Section: Learning Preferences */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 flex items-center gap-2 mb-4">
              <FaGraduationCap /> Learning Notifications
            </h3>
            <div className="space-y-5 pl-2 sm:pl-6">
              {[
                { key: 'courseReminders', label: '⏰ Course reminders & deadlines' },
                { key: 'progressUpdates', label: '📈 Learning progress updates' },
                { key: 'personalizedSuggestions', label: '🤖 Personalized course suggestions' },
              ].map(({ key, label }) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-gray-700">{label}</span>
                  <ToggleSwitch
                    checked={preferences.learning[key]}
                    onChange={() => handleToggle('learning', key)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-xs text-gray-500 mt-8 text-center">
        ⚠️ It may take a few hours for changes to reflect. You’ll still receive transactional emails related to your account and purchases.
      </p>
    </div>

  );
};

export default NotificationPre;
