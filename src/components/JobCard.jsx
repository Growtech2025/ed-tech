import React from 'react';
import { MapPin, Clock, DollarSign, Calendar, Building2 } from 'lucide-react';

const JobCard = ({ job, onJobClick }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      month: 'short',
      day: 'numeric'
    });
  };

  const getDaysRemaining = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysRemaining = getDaysRemaining(job.expiryDate);

  const getExpiryText = () => {
    if (daysRemaining <= 0) {
      return 'Expired';
    } else if (daysRemaining === 1) {
      return 'Expires in 1 day';
    } else {
      return `Expires in ${daysRemaining} days`;
    }
  };

  return (
    <div
      onClick={() => onJobClick(job)}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 p-6 group transform hover:-translate-y-1"
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
          {job.title}
        </h3>
        <div className="flex items-center space-x-2 text-gray-600">
          <Building2 className="h-4 w-4" />
          <span className="text-sm font-medium">{job.company}</span>
        </div>
      </div>

      {/* Job Details */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <MapPin className="h-4 w-4 text-blue-500" />
          <span className="text-sm">{job.location}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock className="h-4 w-4 text-blue-500" />
          <span className="text-sm">{job.experience}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <DollarSign className="h-4 w-4 text-green-500" />
          <span className="text-sm font-medium">{job.salary}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Calendar className="h-4 w-4 text-blue-500" />
          <span className="text-sm">Posted {formatDate(job.postedDate)}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">
        {job.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills.slice(0, 4).map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium border border-blue-100"
          >
            {skill}
          </span>
        ))}
        {job.skills.length > 4 && (
          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200">
            +{job.skills.length - 4} more
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end pt-4 border-t border-gray-100">
        <div className={`text-sm font-medium px-2 py-1 rounded ${
          daysRemaining <= 0 ? 'bg-red-50 text-red-600' :
          daysRemaining <= 7 ? 'bg-red-50 text-red-600' : 
          daysRemaining <= 15 ? 'bg-yellow-50 text-yellow-600' : 
          'bg-green-50 text-green-600'
        }`}>
          {getExpiryText()}
        </div>
      </div>
    </div>
  );
};

export default JobCard;