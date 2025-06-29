import React from 'react';
import { ArrowLeft, MapPin, Clock, DollarSign, Calendar, Building2, Users } from 'lucide-react';

const JobDetail = ({ job, onBack }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      month: 'long',
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

  const getExpiryText = () => {
    if (daysRemaining <= 0) {
      return 'Expired';
    } else if (daysRemaining === 1) {
      return '1 day left';
    } else {
      return `${daysRemaining} days left`;
    }
  };

  const daysRemaining = getDaysRemaining(job.expiryDate);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Building2 className="h-5 w-5 text-blue-500" />
                <span className="text-lg font-medium">{job.company}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span>{job.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Job Overview */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600 mb-1">Experience Required</p>
                <p className="font-semibold text-gray-900">{job.experience}</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm text-gray-600 mb-1">Salary</p>
                <p className="font-semibold text-gray-900">{job.salary}</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600 mb-1">Posted</p>
                <p className="font-semibold text-gray-900">{formatDate(job.postedDate)}</p>
              </div>
              <div className={`text-center p-4 rounded-lg ${
                daysRemaining <= 0 ? 'bg-red-50' :
                daysRemaining <= 7 ? 'bg-red-50' : 
                daysRemaining <= 15 ? 'bg-yellow-50' : 
                'bg-green-50'
              }`}>
                <div className="flex items-center justify-center mb-2">
                  <Calendar className={`h-6 w-6 ${
                    daysRemaining <= 0 ? 'text-red-600' :
                    daysRemaining <= 7 ? 'text-red-600' : 
                    daysRemaining <= 15 ? 'text-yellow-600' : 
                    'text-green-600'
                  }`} />
                </div>
                <p className="text-sm text-gray-600 mb-1">Expires</p>
                <p className={`font-semibold ${
                  daysRemaining <= 0 ? 'text-red-600' :
                  daysRemaining <= 7 ? 'text-red-600' : 
                  daysRemaining <= 15 ? 'text-yellow-600' : 
                  'text-green-600'
                }`}>
                  {getExpiryText()}
                </p>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Job Description</h3>
              <p className="text-gray-700 leading-relaxed text-base">{job.description}</p>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Required Skills</h3>
            <div className="flex flex-wrap gap-3">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-700 text-sm rounded-lg font-medium border border-blue-100 hover:bg-blue-100 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-600" />
              Requirements
            </h3>
            <ul className="space-y-3">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsibilities */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Responsibilities</h3>
            <ul className="space-y-3">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Benefits & Perks</h3>
            <ul className="space-y-3">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Section */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-gray-900 mb-2">{job.salary}</div>
              <div className="text-gray-600 text-lg">per annum</div>
            </div>
            
            <button
              className={`w-full py-4 px-6 rounded-lg text-white font-semibold text-lg transition-all transform hover:scale-105 ${
                daysRemaining > 0
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={daysRemaining <= 0}
            >
              {daysRemaining > 0 ? 'Apply Now' : 'Application Closed'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;