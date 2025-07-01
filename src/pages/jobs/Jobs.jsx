import jobs from '../../data/Jobs';
import SingleJobs from './SingleJobs';
const Jobs = () => {

  

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Jobs</span>
          </h1>

          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Find Your Dream Job Here
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

          {
            jobs?.length > 0 ? (jobs?.map((job, index) => {
              return <div key={index}>
                <SingleJobs job={job} />
              </div>
            })) : (<div>No Jobs found</div>)
          }

        </div>
      </div>
    </div>
  );
};

export default Jobs;