import React, { useState } from 'react';
import { VocabularyTerm, Language, Level, Domain } from '../types';
import VocabularyCard from './VocabularyCard';

interface VocabularyListProps {
  terms: VocabularyTerm[];
  language: Language;
  level: Level;
  domain: Domain;
  onUpdateTerm: (id: string, updates: Partial<VocabularyTerm>) => void;
}

const VocabularyList: React.FC<VocabularyListProps> = ({
  terms,
  language,
  level,
  domain,
  onUpdateTerm
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<'all' | 'learned' | 'unlearned' | 'review'>('all');
  
  const ITEMS_PER_PAGE = 5;
  
  // Filter terms based on current filter
  const filteredTerms = terms.filter(term => {
    switch (filter) {
      case 'learned':
        return term.learned;
      case 'unlearned':
        return !term.learned;
      case 'review':
        return term.reviewLater;
      default:
        return true;
    }
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredTerms.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleTerms = filteredTerms.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
  // Stats calculation
  const learnedCount = terms.filter(term => term.learned).length;
  const progressPercentage = terms.length > 0 ? Math.round((learnedCount / terms.length) * 100) : 0;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header with metadata */}
      <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <h2 className="text-2xl font-bold mb-2">
          {domain} Vocabulary
        </h2>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm">
            {Object.entries({ en: 'English', de: 'German', es: 'Spanish', fr: 'French', it: 'Italian', pt: 'Portuguese' }).find(([code]) => code === language)?.[1]}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm">
            {level} Level
          </span>
          <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm">
            {terms.length} Terms
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-white/30 rounded-full h-2.5 mb-1">
          <div 
            className="bg-green-400 h-2.5 rounded-full transition-all duration-500 ease-out" 
            style={{width: `${progressPercentage}%`}}
          ></div>
        </div>
        <div className="text-sm text-white/90">
          {learnedCount} of {terms.length} words learned ({progressPercentage}%)
        </div>
      </div>
      
      {/* Filter controls */}
      <div className="border-b border-gray-200 p-4 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            filter === 'all'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('learned')}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            filter === 'learned'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Learned
        </button>
        <button
          onClick={() => setFilter('unlearned')}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            filter === 'unlearned'
              ? 'bg-orange-100 text-orange-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Not Learned
        </button>
        <button
          onClick={() => setFilter('review')}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            filter === 'review'
              ? 'bg-purple-100 text-purple-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          For Review
        </button>
      </div>
      
      {/* Term list */}
      {filteredTerms.length === 0 ? (
        <div className="p-8 text-center text-gray-500">
          No terms match the current filter.
        </div>
      ) : (
        <div className="divide-y divide-gray-200">
          {visibleTerms.map(term => (
            <VocabularyCard 
              key={term.id} 
              term={term} 
              onUpdate={(updates) => onUpdateTerm(term.id, updates)} 
            />
          ))}
        </div>
      )}
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="p-4 border-t border-gray-200 flex justify-between items-center">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage <= 1}
            className="px-3 py-1 rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            Previous
          </button>
          
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage >= totalPages}
            className="px-3 py-1 rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default VocabularyList;