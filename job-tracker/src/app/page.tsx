"use client";

import React, { useState, useMemo } from 'react';
import SkillInput from '@/components/SkillInput';
import JobCard from '@/components/JobCard';
import { MOCK_JOBS } from '@/data/jobs';

export default function Home() {
  const [userSkills, setUserSkills] = useState<string[]>([]);
  // Default to ANY (Flexible) so jobs show up immediately when entering a single skill
  const [matchMode, setMatchMode] = useState<'ALL' | 'ANY'>('ANY');

  const handleAddSkill = (skill: string) => {
    setUserSkills((prev) => [...prev, skill]);
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setUserSkills((prev) => prev.filter((s) => s !== skillToRemove));
  };

  const filteredJobs = useMemo(() => {
    if (userSkills.length === 0) return MOCK_JOBS;

    return MOCK_JOBS.filter((job) => {
      const required = job.requiredSkills.map(s => s.toLowerCase());
      const selected = userSkills.map(s => s.toLowerCase());

      if (matchMode === 'ALL') {
        // Job matches if the user has ALL of its required skills
        return required.every((req) => selected.includes(req));
      } else {
        // Job matches if the user has ANY of its required skills
        return required.some((req) => selected.includes(req));
      }
    });
  }, [userSkills, matchMode]);

  return (
    <>
      <header className="container header">
        <h1 className="header-title">Job Matcher</h1>
        <p className="header-subtitle">
          Find your dream job faster. Enter your skills below to instantly filter roles
          that fit your unique expertise.
        </p>
      </header>

      <main className="container">
        <SkillInput
          skills={userSkills}
          onAddSkill={handleAddSkill}
          onRemoveSkill={handleRemoveSkill}
        />

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Match Mode:</span>
          <select 
            value={matchMode} 
            onChange={(e) => setMatchMode(e.target.value as 'ALL' | 'ANY')}
            style={{
              background: 'rgba(24, 24, 27, 0.8)',
              color: 'var(--foreground)',
              border: '1px solid var(--card-border)',
              padding: '0.4rem 1rem',
              borderRadius: '8px',
              outline: 'none',
              fontFamily: 'inherit',
              cursor: 'pointer'
            }}
          >
            <option value="ALL">Stricter (All Skills Required)</option>
            <option value="ANY">Flexible (Any Skill Matches)</option>
          </select>
        </div>

        {filteredJobs.length > 0 ? (
          <div className="job-grid">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} userSkills={userSkills} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No matching jobs found</h3>
            <p>Try removing some skills or switching to Flexible match mode.</p>
          </div>
        )}
      </main>
    </>
  );
}
