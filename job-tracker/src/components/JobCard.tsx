import React from 'react';
import { Job } from '../data/jobs';

interface JobCardProps {
  job: Job;
  userSkills: string[];
}

export default function JobCard({ job, userSkills }: JobCardProps) {
  // A skill is matched if the user has added it (case-insensitive)
  const isSkillMatched = (skill: string) => {
    return userSkills.some((s) => s.toLowerCase() === skill.toLowerCase());
  };

  return (
    <div className="job-card">
      <div className="job-header">
        <div>
          <h3 className="job-title">{job.title}</h3>
          <p className="job-company">{job.company}</p>
        </div>
        <span className="job-type">{job.type}</span>
      </div>
      
      <p className="job-description">{job.description}</p>
      
      <div className="job-skills">
        {job.requiredSkills.map((skill) => (
          <span
            key={skill}
            className={`job-skill-dot ${isSkillMatched(skill) ? 'matched' : ''}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
