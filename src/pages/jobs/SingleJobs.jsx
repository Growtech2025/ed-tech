import { Users, Briefcase, Clock, MapPin, Building, DollarSign, } from 'lucide-react';
import { useContext } from 'react';
import { jobsContext } from '../../contexts/VacancyContext.jsx';
function SingleJobs({ job }) {
    console.log("Jobns")
    const selectedJob =useContext(jobsContext);
    console.log("ansh",selectedJob)
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };
    return (
        <div >
            <div
                key={job?.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
                <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                            <img
                                src={job?.companyLogo}
                                alt={job?.company}
                                className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {job?.title}
                                </h3>
                                <div className="flex items-center space-x-4 text-gray-600 mb-2">
                                    <div className="flex items-center">
                                        <Building className="h-4 w-4 mr-1" />
                                        {job?.company}
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        {job?.location}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="h-4 w-4 mr-1" />
                                        {job?.type}
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <Users className="h-4 w-4 mr-1" />
                                        {job?.experience}
                                    </div>
                                    <div className="flex items-center">
                                        <DollarSign className="h-4 w-4 mr-1" />
                                        {job?.salary}
                                    </div>
                                    <div className="text-gray-400">
                                        Posted {formatDate(job?.postedDate)}
                                    </div>
                                    {job?.remote && (
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                            Remote
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                            <Briefcase className="h-4 w-4" />
                            <span>Apply Now</span>
                        </button>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                        {job?.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {job?.skills?.slice(0, 5)?.map((skill, index) => (
                            <span
                                key={index}
                                className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                        {job.skills.length > 5 && (
                            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                +{job.skills.length - 5} more
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleJobs;