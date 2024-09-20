import React, { useState, useEffect } from 'react';
import JobCell from '../components/JobCell';
import Header from '../components/Header';

interface JobRole {
  _id: string;
  title: string;
  keywords: string[];
}

const JobRoles: React.FC = () => {
  const [jobRoles, setJobRoles] = useState<JobRole[]>([]);

  useEffect(() => {
    // Fetch job roles from the backend endpoint
    fetch(`${import.meta.env.VITE_API_URL}/jobRoles`)
      .then((response) => response.json())
      .then((data: JobRole[]) => setJobRoles(data))
      .catch((error) => console.error('Error fetching job roles:', error));
  }, []);

  return (
    <>
      <Header />
      <h1>All Job Roles</h1>
      <div className="flex-container">
        {jobRoles.map((job) => (
          <JobCell key={job._id} title={job.title} keywords={job.keywords} />
        ))}
      </div>
      <footer>© 2024 Your Company Name</footer>
    </>
  );
};

export default JobRoles;
