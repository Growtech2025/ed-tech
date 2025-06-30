import React from 'react';

const Jobs = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Jobs</span>
          </h1>
          <p className="text-xl text-gray-600">
            This is the jobs page. Add your job listings here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jobs;