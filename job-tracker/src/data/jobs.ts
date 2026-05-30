import jobsData from './jobs.json';

export type Job = {
  id: string;
  title: string;
  company: string;
  description: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  requiredSkills: string[];
};

export const MOCK_JOBS: Job[] = jobsData as Job[];
