import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPhoto } from '../../redux/ProfileSclice';
import Sidebar from '../../components/Sidebar';

const EditProfiles = () => {
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.profile.photo);
  const [previewUrl, setPreviewUrl] = useState(null);

  const initialData = {
    firstName: 'Krishna',
    lastName: 'Shukla',
    headline: 'Frontend Developer at ABC Corp',
    biography: 'I am a passionate developer who loves building user interfaces.',
    language: 'English (US)',
    website: 'https://krishnashukla.dev',
    linkedin: 'https://linkedin.com/in/krishna',
    twitter: '@krishna_dev',
  };

  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    if (photo) {
      setPreviewUrl(URL.createObjectURL(photo));
    }
  }, [photo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(setPhoto(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Profile:', formData);
    // API call to submit updated profile
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4">
      <div className="flex flex-col md:flex-row gap-6">

        {/* Sidebar */}
        <div className="w-full md:w-[250px]">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-5xl bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl px-6 py-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">✏️ Edit Profile</h1>

          {/* PHOTO UPLOAD SECTION */}
          <div className="flex items-center justify-center flex-col gap-4 mb-10">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gray-300 shadow">
              <img
                src={previewUrl || 'https://via.placeholder.com/150'}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <label className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded cursor-pointer transition duration-200">
              Change Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {/* FORM SECTION */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">First Name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Last Name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Headline</label>
              <input
                name="headline"
                maxLength={60}
                value={formData.headline}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <small className="text-sm text-gray-500 mt-1 block">
                {60 - formData.headline.length} characters remaining.
              </small>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Biography</label>
              <textarea
                name="biography"
                rows={5}
                value={formData.biography}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <small className="text-sm text-gray-500 mt-1 block">
                Links and coupon codes are not permitted in this section.
              </small>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Language</label>
              <input
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">LinkedIn Profile URL</label>
                <input
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. in/johnsmith"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Website URL</label>
                <input
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. https://yoursite.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">GitHub Username</label>
                <input
                  name="GitHub"
                  value={formData.GitHub}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  placeholder="e.g. krishnagithub"
                />
              </div>
            </div>

            <div className="text-center pt-6">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
              >
                ✅ Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default EditProfiles;
