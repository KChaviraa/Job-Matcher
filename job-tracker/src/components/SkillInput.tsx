import React, { useState, KeyboardEvent } from 'react';

interface SkillInputProps {
  skills: string[];
  onAddSkill: (skill: string) => void;
  onRemoveSkill: (skill: string) => void;
}

export default function SkillInput({ skills, onAddSkill, onRemoveSkill }: SkillInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      const newSkill = inputValue.trim();
      // Only add if not already present (case-insensitive)
      if (!skills.some(s => s.toLowerCase() === newSkill.toLowerCase())) {
        onAddSkill(newSkill);
      }
      setInputValue('');
    }
  };

  return (
    <div className="skill-input-container">
      <div className="glass-panel">
        <div className="skill-input-wrapper">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#a1a1aa', marginRight: '8px' }}>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="skill-input"
            placeholder="Type a skill (e.g. React, TypeScript) and press Enter..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        {skills.length > 0 && (
          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
                <button
                  className="skill-tag-remove"
                  onClick={() => onRemoveSkill(skill)}
                  aria-label={`Remove ${skill}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
