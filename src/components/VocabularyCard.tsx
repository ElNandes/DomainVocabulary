import React, { useState } from 'react';
import { VocabularyTerm } from '../types';
import { ChevronDown, ChevronUp, Check, BookmarkPlus, BookmarkCheck, X } from 'lucide-react';

interface VocabularyCardProps {
  term: VocabularyTerm;
  onUpdate: (updates: Partial<VocabularyTerm>) => void;
  currentIndex: number;
  totalCards: number;
}

const VocabularyCard: React.FC<VocabularyCardProps> = ({ term, onUpdate, currentIndex, totalCards }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  
  const toggleLearned = () => {
    onUpdate({ learned: !term.learned });
  };
  
  const toggleReviewLater = () => {
    onUpdate({ reviewLater: !term.reviewLater });
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-4">
      <div className="mb-4 text-sm text-gray-500 font-medium">
        {currentIndex} / {totalCards}
      </div>
      <div
        className={`w-full h-[calc(100vh-13rem)] max-w-[500px] mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 ${
          term.learned ? 'bg-green-50' : 'bg-white'
        }`}
      >
      {/* Card header */}
      <div 
          className={`p-6 flex justify-between items-start cursor-pointer group ${expanded ? 'border-b border-gray-100' : ''}`}
        onClick={toggleExpanded}
      >
        <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <h3 className={`text-2xl font-medium ${term.learned ? 'text-green-700' : 'text-gray-900'}`}>
                {term.term}
              </h3>
            {term.learned && (
                <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                  <Check size={14} className="mr-1" />
                Learned
              </span>
            )}
            {term.reviewLater && (
                <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                  <BookmarkCheck size={14} className="mr-1" />
                Review
              </span>
            )}
          </div>
            <p className="text-gray-600 text-lg leading-relaxed">{term.definition}</p>
        </div>
        
          <div className="flex items-center gap-2 ml-4">
          <button 
            onClick={(e) => { e.stopPropagation(); toggleLearned(); }}
              className={`p-2.5 rounded-full transition-colors ${
              term.learned 
                ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
            title={term.learned ? "Mark as not learned" : "Mark as learned"}
          >
              {term.learned ? <X size={20} /> : <Check size={20} />}
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); toggleReviewLater(); }}
              className={`p-2.5 rounded-full transition-colors ${
              term.reviewLater 
                ? 'bg-purple-100 text-purple-700 hover:bg-purple-200' 
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
            title={term.reviewLater ? "Remove from review" : "Mark for review"}
          >
              {term.reviewLater ? <BookmarkCheck size={20} /> : <BookmarkPlus size={20} />}
          </button>
          
            <button className="p-2.5 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 group-hover:bg-gray-200">
              {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>
      
      {/* Expanded content with story */}
      {expanded && (
          <div className="flex-1 p-6 text-gray-700 bg-gray-50 animate-fadeIn overflow-y-auto">
            <h4 className="font-medium text-gray-900 mb-3 text-lg">Contextual Story:</h4>
            <p className="leading-relaxed whitespace-pre-line text-base">{term.story}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default VocabularyCard;