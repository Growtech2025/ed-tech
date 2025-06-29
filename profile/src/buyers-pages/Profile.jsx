import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const reduxPhoto = useSelector(state => state.profile.photo);
  const [formData] = useState({
    firstName: 'Krishna',
    lastName: 'Shukla',
    headline: 'Full Stack Developer',
    biography: 'I love building web applications.',
    language: 'English (US)',
    website: 'https://krishnashukla.dev',
    linkedin: 'https://linkedin.com/in/krishna',
    twitter: '@krishna_dev',
  });

  const [photoPreview] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">👤 Profile Information</h1>

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow border-4 border-white">
            <img
              src={
                photoPreview
                  ? photoPreview
                  : reduxPhoto
                  ? URL.createObjectURL(reduxPhoto)
                  : 'https://via.placeholder.com/150'
              }
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-900">
              {formData.firstName} {formData.lastName}
            </h2>
            <p className="text-gray-600 mt-1">{formData.headline}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
          {/* Bio */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-1">📝 Biography</h3>
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
              {formData.biography}
            </div>
          </div>

          {/* Language */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">🌐 Language</h3>
            <div className="bg-gray-100 p-3 rounded-lg">{formData.language}</div>
          </div>

          {/* Website */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">🌍 Website</h3>
            <a
              href={formData.website}
              target="_blank"
              rel="noreferrer"
              className="block bg-gray-100 p-3 rounded-lg text-black-600 hover:underline"
            >
              {formData.website}
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">🔗 LinkedIn</h3>
            <a
              href={formData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="block bg-100 p-3 rounded-lg text-black-600 hover:underline"
            >
              {formData.linkedin}
            </a>
          </div>

          {/* Twitter */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">🐦 Twitter</h3>
            <a
              href={formData.twitter}
              target="_blank"
              rel="noreferrer"
              className="block bg-100 p-3 rounded-lg text-black-600 hover:underline"
            >
             {formData.twitter}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
