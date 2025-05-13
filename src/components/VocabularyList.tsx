import React, { useState, useEffect, useRef } from 'react';
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
  const [filter, setFilter] = useState<'all' | 'learned' | 'unlearned' | 'review'>('all');
  const [currentIndex, setCurrentIndex] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
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
  
  // Stats calculation
  const learnedCount = terms.filter(term => term.learned).length;
  const progressPercentage = terms.length > 0 ? Math.round((learnedCount / terms.length) * 100) : 0;

  // Setup Intersection Observer to track current card
  useEffect(() => {
    const options = {
      root: scrollContainerRef.current,
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '1');
          setCurrentIndex(index);
        }
      });
    }, options);

    // Observe all card elements
    const cards = document.querySelectorAll('.vocabulary-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredTerms.length]);
  
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header with metadata */}
      <div className="flex-shrink-0 p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
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
            {filteredTerms.length} Terms
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
      <div className="flex-shrink-0 border-b border-gray-200 p-4 flex flex-wrap gap-2 bg-white">
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
        <div className="flex-1 p-8 flex items-center justify-center text-gray-500">
          No terms match the current filter.
        </div>
      ) : (
        <div className="flex-1 relative bg-gray-100">
          <div ref={scrollContainerRef} className="absolute inset-0 flex flex-col overflow-y-auto snap-y snap-mandatory hide-scrollbar">
            {filteredTerms.map((term, index) => (
              <div 
                key={term.id} 
                className="flex-none h-full w-full snap-start vocabulary-card"
                data-index={index + 1}
              >
            <VocabularyCard 
              term={term} 
              onUpdate={(updates) => onUpdateTerm(term.id, updates)} 
                  currentIndex={index + 1}
                  totalCards={filteredTerms.length}
            />
              </div>
          ))}
        </div>
          
          {/* Navigation Indicators */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1">
            {filteredTerms.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index + 1 === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => {
                  const cards = document.querySelectorAll('.vocabulary-card');
                  cards[index]?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VocabularyList;