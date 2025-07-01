import SingleJobs from "../pages/jobs/SingleJobs.jsx";
import App from "../App.js";
import { createContext } from "react";
import { useState } from "react";
export const jobsContext = createContext();
function VacancyContext() {
    let ans = 9087;
    const [selectedJob, setSelectedJob] = useState(null);
    const handleJobClick = (job) => {
        setSelectedJob(job);
    };
    const handleBackToJobs = () => {
        setSelectedJob(null);
    };

    if (selectedJob) {
        return <SingleJobs job={selectedJob} onBack={handleBackToJobs} />;
    }

    const user = {
        selectedJob, setSelectedJob, handleBackToJobs, handleJobClick, ans
    }
    return (
        <jobsContext.Provider
            value={user}
        >
            {/* <App /> */}
        </jobsContext.Provider>
    );
};


export default VacancyContext;
