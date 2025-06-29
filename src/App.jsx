import React, { useState } from 'react';
import Header from './components/Header';
import JobCard from './components/JobCard';
import JobDetail from './components/JobDetail';
import { jobs } from './data/jobs';

function App() {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleBackToJobs = () => {
    setSelectedJob(null);
  };

  if (selectedJob) {
    return <JobDetail job={selectedJob} onBack={handleBackToJobs} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Find Your Dream Job in India
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover exciting career opportunities with India's leading companies. 
            From startups to established enterprises, find the perfect role that matches your skills and aspirations.
          </p>
        </div>

        {/* Jobs Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Latest Job Openings</h2>
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onJobClick={handleJobClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;