import React from 'react';

interface JobCellProps {
  title: string;
  keywords: string[];
}

const JobCell: React.FC<JobCellProps> = ({ title, keywords }) => {
  return (
    <div className="job-cell">
      <h2>{title}</h2>
      <ul>
        {keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobCell;
