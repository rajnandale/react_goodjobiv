import React, { useState } from "react";
import UploadBox from "../components/UploadBox";
import JobCell from "../components/JobCell";
import Header from "../components/Header";
import "../assets/Home.css";

// Define the Job type
interface Job {
  _id: string;
  title: string;
  keywords: string[];
}

function Home() {
  const [searchedJobs, setSearchedJobs] = useState<Job[]>([]); // Specify that searchedJobs is an array of Job

  return (
    <>
      <Header />

      {/* Passing setSearchedJobs as a prop to UploadBox */}
      <UploadBox setSearchedJobs={setSearchedJobs} />

      <div className="flex-container">
        {searchedJobs.map((job) => (
          <JobCell key={job._id} title={job.title} keywords={job.keywords} />
        ))}
      </div>

      <footer>© 2024 SWARAJ</footer>
    </>
  );
}

export default Home;
