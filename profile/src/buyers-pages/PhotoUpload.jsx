import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPhoto } from '../redux/ProfileSclice';

const PhotoUpload = () => {
  const dispatch = useDispatch();
  const photo = useSelector(state => state.profile.photo);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (photo) {
      setPreviewUrl(URL.createObjectURL(photo));
    }
  }, [photo]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(setPhoto(file));
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Upload / Update Photo</h1>

      <div className="flex justify-center mb-6">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow">
          <img
            src={previewUrl || 'https://via.placeholder.com/150'}
            alt="Profile Preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <label className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded cursor-pointer transition duration-200">
          Choose Photo
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default PhotoUpload;
