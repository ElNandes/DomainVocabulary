import React, { useState } from 'react';
import { Language, Level, Domain, GenerateParams } from '../types';

// Available options for form selectors
const LANGUAGES: Record<Language, string> = {
  en: 'English',
  de: 'German',
  es: 'Spanish',
  fr: 'French',
  it: 'Italian',
  pt: 'Portuguese'
};

const LEVELS: Record<Level, string> = {
  A1: 'Beginner (A1)',
  A2: 'Elementary (A2)',
  B1: 'Intermediate (B1)',
  B2: 'Upper Intermediate (B2)',
  C1: 'Advanced (C1)',
  C2: 'Proficient (C2)'
};

const DOMAINS: Record<Domain, string> = {
  'Web Development': 'Web Development',
  'Artificial Intelligence': 'Artificial Intelligence',
  'Cybersecurity': 'Cybersecurity',
  'Cloud Computing': 'Cloud Computing',
  'Data Science': 'Data Science',
  'Mobile Development': 'Mobile Development',
  'DevOps': 'DevOps',
  'Blockchain': 'Blockchain'
};

interface VocabularyFormProps {
  onGenerate: (params: GenerateParams) => void;
  isLoading: boolean;
}

const VocabularyForm: React.FC<VocabularyFormProps> = ({ onGenerate, isLoading }) => {
  // Form state
  const [language, setLanguage] = useState<Language>('en');
  const [level, setLevel] = useState<Level>('B1');
  const [domain, setDomain] = useState<Domain>('Web Development');
  const [customDomain, setCustomDomain] = useState('');
  const [count, setCount] = useState(20);
  const [showCustomDomain, setShowCustomDomain] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const finalDomain = showCustomDomain ? customDomain : domain;
    
    onGenerate({
      language,
      level,
      domain: finalDomain,
      count
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Generate Vocabulary List</h2>
      
      <div className="space-y-4">
        {/* Language Selection */}
        <div>
          <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
            Language
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            {Object.entries(LANGUAGES).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* Proficiency Level */}
        <div>
          <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
            Proficiency Level
          </label>
          <select
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value as Level)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            {Object.entries(LEVELS).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* Domain Selection */}
        <div>
          <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-1">
            Technical Domain
          </label>
          <div className="flex flex-col space-y-2">
            <select
              id="domain"
              value={showCustomDomain ? 'custom' : domain}
              onChange={(e) => {
                if (e.target.value === 'custom') {
                  setShowCustomDomain(true);
                } else {
                  setShowCustomDomain(false);
                  setDomain(e.target.value as Domain);
                }
              }}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              {Object.entries(DOMAINS).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
              <option value="custom">Custom Domain...</option>
            </select>
            
            {showCustomDomain && (
              <input
                type="text"
                placeholder="Enter custom domain"
                value={customDomain}
                onChange={(e) => setCustomDomain(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required={showCustomDomain}
              />
            )}
          </div>
        </div>

        {/* Word Count */}
        <div>
          <label htmlFor="count" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Words ({count})
          </label>
          <input
            id="count"
            type="range"
            min="5"
            max="50"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5</span>
            <span>50</span>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors ${
            isLoading
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          }`}
        >
          {isLoading ? 'Generating...' : 'Generate Vocabulary List'}
        </button>
      </div>
    </form>
  );
};

export default VocabularyForm;